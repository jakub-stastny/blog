import React from 'react'
import TestRenderer from 'react-test-renderer'
import Link from './Link'

it('renders a link without the active class if we are not on the route', () => {
  const testRenderer = TestRenderer.create(<Link to="/lorem/ipsum">Lorem ipsum</Link>)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('a')
  expect(object.props.href).toEqual('/lorem/ipsum')
  expect(object.props.style).toEqual(undefined)
  expect(object.children).toEqual(['Lorem ipsum'])
})

// it('renders a link with the active class if we are on the route', () => {
//   const testRenderer = TestRenderer.create(<Link to="/lorem/ipsum">Lorem ipsum</Link>)
//   const object = testRenderer.toJSON()

//   expect(object.type).toEqual('a')
//   expect(object.props.href).toEqual('/lorem/ipsum')
//   expect(object.props.style).notToEqual(undefined)
//   expect(object.children).toEqual(['Lorem ipsum'])
// })
