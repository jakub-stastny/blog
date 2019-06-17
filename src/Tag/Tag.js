/* TODO: tests. */
import React, { Fragment }  from 'react'
import Moment from 'react-moment'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import { assert } from '../utils'
import postStyles from '../Post/Post.module.css'
import homeStyles from '../Home/Home.module.css'

/* TODO: This probably should be PostPreview. */
function Post({ title, path, date }) {
  return <li>
    <a href={path}>{title}</a>{' '}
    {/* Update every 30 seconds. */}
    <Moment date={new Date(date)} fromNow interval={30000} className={postStyles.date} />
  </li>
}

function TagPreview ({ slug, title, posts }) {
  return <Fragment>
    <h1>{title}</h1>
    <ul>
      {posts.map((post) => <Post {...post} />)}
    </ul>
  </Fragment>
}

function TagList ({ data }) {
  if (data.posts.length) {
    console.log(data)
    // return data.posts.map((post) => <TagPreview key={data.slug} {...data} />)
  } else {
    // TODO: This keeps repeating, extract it out.
    // Actually ... this shouldn't ever happen, the generator wouldn't generate it.
    return <div className={assert(homeStyles.empty)}>There are no posts for this tag yet.</div>
  }
}

export default function Tag ({ match }) {
  const slug = match.params.slug
  const [isLoading, data, error] = useFetchedData(
    `https://raw.githubusercontent.com/botanicus/data.blog/master/output/tags/${slug}.json`, {}
  )

  return <FetchedData isLoading={isLoading} error={error}>
    <TagList data={data} />
  </FetchedData>
}
