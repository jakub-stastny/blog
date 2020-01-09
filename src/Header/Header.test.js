import React from 'react'
import TestRenderer from 'react-test-renderer'
import Header from './Header'
import { aboutPagePath, subscribePagePath, postsPagePath } from '../routes'

it('renders the header', () => {
  const testRenderer = TestRenderer.create(<Header />)
  const header = testRenderer.toJSON()

  expect(header.type).toEqual('header')
  const [ h1, p ] = header.children

  expect(h1.type).toEqual('h1')
  const a = h1.children[0]
  expect(a.type).toEqual('a')
  expect(a.props.href).toEqual('/')
  expect(a.children[0]).toEqual('Jakub Šťastný')

  expect(p.type).toEqual('p')
  expect(p.children[0]).toMatch(/^On .+\./)
})
