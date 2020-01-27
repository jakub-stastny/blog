/* Keeping this file separate from the router ensures,
 * that even if we load PostPage, which loads ConversationPrompt,
 * that we can still import the aboutPagePath from ConversationPrompt
 * and it will get correctly evaluated (before it was undefined).
*/

import { assert } from './utils'
import categories from './TagsPage/categories'

export const en = {
  homePagePath: '/',
  postsPagePath: '/',
  getPostPagePath: (slug) => `/posts/${assert(slug, 'Slug is required')}`,
  getTagPagePath: (slug) => `/tags/${assert(slug, 'Slug is required')}`,
  getTagCategoryPagePath: (category) => `/tags/${assert(category, 'Category is required')}`,
  aboutPagePath: '/about',
  subscribePagePath: '/subscribe',
  tagsPagePath: '/tags',
  nowPagePath: '/now',
  holaPagePath: '/hi',
  devPagePath: '/dev'
}

export const es = {
  homePagePath: '/',
  postsPagePath: '/',
  getPostPagePath: (slug) => `/entradas/${assert(slug, 'Slug is required')}`,
  getTagPagePath: (slug) => `/etiquetas/${assert(slug, 'Slug is required')}`,
  getTagCategoryPagePath: (category) => `/etiquetas/${assert(category, 'Category is required')}`,
  aboutPagePath: '/sobre-mi',
  subscribePagePath: '/subscribirse',
  tagsPagePath: '/etiquetas',
  nowPagePath: '/ahora',
  holaPagePath: '/hola',
  devPagePath: '/dev'
}
