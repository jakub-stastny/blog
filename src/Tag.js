import React, { Component, Fragment } from 'react';
import Moment from 'react-moment';

const styles = {} // FIXME

class Post extends Component {
  render() {
    console.log(this.props)
    const { title, path, published_at } = this.props
    return <li>
      <a href={path}>{title}</a>{' '}
      {/* Update every 30 seconds. */}
      <Moment date={new Date(published_at)} fromNow interval={30000} className={styles.date} />
    </li>
  }
}

export default class Tag extends Component {
  state = {data: {}, isLoading: true}

  componentDidMount() {
    const slug = this.props.match.params.slug
    fetch(`https://raw.githubusercontent.com/botanicus/data.blog/content/content/tags/${slug}.json`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        data: data,
        isLoading: false,
      })
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({error, isLoading: false}));
  }
  render() {
    const { tag, posts } = this.state.data
    if (this.state.isLoading) return null
    console.log(tag)
    console.log(posts)
    return <Fragment>
      <h1>{tag.title}</h1>
      <ul>
        {posts.map((post) => <Post {...post} />)}
      </ul>
    </Fragment>
  }
}
