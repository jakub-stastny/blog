import React, { lazy } from 'react'
import { SuspenseSpinner } from './Spinner/Spinner'

import * as routes from './routes'

import HomePage from './HomePage/HomePage'
import PostPage from './PostPage/PostPage'
import TagPage from './TagPage/TagPage'
import AboutPage from './AboutPage/AboutPage'
import SubscribePage from './SubscribePage/SubscribePage'

/* Lazy-loading */
const TagsPage = lazy(() => import(/* webpackChunkName: "TagsPage" */ './TagsPage/TagsPage'))
const NowPage = lazy(() => import(/* webpackChunkName: "NowPage" */ './NowPage/NowPage'))
const HolaPage = lazy(() => import(/* webpackChunkName: "HolaPage" */ './HolaPage/HolaPage'))

export default {
  [routes.homePagePath]: () => <HomePage />,
  [routes.getPostPagePath(':slug')]: ({ slug }) => <PostPage slug={slug} />,
  [routes.getTagPagePath(':slug')]: ({ slug }) => <TagPage slug={slug} />,
  [routes.aboutPagePath]: () => <AboutPage />,
  [routes.subscribePagePath]: () => <SubscribePage />,
  [routes.tagsPagePath]: () => <SuspenseSpinner><TagsPage /></SuspenseSpinner>,
  [routes.nowPagePath]: () => <SuspenseSpinner><NowPage /></SuspenseSpinner>,
  [routes.holaPagePath]: () => <SuspenseSpinner><HolaPage /></SuspenseSpinner>,
}
