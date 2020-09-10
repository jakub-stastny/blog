import React, { useEffect, useContext, useRef, memo } from 'react'
import ReactDOM from 'react-dom'
import LangContext from '../LangContext'
import { navigate } from 'hookrouter'
// import HashTag from '../HashTag/HashTag'
import YouTube from '../YouTube/YouTube'
import Spinner from '../Spinner/Spinner'
import { Tooltip } from 'react-tippy'
import markdownToHTML from '../utils/markdown'
import { assert } from '../utils'
import ReactGA from 'react-ga'

import styles from './PostPageBody.module.css'
import 'react-tippy/dist/tippy.css'

const translations = {
  spinner: ["the post", "la entrada"],
  essay: ["essay", "ensayo"]
}

const TouchFriendlyAbbr = ({ text, tooltipText }) => (
  <Tooltip title={tooltipText} position="bottom" trigger="click">
    {text} <b style={{color: 'green'}}>(?)</b>
  </Tooltip>
)

export default memo(function PostBody ({ post }) {
  const { t, setLang } = useContext(LangContext)

  const bodyRef = useRef(null)

  useEffect(() => {
    const bodyElement = bodyRef.current
    if (!bodyElement) return

    Array.from(bodyElement.querySelectorAll('YouTube')).forEach((video) => {
      ReactDOM.render(<YouTube src={video.getAttribute('src')} />, video)
    })

    Array.from(bodyElement.querySelectorAll('abbr[title]')).forEach((abbr) => {
      ReactDOM.render(<TouchFriendlyAbbr text={abbr.innerText} tooltipText={abbr.title} />, abbr)
    })

    // Array.from(bodyElement.querySelectorAll('i.hashtag')).forEach((i) => {
    //   ReactDOM.render(<HashTag>{i.innerText}</HashTag>, i)
    // })

    Array.from(bodyElement.querySelectorAll('a[href^="/"]')).forEach((a) => {
      a.addEventListener('click', (event) => {
        console.log(`~ Navigating to ${a.href}`)
        navigate(a.href)
        event.preventDefault()
      })
    })

    Array.from(bodyElement.querySelectorAll('a[href^="http"]')).forEach((a) => {
      a.target = '_blank'
      a.addEventListener('click', (event) => {
        ReactGA.outboundLink({label: `${post.slug}: ${a.href}`})
        // event.preventDefault()
      })
    })

    Array.from(bodyElement.querySelectorAll(`img[src^="${post.slug}/"]`)).forEach((img) => {
      const path = img.getAttribute('src')
      img.src = `https://raw.githubusercontent.com/jakub-stastny/data.blog/master/output/posts/${setLang}/${path}`

      if (post.tags.some(tag => tag.name === t(translations.essay))) {
        img.className = assert(styles.essayPage)
      } else {
        const figure = document.createElement('figure')
        figure.innerText = img.alt
        // The nextSibling trick is a way to do insertAfter.
        img.parentNode.insertBefore(figure, img.nextSibling)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post])

  // const errorComponent = <FetchError error={error} />

  return (
    post && post.body ?
      <div className={assert(styles.post)} dangerouslySetInnerHTML={{ __html: markdownToHTML(post.body)}} ref={bodyRef} />
        :
      <Spinner title={t(translations.spinner)} />
  )
})
