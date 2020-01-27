import slugify from '../utils/slugify'
import categoriesEN from './categories.en'
import categoriesES from './categories.es'

export { categoriesEN, categoriesES }

export function findCategoryForTag (lang, tagName) {
  const categories = (lang === 'en') ? categoriesEN : categoriesES
  const categoryName = Object.entries(categories).find(([ category, list ]) => list.includes(tagName))[0][0]
  return categoryName ? {name: categoryName, slug: slugify(categoryName)} : null
}

  // const category = [Object.entries(categories).find(([ category, list ]) => list.includes(tag.name)) || [t(translations.categories.others), []]][0][0]
