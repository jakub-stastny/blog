import React, { useEffect, useContext }  from 'react'
import { useTitle, A } from 'hookrouter'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import PublishedDate from '../PublishedDate/PublishedDate'
import Spinner from '../Spinner/Spinner'
import { findTagEntryForTagName } from '../TagsPage/entries'
import * as routes from '../routes'
import { assert } from '../utils'
import styles from './TagPage.module.css'

const translations = {
  title: {
    loading: ["Loading ...", "Cargando ..."],
    loaded: ["Tag", "Loading ..."],
  },
  spinner: ["the tag data", "los datos de la etiqueta"],
  heading: ["Posts tagged", "Entradas etiquetadas"],
  list: ["Show all tags", "Ver todas las etiquetas"]
}

export default function Tag ({ lang, slug }) {
  const state = useContext(StateContext)
  const { t, setLangFn } = useContext(LangContext)
  const tag = state.helpers.getTag(slug)

  const { getPostPagePath, tagsPagePath } = routes[lang]

  useEffect(() => { setLangFn(lang) })

  useTitle(tag ? `${t(translations.title.loaded)} ${tag.name}` : t(translations.title.loading))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { state.helpers.fetchTag(slug, lang) }, [])

  const PostPreview = ({ title, slug, date }) => (
    <li>
      <A href={getPostPagePath(slug)}>{title}</A>{' '}
      <span className={assert(styles.date)}>
        <PublishedDate date={date} />
      </span>
    </li>
  )

  // There are always some posts in the loaded state, otherwise the JSON tag file would never get compiled.
  const PostPreviewList = ({ posts = [] }) => (
    <ul>
      {posts.map((post) => <PostPreview key={post.slug} {...post} />)}
    </ul>
  )

  const TagList = ({ name, posts }) => (
    <>
      <h1>{t(translations.heading)} <span className={assert(styles.emphasis)}>{name}</span></h1>
      {findTagEntryForTagName(lang, name).description(lang)}
      <PostPreviewList posts={posts} />
      <div>
        <A href={tagsPagePath}>{t(translations.list)}</A>
      </div>
    </>
  )

  return (
    tag ? <TagList {...tag} /> : <Spinner title={t(translations.spinner)} />
  )
}
