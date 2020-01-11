import React, { useContext, useEffect } from 'react'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import styles from './TagsPage.module.css'
import { assert } from '../utils'
import { A, useTitle } from 'hookrouter'
import Spinner from '../Spinner/Spinner'
import { getTagPagePath } from '../routes'

const translations = {
  empty: ["There are no tags yet.", "Todavía no hay ningunas etiquetas."],
  title: {
    initial: ["Loading the tags", "Descargando las etiquetas"],
    loaded: ["Tags", "Etiquetas"]
  },
  tags: ["the tags", "las etiquetas"]
}

export default function TagsPage () {
  const { lang, t } = useContext(LangContext)
  const state = useContext(StateContext)

  useEffect(() => { state.tagsFetched || state.helpers.fetchTags() })
  useTitle(state.tagsFetched ?  t(translations.title.loaded) : t(translations.title.initial))

  const TagPreview = ({ slug, name }) => (
    <li className={assert(styles.tag)}><A href={getTagPagePath(slug)}>{name}</A></li>
  )

  const TagPreviewList = ({ tags }) => (
    <ul style={{paddingLeft: 0}}>
      {tags.sort((a, b) => a.slug.localeCompare(b.slug)).map((tag) => <TagPreview key={tag.slug} {...tag} />)}
    </ul>
  )

  const NoTagsPlaceholder = () => (
    <div className={assert(styles.empty)}>{t(translations.empty)}</div>
  )

  const TagList = ({ tags }) => (
    tags.length ? <TagPreviewList tags={tags} /> : <NoTagsPlaceholder />
  )

  if (state.tagsFetched) {
    return (
      <>
        <h1>{t(translations.title.loaded)}</h1>
        <TagList tags={state.tags} />
      </>
    )
  } else {
    return <Spinner title={t(translations.tags)} />
  }
}
