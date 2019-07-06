import { assert } from './utils'

export const homePagePath = '/'
export const postsPagePath = homePagePath
export const aboutPagePath = '/about'
export const myServicesPagePath = '/my-services'
export const curriculumVitaePagePath = '/curriculum-vitae'
export const nowPagePath = '/now'
export const subscribePagePath = '/subscribe'
export const getPostPagePath = (slug) => `/posts/${assert(slug, 'Slug is required')}`
export const getTagPagePath = (slug) => `/tags/${assert(slug, 'Slug is required')}`
export const tagsPagePath = '/tags'
