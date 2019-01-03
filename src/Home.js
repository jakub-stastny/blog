import React, { Component } from 'react';

const posts = [
  {
    title: "Hello world",
    excerpt: "Lorem ipsum.",
    body: "Lorem ipsum."
  }
]

class Post extends Component {
  render() {
    const { post } = this.props;

    return (
      <article>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
      </article>
    );
  }
}

export default () => <div>
    {posts.map((post) => <Post post={post} />)}
  </div>;
