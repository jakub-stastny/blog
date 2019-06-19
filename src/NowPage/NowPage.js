import React from 'react'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import Post from '../Post/Post'

/*
  Render latest post tagged with 'now'.
  Inspired by nownownow.com.
*/

const getLastUpdatePostSlug = (data) => (
  (data && data.posts) ? data.posts.slice(-1)[0].slug : ''
)

export default function NowPage () {
  const [isLoading, data, error] = useFetchedData(
    `https://raw.githubusercontent.com/botanicus/data.blog/master/output/tags/now.json`, {}
  )

  // FIXME: The code inside FetchedData looks wrong, why is it evaluated before we've got data?
  return (
    <FetchedData isLoading={isLoading} error={error}>
      { data && data.posts ? <Post match={{params: {slug: getLastUpdatePostSlug(data)}}} /> : <div /> }
    </FetchedData>
  )
}
