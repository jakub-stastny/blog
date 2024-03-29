import { PostPage, PostIndex } from '/blog/js/post.js'

const routes = {
  "/": PostIndex,
  "/posts/:slug": PostPage,

  "/tags": null,
  "/tags/:slug": null
}

// [true, {slug: "hello-world"}]
function matchChunks(routeChunk, locationChunk) {
  if (routeChunk.match(/^:(.+)$/) && locationChunk) {
    return {[RegExp.lastMatch]: locationChunk}
  } else {
    return routeChunk === locationChunk
  }
}

export default function router(locationChunks) {
  // const result = Object.entries(routes).find([ route, component ] => {
  //   let routeChunks = route.split('/').filter(chunk => chunk.length)
  //   if (routeChunks.length === locationChunks.length) {
  //     return routeChunks.every((routeChunk, index) => matchChunks(routeChunk, locationChunks[index]))
  //   }
  // })

  const result = [ "/", PostIndex ]
  const [ matchedRoute, matchedPageComponentClass ] = result

  let index = 0 // FIXME
  const params = matchedRoute.split('/').reduce((params, routeChunk) => {
    let result = matchChunks(routeChunk, locationChunks[index])
    if (typeof result === 'object') {
      return Object.assign({}, params, result)
    } else {
      return params
    }
  }, {})

  return new matchedPageComponentClass(params)
}