import React from 'react'
import TestRenderer from 'react-test-renderer'
import YearsOfExperience from './YearsOfExperience'
import { startYear } from './config'

it('requires startYear to be present in the config', () => {
  expect(startYear).toEqual(2008)
})

it('renders <abbr> tag with title and children', () => {
  const testRenderer = TestRenderer.create(<YearsOfExperience />)
  const object = testRenderer.toJSON()
  const yearsInBusiness = new Date().getFullYear() - startYear

  expect(object.type).toEqual('abbr')
  expect(object.props.title).toEqual(`From ${startYear} on`)
  expect(object.children).toEqual([yearsInBusiness.toString()])
})
