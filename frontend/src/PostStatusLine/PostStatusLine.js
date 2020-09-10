import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import TagList from '../TagList/TagList'
import PublishedDate from '../PublishedDate/PublishedDate'
import { assert } from '../utils'
import styles from './PostStatusLine.module.css'

const translations = {
  taggedWith: ["tagged with", "etiquetadas con"],
  published: ["Published", "Publicada"]
}

export default memo(function PostStatusLine ({ date, tags = [] }) {
  const { t, setLang } = useContext(LangContext)

  const InlineTagList = ({ tags }) => (
    <>
      , {t(translations.taggedWith)} <TagList setLang={setLang} tags={tags} />
    </>
  )

  const TagsPart = ({ tags }) => (
    tags.length ? <InlineTagList tags={tags} /> : null
  )

  return (
    <div className={assert(styles.line)}>
      {t(translations.published)} <PublishedDate date={date} />
      <TagsPart tags={tags} />.
    </div>
  )
})
