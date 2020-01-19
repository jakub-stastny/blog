import React, { useEffect, useContext, memo } from 'react'
import StateContext from '../StateContext'
// import LangContext from '../LangContext'
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

export default memo(function Post ({ slug }) {
  // const { t, lang } = useContext(LangContext)
  const state = useContext(StateContext)
  const post = state.helpers.getPost(slug)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { (post && post.body) || state.helpers.fetchPost(slug) }, [])

  useTitle(post ? post.title : "Loading the post ...")

  // const errorComponent = <FetchError error={error} />

  if (!post) return <Spinner title="the post" />

  return (
    <article>
      <h1 className={assert(styles.mainTitle)}>{post.title}</h1>
      <div className={assert(styles.statusLine)}>
        <PostStatusLine date={post.date} tags={post.tags} />
      </div>

      {/* We wrap it in div, as the excerpt is already wrapped in <p> due to the markdown conversion. */}
      <div className={assert(styles.excerpt)} dangerouslySetInnerHTML={{__html: markdownToHTML(post.excerpt)}} />

      <PostPageBody slug={slug} post={post} />
      <PostPageFooter post={post} />
    </article>
  )
})
