import React from 'react'
import TestRenderer from 'react-test-renderer'
import NewsletterSignUpForm from './NewsletterSignUpForm'

it('renders a a form to submit an email to the newsletter', () => {
  const testRenderer = TestRenderer.create(<NewsletterSignUpForm />)
  const object = testRenderer.toJSON()

  expect(object.type).toEqual('form')

  const input = object.children[0]
  expect(input.type).toEqual('input')
  expect(input.props.name).toEqual('EMAIL')

  const button = object.children[1]
  expect(button.type).toEqual('button')
  expect(button.children).toEqual(['Subscribe!'])
})

