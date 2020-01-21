import React, { useEffect, useContext, memo } from 'react'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import { useTitle } from 'hookrouter'
import PostStatusLine from '../PostStatusLine/PostStatusLine'
// import { FetchError } from '../Errors/Errors'
import Spinner from '../Spinner/Spinner'
import { markdownToHTML } from '../utils'
import { assert } from '../utils'

import PostPageBody from '../PostPageBody/PostPageBody'
import PostPageFooter from '../PostPageFooter/PostPageFooter'

import styles from './PostPage.module.css'
import 'react-tippy/dist/tippy.css'

const translations = {
  loading: ["Loading the post ...", "Descargando la entrada ..."],
  spinner: ["the post", "la entrada"]
}

export default memo(function Post ({ lang, slug }) {
  const { t, setLang } = useContext(LangContext)
  const state = useContext(StateContext)
  const post = state.helpers.getPost(slug)

  setLang(lang)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { (post && post.body) || state.helpers.fetchPost(slug) }, [])
  useEffect(() => {
    console.log('P', post)
    if (!post) return
    if (post.lang !== lang) {
      console.log(`SET LANG to ${post.lang}`)
      setLang(post.lang)
      state.helpers.reset(post.lang)
    }
  })

  useTitle(post ? post.title : t(translations.loading))

  // const errorComponent = <FetchError error={error} />

  if (!post) return <Spinner title={t(translations.spinner)} />

  return (
    <article>
      <h1 className={assert(styles.mainTitle)}>{post.title}</h1>
      <div className={assert(styles.statusLine)}>
        <PostStatusLine date={post.date} tags={post.tags} />
      </div>

      {/* We wrap it in div, as the excerpt is already wrapped in <p> due to the markdown conversion. */}
      <div className={assert(styles.excerpt)} dangerouslySetInnerHTML={{__html: markdownToHTML(post.excerpt)}} />

      <PostPageBody post={post} />
      <PostPageFooter post={post} posts={state.posts} />
    </article>
  )
})
