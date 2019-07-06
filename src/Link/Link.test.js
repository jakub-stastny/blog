import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import TestRenderer from 'react-test-renderer'
import Link from './Link'

it('renders a link without the active class if we are not on the route', () => {
  const testRenderer = TestRenderer.create(<Router><Link to="/lorem/ipsum">Lorem ipsum</Link></Router>)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('a')
  expect(object.props.className).toEqual(undefined)
  expect(object.children).toEqual(['Lorem ipsum'])
})

it('renders a link with the active class if we are on the route', () => {
  const testRenderer = TestRenderer.create(<Router><Link to="/lorem/ipsum">Lorem ipsum</Link></Router>)
  const object = testRenderer.toJSON()

  // TODO
  // expect(object.type).toEqual('a')
  // expect(object.props.className).toEqual(undefined)
  // expect(object.children).toEqual(['Lorem ipsum'])
})
