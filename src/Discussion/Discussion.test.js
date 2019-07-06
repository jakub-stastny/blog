import React from 'react'
import TestRenderer from 'react-test-renderer'
import Discussion from './Discussion'

/* This doesn't test match, but it's fine, as we're merely proxying to an external library. */
it('renders a <div> tag with id disqus_thread', () => {
  const testRenderer = TestRenderer.create(<Discussion>Lorem ipsum</Discussion>)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('div')
  expect(object.props.id).toEqual('disqus_thread')
})
