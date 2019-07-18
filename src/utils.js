import showdown from 'showdown'

export function assert (condition, message) {
  if (!condition) {
    throw message || "Assertion failed"
  }
  return condition
}

export function markdownToHTML (markdownText) {
  const converter = new showdown.Converter({emoji: true})
  return converter.makeHtml(markdownText)
}
