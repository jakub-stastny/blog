import React, { useContext, useEffect } from 'react'
import StateContext from '../state'
import styles from './TagsPage.module.css'
import { assert } from '../utils'
import { A, useTitle } from 'hookrouter'
import Spinner from '../Spinner/Spinner'
import { getTagPagePath } from '../routes'

const TagPreview = ({ slug, name }) => (
  <li className={assert(styles.tag)}><A href={getTagPagePath(slug)}>{name}</A></li>
)

const TagPreviewList = ({ tags }) => (
  <ul>
    {tags.sort((a, b) => a.slug.localeCompare(b.slug)).map((tag) => <TagPreview key={tag.slug} {...tag} />)}
  </ul>
)

const NoTagsPlaceholder = () => (
  <div className={assert(styles.empty)}>There are no tags yet.</div>
)

const TagList = ({ tags }) => (
  tags.length ? <TagPreviewList tags={tags} /> : <NoTagsPlaceholder />
)

export default function TagsPage () {
  const state = useContext(StateContext)

  useEffect(() => { state.tagsFetched || state.helpers.fetchTags() })
  useTitle(state.tagsFetched ?  "Tags" : "Loading the tags")

  return (
    state.tagsFetched ? <TagList tags={state.tags} /> : <Spinner title="the tags" />
  )
}
