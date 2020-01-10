import showdown from 'showdown'

export function assert (condition, message) {
  if (!condition) {
    throw message || `Assertion failed, value was ${JSON.stringify(condition)}`
  }
  return condition
}

export function markdownToHTML (markdownText) {
  const converter = new showdown.Converter({emoji: true, strikethrough: true})
  return converter.makeHtml(markdownText)
}
