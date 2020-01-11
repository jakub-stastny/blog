import React, { useContext, memo } from 'react'
import { useTitle } from 'hookrouter'
import PostPreview from '../PostPreview/PostPreview'
import Spinner from '../Spinner/Spinner'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import styles from './HomePage.module.css'
import { assert } from '../utils'

const translations = {
  title: ["Jakub's blog", "Blog de Jakub"],
  empty: ["There are no posts yet.", "Todavía no hay ningunas entradas."],
  posts: ["the posts", "las entradas"]
}

export default memo(function HomePage () {
  const { lang, t } = useContext(LangContext)
  const state = useContext(StateContext)

  useTitle(t(translations.title))

  const MissingTranslationsWarning = () => (
    <div className={assert(styles.missingTranslationsBox)}>
      <p>
        Disculpa, pero en este momento las entradas no están traducidas a español.
      </p>

      <p>
        Es posible que vaya a hacerlo, pero todavía no estoy decidido.
      </p>
    </div>
  )

  const PostPreviewList = ({ posts }) => (
    <>
      {lang === 'es' && <MissingTranslationsWarning />}
      {posts.map((post) => <PostPreview key={post.slug} {...post} />)}
    </>
  )

  const NoPostsPlaceholder = () => (
    <div className={assert(styles.empty)}>{t(translations.empty)}</div>
  )

  const PostList = ({ posts }) => (
    posts.length ? <PostPreviewList posts={posts} /> : <NoPostsPlaceholder />
  )

  return state.postsFetched ? <PostList t={t} posts={state.posts} /> : <Spinner title={t(translations.posts)} />
})
