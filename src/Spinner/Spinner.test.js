import React from 'react'
import TestRenderer from 'react-test-renderer'
import Spinner from './Spinner'

it('renders a spinner with a text saying it is loading', () => {
  const testRenderer = TestRenderer.create(<Spinner>Lorem ipsum</Spinner>)
  const list = testRenderer.toJSON()

  expect(list[0].type).toEqual('svg')
  expect(list[0].props['data-icon']).toEqual('spinner')
  expect(list[1]).toEqual(' ')
  expect(list[2]).toEqual('Loading ...')
})
