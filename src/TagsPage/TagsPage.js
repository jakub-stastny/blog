import React, { useContext, useEffect } from 'react'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import { findCategoryForTag, categoriesEN, defaultCategoryEN, categoriesES, defaultCategoryES } from './categories'
import styles from './TagsPage.module.css'
import { assert } from '../utils'
import { A, useTitle } from 'hookrouter'
import Spinner from '../Spinner/Spinner'
import * as routes from '../routes'

const translations = {
  empty: ["There are no tags yet.", "Todavía no hay ningunas etiquetas."],
  title: {
    initial: ["Loading the tags", "Descargando las etiquetas"],
    loaded: ["Tags", "Etiquetas"]
  },
  tags: ["the tags", "las etiquetas"],
  categories: [categoriesEN, categoriesES],
  others: [defaultCategoryEN, defaultCategoryES]
}

export default function TagsPage ({ lang }) {
  const { t, setLang } = useContext(LangContext)

  setLang(lang)

  const state = useContext(StateContext)

  const { getTagPagePath } = routes[lang]

  useEffect(() => { state.tagsFetched || state.helpers.fetchTags() })
  useTitle(state.tagsFetched ?  t(translations.title.loaded) : t(translations.title.initial))

  const TagPreview = ({ slug, name, relevance }) => (
    <li className={assert(styles.tag)} style={{fontSize: 12 + relevance}}>
      <A href={getTagPagePath(slug)}>{name.replace(/ /g, '\u00a0')}</A>
    </li>
  )

  const categoryWithTags = state.tags.reduce((categoriesWithTags, tag) => {
    const category = findCategoryForTag(lang, tag.name) || t(translations.others)
    if (!categoriesWithTags[category.name]) categoriesWithTags[category.name] = []
    categoriesWithTags[category.name].push(tag)
    return categoriesWithTags
  }, {})

  const TagPreviewList = ({ tags }) => (
    <div className={assert(styles.cards)}>
      {Object.entries(categoryWithTags).sort(([ nameA, tagsA ], [ nameB, tagsB ]) => nameA.localeCompare(nameB)).map(([ categoryName, tags ]) => (
        <div key={categoryName} className={assert(styles.card)}>
          <h3 style={{margin: 0}}>{categoryName}</h3>
          <ul style={{margin: 0, paddingLeft: 0}}>
            {tags.sort((a, b) => a.slug.localeCompare(b.slug)).map((tag) => <TagPreview key={tag.slug} {...tag} />)}
          </ul>
        </div>
      ))}
    </div>
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
