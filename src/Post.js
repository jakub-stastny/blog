import React, { Component } from 'react'
import Moment from 'react-moment'

import { Link } from 'react-router-dom'
import TagList from './TagList'
import Discussion from './Discussion'

import styles from './Post.module.css'

export default class Post extends Component {
  state = {post: {}, isLoading: true}

  componentDidMount() {
    const slug = this.props.match.params.slug
    fetch(`https://raw.githubusercontent.com/botanicus/data.blog/content/content/posts/${slug}.json`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        post: data,
        isLoading: false,
      })
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({error, isLoading: false}))
  }

  render() {
    const { post } = this.state
    console.log(post)

    return (
      <article>
        <h1>{post.title}</h1>
        {/* Update every 30 seconds. */}
        <Moment date={new Date(post.published_at)} fromNow interval={30000} className={styles.date} />
        <TagList tags={post.tags} />
        <p className={styles.excerpt} dangerouslySetInnerHTML={{__html: post.excerpt}} />
        <div dangerouslySetInnerHTML={{ __html: post.body}} />

        <footer>
          {/* Small pic of me. */}
          <Link to="/about">About the author</Link>.
        </footer>

        <Discussion url={post.url} identifier={post.slug} title={post.title} />
      </article>
    )
  }
}
