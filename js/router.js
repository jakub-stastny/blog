import { Post, Posts } from './post.js'

routes = {
  "/": Posts,
  "/posts/:slug": Post,

  "/tags": null,
  "/tags/:slug"
}

// TODO: match :slugs.
export default function router(route) {
  return routes[route] || routes[`${route}/`]
}