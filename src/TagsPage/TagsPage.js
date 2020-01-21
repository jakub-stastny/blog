import React, { useContext, useEffect } from 'react'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
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
  categories: {
    it: ["IT", "TI"],
    life: ["Life", "Vida"],
    finance: ["Finance", "Dinero"],
    others: ["Others", "El resto"],
  }
}

const categories = {
  it: ["1Password", "Draft.js", "iPadOS", "Ruby on Rails", "blog engine", "iPad Pro"],
  life: ["email", "advertising", "capitalism", "consumerism", "depression", "ego", "ego death", "low-tech lifestyle"],
  finance: ["finance", "finance planning"],
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

  const TagPreviewList = ({ tags }) => (
    Object.entries(tags.reduce((categoriesWithTags, tag) => {
      const category = [Object.entries(categories).find(([ category, list ]) => list.includes(tag.name)) || [t(translations.categories.others), []]][0][0]
      if (!categoriesWithTags[category]) categoriesWithTags[category] = []
      categoriesWithTags[category].push(tag)
      return categoriesWithTags
    }, {})).sort(([ nameA, tagsA ], [ nameB, tagsB ]) => nameA.localeCompare(nameB)).map(([ category, tags ]) => (
      <span key={category}>
        <h3>{translations.categories[category] ? t(translations.categories[category]) : t(translations.categories.others)}</h3>
        <ul style={{paddingLeft: 0}}>
          {tags.sort((a, b) => a.slug.localeCompare(b.slug)).map((tag) => <TagPreview key={tag.slug} {...tag} />)}
        </ul>
      </span>
    ))
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
