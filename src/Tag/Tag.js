/* TODO: tests. */
import React, { Fragment }  from 'react'
import Moment from 'react-moment'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import { assert } from '../utils'
import postStyles from '../Post/Post.module.css'
import homeStyles from '../Home/Home.module.css'

/* TODO: This probably should be PostPreview. */
function Post({ title, slug, date }) {
  return <li>
    <a href={`/posts/${slug}`}>{title}</a>{' '}
    {/* Update every 30 seconds. */}
    <Moment date={new Date(date)} fromNow interval={30000} className={postStyles.date} />
  </li>
}

function TagListContent ({ posts = [] }) {
  if (posts.length) {
    return <ul>
      {posts.map((post) => <Post key={post.slug} {...post} />)}
    </ul>
  } else {
    // TODO: This keeps repeating, extract it out.
    // Actually ... this shouldn't ever happen, the generator wouldn't generate it.
    return <div className={assert(homeStyles.empty)}>There are no posts for this tag yet.</div>
  }
}

function TagList ({ name, posts }) {
  return <Fragment>
    <h1>{name}</h1>
    <TagListContent posts={posts} />
  </Fragment>
}

export default function Tag ({ match }) {
  const slug = match.params.slug
  const [isLoading, data, error] = useFetchedData(
    `https://raw.githubusercontent.com/botanicus/data.blog/master/output/tags/${slug}.json`, {}
  )

  return <FetchedData isLoading={isLoading} error={error}>
    <TagList {...data} />
  </FetchedData>
}
