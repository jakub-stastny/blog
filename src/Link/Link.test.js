import React from 'react'
import TestRenderer from 'react-test-renderer'
import Link from './Link'

/* FIXME: I don't know how to test it, I'm getting:
 * Invariant Violation: You should not use <Route> or withRouter() outside a <Router>
 */

// it('renders a <div> tag with class highlight and children inside', () => {
//   const testRenderer = TestRenderer.create(<Link to="/lorem/ipsum">Lorem ipsum</Link>)
//   const object = testRenderer.toJSON()

//   return <NavLink to={to} activeClassName={styles.selected}>{children}</NavLink>
//   expect(object.type).toEqual('a')
//   expect(object.props.className).toEqual('selected')
//   expect(object.children).toEqual(['Lorem ipsum'])
//
//   TODO: Test if it's the current page and if not.
// })

it('fails if no children are provided', () => {
  expect(() => TestRenderer.create(<Link />)).toThrow('To is required')
  expect(() => TestRenderer.create(<Link to="/posts/test" />)).toThrow('Children are required')
})
