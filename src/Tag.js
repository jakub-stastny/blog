import React, { Fragment, useState } from 'react'
import Moment from 'react-moment'

const styles = {} // FIXME

function Post({ title, path, published_at }) {
  return <li>
    <a href={path}>{title}</a>{' '}
    {/* Update every 30 seconds. */}
    <Moment date={new Date(published_at)} fromNow interval={30000} className={styles.date} />
  </li>
}

export default function Tag({ match }) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  function componentDidMount() {
    const slug = match.params.slug
    fetch(`https://raw.githubusercontent.com/botanicus/data.blog/content/content/tags/${slug}.json`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data => {
      setIsLoading(false)
      setData(data)
    })
    // Catch any errors we hit and update the app
    .catch(error => {
      setIsLoading(false)
      setError(error)
    })
  }

  const { tag, posts } = data
  if (isLoading) return null
  console.log(tag)
  console.log(posts)
  return <Fragment>
    <h1>{tag.title}</h1>
    <ul>
      {posts.map((post) => <Post {...post} />)}
    </ul>
  </Fragment>
}
