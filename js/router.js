import { Post, Posts } from './post.js'

routes = {
  "/": Posts,
  "/posts/:slug": Post,

  "/tags": null,
  "/tags/:slug"
}

function matchChunks(routeChunk, locationChunk) {
  return (routeChunk.match(/^:.+$/) && locationChunk) || routeChunk === locationChunk
}

export default function router(locationChunks) {
  return Object.entries(routes).find([ route, component ] => {
    routeChunks = route.split('/').filter(chunk => chunk.length)
    if (routeChunks.length === locationChunks.length) {
      routeChunks.every((routeChunk, index) => matchChunks(routeChunk, locationChunks[index]))
    }
  })
}