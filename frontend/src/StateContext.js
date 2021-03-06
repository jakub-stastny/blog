import React, { createContext, useState, useEffect, useContext } from 'react'
import LangContext from './LangContext'

const StateContext = createContext()

/* Having one posts array and firing the requests at the same time doesn't work,
 * as useState returns an asynchronous function, which if we call it twice in one
 * render cycle, gets called only with the last value.
*/
export function StateContextProvider ({ children }) {
  const { setLang, nowTag } = useContext(LangContext)

  /* Posts */
  const [ postPreviews, setPostPreviews ] = useState([])
  const [ fullPosts, setFullPosts] = useState({})
  const [ postsFetched, setPostsFetched ] = useState(false)
  const [ lastStatusUpdate, setLastStatusUpdate ] = useState()

  const posts = postPreviews.map((preview) => fullPosts[preview.slug] || preview)

  /* Tags */
  const [ tagList, setTagList ] = useState([])
  const [ tagDetails, setTagDetails ] = useState({})
  const [ tagsFetched, setTagsFetched ] = useState(false)

  const tags = tagList.length ? tagList.map((tag) => tagDetails[tag.slug] || tag) : Object.values(tagDetails)

  /* Helpers */
  const helpers = {
    getTag: (slug) => tags.find((tag) => tag.slug === slug),
    getPost: (slug) => posts.find((post) => post.slug === slug),
    fetchPost, fetchTag, fetchTags, getLatestStatusUpdate,
    reset
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { fetchPosts() }, [])

  /* Index fetchers. */
  async function fetchPosts (locale = setLang) {
    const response = await fetch(`https://raw.githubusercontent.com/jakub-stastny/data.blog/master/output/posts.${locale}.json`)
    setPostPreviews(await response.json())
    setPostsFetched(true)
  }

  async function fetchTags () {
    const response = await fetch(`https://raw.githubusercontent.com/jakub-stastny/data.blog/master/output/tags.${setLang}.json`)
    setTagList(await response.json())
    setTagsFetched(true)
  }

  /* Show fetchers. */
  async function fetchPost (slug, locale = setLang) {
    const response = await fetch(`https://raw.githubusercontent.com/jakub-stastny/data.blog/master/output/posts/${locale}/${slug}/post.json`)
    const data = await response.json()
    setFullPosts(Object.assign({}, fullPosts, {[data.slug]: data}))
  }

  async function fetchTag (slug, locale = setLang) {
    const response = await fetch(`https://raw.githubusercontent.com/jakub-stastny/data.blog/master/output/tags/${locale}/${slug}.json`)
    const data = await response.json()
    setTagDetails(Object.assign({}, tagDetails, {[data.slug]: data}))
    return data
  }

  async function getLatestStatusUpdate () {
    const tag = await this.fetchTag(nowTag)
    setLastStatusUpdate(tag.posts[0])
  }

  function reset (setLang) {
    setPostPreviews([])
    setFullPosts({})
    setPostsFetched(false)
    setLastStatusUpdate()

    setTagList([])
    setTagDetails({})
    setTagsFetched(false)

    if(setLang) fetchPosts(setLang)
  }

  return (
    <StateContext.Provider value={{posts, postsFetched, tags, tagsFetched, lastStatusUpdate, helpers, currentPath: window.location.pathname}}>
      {children}
    </StateContext.Provider>
  )
}

export default StateContext
