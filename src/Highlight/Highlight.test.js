import React from 'react'
import TestRenderer from 'react-test-renderer'
import Highlight from './Highlight'

it('renders a <div> tag with class highlight and children inside', () => {
  const testRenderer = TestRenderer.create(<Highlight>Lorem ipsum</Highlight>)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('div')
  expect(object.props.className).toEqual('highlight')
  expect(object.children).toEqual(['Lorem ipsum'])
})
