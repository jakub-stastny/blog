import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { A } from 'hookrouter'
import Moment from 'react-moment'
import { assert } from '../utils'
import styles from './PreviousNowPosts.module.css'
import * as routes from '../routes'

import 'moment/locale/es'

const translations = {
  previousUpdates: ["Previous updates", "Actualizaciones anteriores"],
}

/* FIXME: is duplicated in PostPageFooter. */
const isTaggedWithNow = (nowTag, post) => (
  post.tags.map(tag => tag.name).includes(nowTag)
)

export default memo(function PreviousNowPosts ({ posts, currentPostSlug }) {
  const { t, lang, nowTag } = useContext(LangContext)

  const { getPostPagePath } = routes[lang]

  function titleCase (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <h3>{t(translations.previousUpdates)}</h3>
      <ul className={assert(styles.sentenceList)}>
        {posts.filter(post => isTaggedWithNow(nowTag, post) && post.slug !== currentPostSlug).map(post => (
          <li key={post.slug}>
            <A href={getPostPagePath(post.slug)}>
              <Moment date={post.date} filter={titleCase} format="MMMM YYYY" interval={0} locale={lang} />
            </A>
          </li>
        ))}
      </ul>
    </>
  )
})
