import slugify from '../utils/slugify'
import { assert } from '../utils'
import categoriesEN, { defaultCategory as defaultCategoryEN } from './categories.en'
import categoriesES, { defaultCategory as defaultCategoryES } from './categories.es'

export { categoriesEN, defaultCategoryEN, categoriesES, defaultCategoryES }

export function isCategory (lang, slug) {
}

export function findCategoryForTag (lang, tagName) {
  assert(lang, "lang is required")
  assert(tagName, "tagName is required")

  const categories = (lang === 'en') ? categoriesEN : categoriesES
  const categoryName = Object.entries(categories).find(([ category, list ]) => list.includes(tagName))
  return (categoryName && categoryName[0]) ? {name: categoryName[0], slug: slugify(categoryName[0])} : null
}
