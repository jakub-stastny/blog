import React from 'react'
import TestRenderer from 'react-test-renderer'
import Join from './Join'

it('renders nothing if there are no items', () => {
  const items = []
  const testRenderer = TestRenderer.create(<Join items={items}>{ (name) => name }</Join>)
  const object = testRenderer.toJSON()

  expect(object).toEqual(null)
})

it('renders just the name if only 1 item is provided', () => {
  const items = ['Ruby']
  const testRenderer = TestRenderer.create(<Join items={items}>{ (name) => name }</Join>)
  const objects = [testRenderer.toJSON()]

  const words = objects.reduce((buffer, object) => [...buffer, ...object.children], []).join('')
  expect(words).toEqual('Ruby')
})

it("renders the names separated by 'and' if 2 items are provided", () => {
  const items = ['Ruby', 'JavaScript']
  const testRenderer = TestRenderer.create(<Join items={items}>{ (name) => name }</Join>)
  const objects = testRenderer.toJSON()

  const words = objects.reduce((buffer, object) => [...buffer, ...object.children], []).join('')
  expect(words).toEqual('Ruby\u00a0and\u00a0JavaScript')
})

it("renders the names separated by ', ', 'and' if more than 2 items are provided", () => {
  const items = ['Ruby', 'JavaScript', 'Ruby on Rails', 'React.js']
  const testRenderer = TestRenderer.create(<Join items={items}>{ (name) => name }</Join>)
  const objects = testRenderer.toJSON()

  const words = objects.reduce((buffer, object) => [...buffer, ...object.children], []).join('')
  expect(words).toEqual('Ruby, JavaScript, Ruby on Rails\u00a0and\u00a0React.js')
})
