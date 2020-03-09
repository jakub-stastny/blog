import React from 'react'
import TestRenderer from 'react-test-renderer'
import { LangContextProvider } from '../LangContext'
import Spinner from './Spinner'

it('renders a spinner with a text saying it is loading', () => {
  const testRenderer = TestRenderer.create(<LangContextProvider><Spinner>Lorem ipsum</Spinner></LangContextProvider>)
  const div = testRenderer.toJSON()
  expect(div.type).toEqual('div')

  const list = div.children

  const [ svg, _, span ] = list
  expect(svg.type).toEqual('svg')
  expect(svg.props['data-icon']).toEqual('spinner')

  expect(span.type).toEqual('span')
  expect(span.children[0]).toEqual('Loading ...')
})
