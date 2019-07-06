import React from 'react'
import TestRenderer from 'react-test-renderer'
import PostStatusLine from './PostStatusLine'

const now = new Date()

it('renders only the published date if no tags have been provided', () => {
  const component = <PostStatusLine date={now} tags={[]} />
  const testRenderer = TestRenderer.create(component)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('div')
  expect(object.props.className).toEqual('line')
  expect(object.children.length).toEqual(3)

  expect(object.children[0]).toEqual('Published ')

  const moment = object.children[1]
  expect(moment.children[0]).toEqual('a few seconds ago')

  expect(object.children[2]).toEqual('.')
})

it('renders the published date and tags if any have been provided', () => {
  const tags = [{slug: 'hello-world', name: 'Hello world!'}]
  const component = <PostStatusLine date={now} tags={tags} />
  const testRenderer = TestRenderer.create(component)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('div')
  expect(object.props.className).toEqual('line')
  expect(object.children.length).toEqual(5)

  expect(object.children[0]).toEqual('Published ')

  const moment = object.children[1]
  expect(moment.children[0]).toEqual('a few seconds ago')

  expect(object.children[2]).toEqual(', tagged with ')

  const tag = object.children[3].children[0]
  expect(tag.type).toEqual('a')
  expect(tag.props.href).toEqual('/tags/hello-world')
  expect(tag.children).toEqual(['Hello\u00a0world!'])

  expect(object.children[4]).toEqual('.')
})
