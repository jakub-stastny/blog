import React, { lazy } from 'react'
import { assert } from './utils'

import { SuspenseSpinner } from './Spinner/Spinner'

import HomePage from './HomePage/HomePage'
import PostPage from './PostPage/PostPage'
import TagPage from './TagPage/TagPage'
import AboutPage from './AboutPage/AboutPage'
import SubscribePage from './SubscribePage/SubscribePage'

/* Lazy-loading */
const TagsPage = lazy(() => import(/* webpackChunkName: "TagsPage" */ './TagsPage/TagsPage'))
const NowPage = lazy(() => import(/* webpackChunkName: "NowPage" */ './NowPage/NowPage'))
const HolaPage = lazy(() => import(/* webpackChunkName: "HolaPage" */ './HolaPage/HolaPage'))

/* Routes */
export const homePagePath = '/'
export const postsPagePath = homePagePath
export const getPostPagePath = (slug) => `/posts/${assert(slug, 'Slug is required')}`
export const getTagPagePath = (slug) => `/tags/${assert(slug, 'Slug is required')}`
export const aboutPagePath = '/about'
export const subscribePagePath = '/subscribe'
export const tagsPagePath = '/tags'
export const nowPagePath = '/now'
export const holaPagePath = '/hola'

export default {
  [homePagePath]: () => <HomePage />,
  [getPostPagePath(':slug')]: ({ slug }) => <PostPage slug={slug} />,
  [getTagPagePath(':slug')]: ({ slug }) => <TagPage slug={slug} />,
  [aboutPagePath]: () => <AboutPage />,
  [subscribePagePath]: () => <SubscribePage />,
  [tagsPagePath]: () => <SuspenseSpinner><TagsPage /></SuspenseSpinner>,
  [nowPagePath]: () => <SuspenseSpinner><NowPage /></SuspenseSpinner>,
  [holaPagePath]: () => <SuspenseSpinner><HolaPage /></SuspenseSpinner>,
}
