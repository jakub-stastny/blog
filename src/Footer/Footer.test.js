import React from 'react'
import TestRenderer from 'react-test-renderer'
import Footer from './Footer'

it('renders date as a relative date', () => {
  const testRenderer = TestRenderer.create(<Footer />)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('footer')
  // TODO
})
