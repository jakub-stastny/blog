class Page {
  constructor({ title, slug, updatedDate, image, tags = [], notes = [] }) {
    this.title = title
    this.slug = slug
    this.updatedDate = updatedDate && new Date(updatedDate * 1000)
    this.tags = tags
    this.image = image
    this.notes = notes
  }

  render() {
    return `
      <img src="${this.image}" alt="${this.title}" />
      ${this.notes.map((note, index) => `[${index + 1}] ${note}`).join("\n")}
    `
  }
}

class PageList {
  constructor(data) {
    this.pages = data.map(rawPage => new Page(rawPage))
  }

  get tags() {
    return this.pages.map(page => page.tags).unique()
  }

  render() {
    return page.map(page => page.render()).join("\n\n")
  }
}

class Video {
  constructor({ source, link }) {
    this.source = source
    this.link = link
  }

  // TODO: Embed video based on its type (most of which will be "youtube")
  render() {
    return `
      Video
    `
  }
}

const TYPES = {pages: PageList, video: Video}

export class Post {
  constructor({ title, slug, excerpt, type, content, publishedDate, updatedDate, tags = [] }) {
    if (!TYPES[type]) {
      console.error(`Unknown type of ${slug}: ${type}`)
    }

    this.title = title
    this.slug = slug
    this.excerpt = excerpt
    this.type = type
    this.publishedDate = new Date(publishedDate * 1000)

    this.content = new TYPES[type](content)
    // this.updatedDate = updatedDate ? new Date(updatedDate * 1000) : this.content.updatedDate
    // this.tags = this.content.tags ? this.content.tags : tags
  }

  render() {
    return `
      <h1>${this.title}</h1>
      <p class="excerpt">${this.excerpt}</p>
      ${this.content.render()}
    `
  }
}

export function PostPage(posts, params) {
  return "PostPage"
}

export function PostIndex(posts, params) {
  return posts.map(post => `<h2>${post.title}</h2>`).join("\n")
}