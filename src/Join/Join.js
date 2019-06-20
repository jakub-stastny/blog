import React from 'react'

const getDivider = (currentItemIndex, array) => {
  const itemsLeft = array.length - currentItemIndex - 1
  console.log([currentItemIndex, array.length, itemsLeft])
  if (itemsLeft === 0) return null
  if (itemsLeft === 1) return ' and '
  return ', '
}

export default ({ items, children }) => (
  items.map((item, index) => (
    <span key={index}>
      {children(item)}
      {getDivider(index, items)}
    </span>
  ))
)
