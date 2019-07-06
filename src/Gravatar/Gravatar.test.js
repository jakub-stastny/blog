import React from 'react'
import TestRenderer from 'react-test-renderer'
import Gravatar from './Gravatar'

it('renders a gravatar with only the default class', () => {
  const testRenderer = TestRenderer.create(<Gravatar />)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('img')
  expect(object.props.className).toEqual('react-gravatar gravatar')
})


it('renders a gravatar with the default and custom class', () => {
  const testRenderer = TestRenderer.create(<Gravatar className="my-custom-class" />)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('img')
  expect(object.props.className).toEqual('react-gravatar gravatar my-custom-class')
})

