import React, { memo } from 'react'
import { vCard } from './ContactInfo'

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
export default memo(function Card({ block, children }) {
  const handleClick = () => {
    block && block(vCard)

    const blob = new Blob([new TextEncoder().encode(vCard.getFormattedString())], {type: 'text/vcard;charset=utf-8'})
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
