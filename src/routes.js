/* Keeping this file separate from the router ensures,
 * that even if we load PostPage, which loads ConversationPrompt,
 * that we can still import the aboutPagePath from ConversationPrompt
 * and it will get correctly evaluated (before it was undefined).
*/

import { assert } from './utils'

export const homePagePath = '/'
export const postsPagePath = homePagePath
export const getPostPagePath = (slug) => `/posts/${assert(slug, 'Slug is required')}`
export const getTagPagePath = (slug) => `/tags/${assert(slug, 'Slug is required')}`
export const aboutPagePath = '/about'
export const subscribePagePath = '/subscribe'
export const tagsPagePath = '/tags'
export const nowPagePath = '/now'
export const holaPagePath = '/hola'
