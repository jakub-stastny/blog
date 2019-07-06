import React from 'react'
import TestRenderer from 'react-test-renderer'
import Ribbon from './Ribbon'

it('renders a <div> tag with class highlight and children inside', () => {
  const testRenderer = TestRenderer.create(<Ribbon>Lorem ipsum</Ribbon>)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('div')
  expect(object.props.className).toEqual('cr top right red')
  expect(object.children).toEqual(['Lorem ipsum'])
})
