import React from 'react'
import Abbr from '../Abbr/Abbr'
import { startYear } from '../config'

const currentYear = new Date().getFullYear()

export default function YearsOfExperience () {
  return <Abbr title={`From ${startYear} on`}>{currentYear - startYear}</Abbr>
}
