import React, { createContext, useState, useEffect } from 'react'

const StateContext = createContext()

/* Having one posts array and firing the requests at the same time doesn't work,
 * as useState returns an asynchronous function, which if we call it twice in one
 * render cycle, gets called only with the last value.
*/
export function StateContextProvider ({ children }) {
  /* Posts */
  const [ postPreviews, setPostPreviews ] = useState([])
  const [ fullPosts, setFullPosts] = useState({})
  const [ postsFetched, setPostsFetched ] = useState(false)

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
    fetchPost, fetchTag, fetchTags,
  }


  useEffect(() => { fetchPosts() }, [])

  /* Index fetchers. */
  async function fetchPosts () {
    const response = await fetch('https://raw.githubusercontent.com/botanicus/data.blog/master/output/posts.json')
    setPostPreviews(await response.json())
    setPostsFetched(true)
  }

  async function fetchTags () {
    const response = await fetch('https://raw.githubusercontent.com/botanicus/data.blog/master/output/tags.json')
    setTagList(await response.json())
    setTagsFetched(true)
  }

  /* Show fetchers. */
  async function fetchPost (slug) {
    const response = await fetch(`https://raw.githubusercontent.com/botanicus/data.blog/master/output/${slug}/post.json`)
    const data = await response.json()
    setFullPosts(Object.assign({}, fullPosts, {[data.slug]: data}))
  }

  async function fetchTag (slug) {
    const response = await fetch(`https://raw.githubusercontent.com/botanicus/data.blog/master/output/tags/${slug}.json`)
    const data = await response.json()
    setTagDetails(Object.assign({}, tagDetails, {[data.slug]: data}))
  }

  return (
    <StateContext.Provider value={{posts, postsFetched, tags, tagsFetched, helpers}}>
      {children}
    </StateContext.Provider>
  )
}

export default StateContext
