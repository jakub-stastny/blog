import React from 'react'
import TestRenderer from 'react-test-renderer'
import PostPreview from './PostPreview'

it('renders a preview of given post', () => {
  const testRenderer = TestRenderer.create(<PostPreview path="/posts/hello-world" title="Hello world!" excerpt="Lorem ipsum ..." />)
  const list = testRenderer.toJSON()

  expect(list[0].type).toEqual('h2')
  // FIXME: This doesn't work.
  // expect(list[0].children).toEqual([<a href="/posts/hello-world">Hello world!</a>])
  expect(list[1].type).toEqual('p')
  expect(list[1].children).toEqual(['Lorem ipsum ...'])
})

it('fails if no children are provided', () => {
  expect(() => TestRenderer.create(<PostPreview />)).toThrow('Path is required')
  expect(() => TestRenderer.create(<PostPreview path="/posts/test" />)).toThrow('Title is required')
  expect(() => TestRenderer.create(<PostPreview path="/posts/test" title="Test" />)).toThrow('Excerpt is required')
})
