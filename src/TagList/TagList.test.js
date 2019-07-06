import React from 'react'
import TestRenderer from 'react-test-renderer'
import TagList from './TagList'

const expectTagMatch = (item, name, path) => {
  expect(item.type).toEqual('span')

  const anchor = item.children[0]

  expect(anchor.props.href).toEqual(path)
  expect(anchor.children.join()).toEqual(name)
}

it('renders a list of tags with links to the tag pages', () => {
  const tags = [
    {slug: 'reactjs', name: 'React.js', path: '/tags/reactjs'},
    {slug: 'ruby', name: 'Ruby', path: '/tags/ruby'},
    {slug: 'español', name: 'Español', path: '/tags/español'},
  ]

  const testRenderer = TestRenderer.create(<TagList tags={tags} />)
  const list = testRenderer.toJSON()

  expectTagMatch(list[0], 'React.js', '/tags/reactjs')
  expectTagMatch(list[1], 'Ruby', '/tags/ruby')
  expectTagMatch(list[2], 'Español', '/tags/español')
})

it('renders nothing if no tags are provided', () => {
  expect(TestRenderer.create(<TagList />).toJSON()).toBe(null)
})
