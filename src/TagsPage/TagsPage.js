/* TODO: tests. */
import React from 'react'
import FetchedData, { useFetchedData } from '../FetchedData/FetchedData'
import styles from '../Home/Home.module.css'
import { assert } from '../utils'
import { Link } from 'react-router-dom'

function TagPreview ({ slug, name }) {
  return <ul>
    <li><Link to={`/tags/${slug}`}>{name}</Link></li>
  </ul>
}

function TagList ({ tags }) {
  if (tags.length) {
    return tags.map((tag) => <TagPreview key={tag.slug} {...tag} />)
  } else {
    return <div className={assert(styles.empty)}>There are no tags yet.</div>
  }
}

export default function TagsPage () {
  const [isLoading, tags, error] = useFetchedData(
    'https://raw.githubusercontent.com/botanicus/data.blog/master/output/tags.json', []
  )

  return <FetchedData isLoading={isLoading} error={error}>
    <TagList tags={tags} />
  </FetchedData>
}

