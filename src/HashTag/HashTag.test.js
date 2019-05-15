import React from 'react'
import TestRenderer from 'react-test-renderer'
import HashTag from './HashTag'

it('renders a <span> tag with class hashtag and children inside', () => {
  const testRenderer = TestRenderer.create(<HashTag>React.js</HashTag>)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('span')
  expect(object.props.className).toEqual('hashtag')
  expect(object.children).toEqual(['React.js'])
})

it('fails if no children are provided', () => {
  expect(() => TestRenderer.create(<HashTag />)).toThrow('HashTag requires children')
})

