import React from 'react'
import TestRenderer from 'react-test-renderer'
import PostPreview from './PostPreview'

it('renders a preview of given post', () => {
  const component = <PostPreview path="/posts/hello-world" slug="hello-world" title="Hello world!" excerpt="Lorem ipsum ..." />
  const testRenderer = TestRenderer.create(component)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('article')

  const heading = object.children[0]
  expect(heading.type).toEqual('h1')
  expect(heading.props.className).toEqual('title')
  expect(heading.children.length).toEqual(1)

  const anchor = heading.children[0]
  expect(anchor.type).toEqual('a')
  expect(anchor.children.join('')).toEqual("Hello world! 🇬🇧")

  const statusLine = object.children[1]
  expect(statusLine.type).toEqual('div')
  expect(statusLine.props.className).toEqual('line')

  const excerpt = object.children[2]
  expect(excerpt.type).toEqual('p')
})
