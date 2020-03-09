import React, { memo } from 'react'
import gravatar from 'gravatar'
import { personalContactEmail, gravatarEmail } from '../config'

const buildLines = (additionalLines = []) => (
  [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Šťastný;Jakub;;;',
    'FN:Jakub Šťastný',      // FN;CHARSET=UTF-8:Jakub Šťastný
    `EMAIL;type=INTERNET;type=HOME;type=pref:${personalContactEmail}`,
    // PHOTO;TYPE=JPEG://http://www.gravatar.com/avatar/fe5c33f0ea51bb6b57e82eb42b115201
    `PHOTO;TYPE=JPEG://${gravatar.url(gravatarEmail)}`,
    `SOURCE;CHARSET=UTF-8:${window.location.href}`,
    ...additionalLines,
    'END:VCARD'
  ]
)

// const Card = ({ vCard }) => (
//   <>
//   <a title="vCard" download href={`data:text/vcard,${btoa(vCard.getFormattedString())}`}>
//     vCard
//   </a>
//     <pre>{vCard.getFormattedString()}</pre><br /><br />
//     <pre>{btoa(vCard.getFormattedString())}</pre>
//   </>
// )

// Inspired by https://github.com/kennethjiang/js-file-download/blob/master/file-download.js
export default memo(function Card({ block, additionalLines, children }) {
  const handleClick = () => {
    const lines = buildLines(additionalLines)
    console.log(lines)
    const blob = new Blob([new TextEncoder().encode(lines.join("\n"))], {type: 'text/vcard;charset=utf-8'})
    const url = window.URL.createObjectURL(blob)

    const tempLink = document.createElement('a')
    tempLink.style.display = 'none';
    tempLink.href = url
    tempLink.setAttribute('download', 'jakub-stastny.vcf')

    document.body.appendChild(tempLink)
    tempLink.click()
  }

  return <span style={{color: 'blue'}} onClick={handleClick}>{children}</span>
})
