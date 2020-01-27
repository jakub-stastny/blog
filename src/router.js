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
const DevPage = lazy(() => import(/* webpackChunkName: "DevPage" */ './DevPage/DevPage'))

export default {
  [routes.en.homePagePath]: () => <HomePage />,
  [routes.en.getPostPagePath(':slug')]: ({ slug }) => <PostPage lang="en" slug={slug} />,
  [routes.en.getTagPagePath(':slug')]: ({ slug }) => <TagPage lang="en" slug={slug} />,
  [routes.en.aboutPagePath]: () => <AboutPage lang="en" />,
  [routes.en.subscribePagePath]: () => <SubscribePage lang="en" />,
  [routes.en.tagsPagePath]: () => <SuspenseSpinner><TagsPage lang="en" /></SuspenseSpinner>,
  [routes.en.nowPagePath]: () => <SuspenseSpinner><NowPage lang="en" /></SuspenseSpinner>,
  [routes.en.holaPagePath]: () => <SuspenseSpinner><HolaPage lang="en" /></SuspenseSpinner>,
  [routes.en.devPagePath]: () => <SuspenseSpinner><DevPage lang="en" /></SuspenseSpinner>,

  [routes.es.homePagePath]: () => <HomePage />,
  [routes.es.getPostPagePath(':slug')]: ({ slug }) => <PostPage lang="es" slug={slug} />,
  [routes.es.getTagPagePath(':slug')]: ({ slug }) => <TagPage lang="es" slug={slug} />,
  [routes.es.aboutPagePath]: () => <AboutPage lang="es" />,
  [routes.es.subscribePagePath]: () => <SubscribePage lang="es" />,
  [routes.es.tagsPagePath]: () => <SuspenseSpinner><TagsPage lang="es" /></SuspenseSpinner>,
  [routes.es.nowPagePath]: () => <SuspenseSpinner><NowPage lang="es" /></SuspenseSpinner>,
  [routes.es.holaPagePath]: () => <SuspenseSpinner><HolaPage lang="es" /></SuspenseSpinner>,
  [routes.en.devPagePath]: () => <SuspenseSpinner><DevPage lang="en" /></SuspenseSpinner>,
}
