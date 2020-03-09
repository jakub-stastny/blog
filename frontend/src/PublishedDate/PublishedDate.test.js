import React from 'react'
import TestRenderer from 'react-test-renderer'
import PublishedDate from './PublishedDate'

it('renders date as a relative date', () => {
  const testRenderer = TestRenderer.create(<PublishedDate date={new Date()} />)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('time')
  expect(object.children).toEqual(['a few seconds ago'])
})
