import React from 'react'
import { startYear } from './config'

const currentYear = new Date().getFullYear()

export default function YearsOfExperience () {
  return <abbr title={`From ${startYear} on`}>{currentYear - startYear}</abbr>
}
