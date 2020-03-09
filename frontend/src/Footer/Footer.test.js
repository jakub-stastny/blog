import React from 'react'
import TestRenderer from 'react-test-renderer'
import { LangContextProvider } from '../LangContext'
import Footer from './Footer'
import { aboutPagePath, subscribePagePath, postsPagePath } from '../routes'

it('renders footer with navigation links', () => {
  const testRenderer = TestRenderer.create(<LangContextProvider><Footer /></LangContextProvider>)
  const footer = testRenderer.toJSON()

  expect(footer.type).toEqual('footer')

  const nav = footer.children[0]
  expect(nav.type).toEqual('nav')

  const ul = nav.children[0]
  expect(ul.type).toEqual('ul')

  const links = ul.children.map(li => li.children[0].props.href)
  expect(links.sort()).toEqual([aboutPagePath, subscribePagePath, postsPagePath].sort())
})
