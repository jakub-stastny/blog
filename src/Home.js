import React, { Component } from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostPreview from './PostPreview';
import Spinner from './Spinner';

export default class Home extends Component {
  state = {posts: [], isLoading: true}

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/botanicus/data.blog/content/content/posts.json')
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
      this.setState({
        posts: data,
        isLoading: false,
      })
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({error, isLoading: false}));
  }

  render() {
    const { posts, isLoading, error } = this.state;

    if (!isLoading && posts && posts.length) {
      return posts.map((post) => <PostPreview key={post.slug} {...post} />);
    }

    // TODO: Center these to the centre of the page.
    if (isLoading) {
      return <Spinner />;
    } else if (error) {
      return <h1>Error</h1>;
    } else {
      return <div>There are no posts yet.</div>;
    }
  }
}
