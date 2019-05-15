import React from 'react'
import config from './config'

const currentYear = new Date().getFullYear()

export default function YearsOfExperience () {
  return <abbr title={`From ${config.startYear} on`}>{currentYear - config.startYear}</abbr>
}
