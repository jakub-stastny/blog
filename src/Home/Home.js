/* TODO: tests. */
import React, { Fragment, useState, useEffect } from 'react'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PostPreview from '../PostPreview/PostPreview'
import Spinner from '../Spinner/Spinner'

export default function Home () {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/botanicus/data.blog/content/content/posts.json')
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data => {
      setIsLoading(false)
      setPosts(data)
    })
    // Catch any errors we hit and update the app
    .catch(error => {
      setIsLoading(false)
      setError(error)
    })
  })

  if (!isLoading && posts && posts.length) {
    // Ah! No need to wrap!
    return posts.map((post) => <PostPreview key={post.slug} {...post} />)
  }

  // TODO: Center these to the centre of the page.
  if (isLoading) {
    return <Spinner />
  } else if (error) {
    return <h1>Error</h1>
  } else {
    return <Fragment>There are no posts yet.</Fragment>
  }
}
