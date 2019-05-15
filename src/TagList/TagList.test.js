import React from 'react'
import TestRenderer from 'react-test-renderer'
import TagList from './TagList'

it('renders a list of tags with links to the tag pages', () => {
  const tags = [
    {slug: 'reactjs', title: 'React.js', path: '/tags/reactjs'},
    {slug: 'ruby', title: 'Ruby', path: '/tags/ruby'},
    {slug: 'español', title: 'Español', path: '/tags/español'},
  ]

  const testRenderer = TestRenderer.create(<TagList tags={tags} />)
  const list = testRenderer.toJSON()

  expect(list[0]).toEqual(' ')
  expect(list[1].type).toEqual('a')
  expect(list[1].props.href).toEqual('/tags/reactjs')
  expect(list[1].children).toEqual(['React.js'])

  expect(list[2]).toEqual(' ')
  expect(list[3].type).toEqual('a')
  expect(list[3].props.href).toEqual('/tags/ruby')
  expect(list[3].children).toEqual(['Ruby'])

  expect(list[4]).toEqual(' ')
  expect(list[5].type).toEqual('a')
  expect(list[5].props.href).toEqual('/tags/español')
  expect(list[5].children).toEqual(['Español'])
})
