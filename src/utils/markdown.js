import showdown from 'showdown'

export default function markdownToHTML (markdownText) {
  const converter = new showdown.Converter({emoji: true, strikethrough: true})
  return converter.makeHtml(markdownText)
}
