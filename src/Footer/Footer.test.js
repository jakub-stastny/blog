import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import TestRenderer from 'react-test-renderer'
import Footer from './Footer'

it('renders date as a relative date', () => {
  const testRenderer = TestRenderer.create(<Router><Footer /></Router>)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('footer')
  // TODO
})
