import React from 'react'
import TestRenderer from 'react-test-renderer'
import Abbr from './Abbr'

it('renders an <abbr> tag with class XXX, provided title and children inside', () => {
  const testRenderer = TestRenderer.create(<Abbr title="Open-source software">OSS</Abbr>)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('abbr')
  // expect(object.props.className).toEqual('hashtag')
  expect(object.props.title).toEqual('Open-source software')
  expect(object.children).toEqual(['OSS'])
})
