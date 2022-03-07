class Page {
  constructor(data) {
    this.title = data.title
    this.slug = data.slug
    this.updatedDate = data.updatedDate
    this.tags = data.tags
    this.image = data.image
    this.notes = data.notes
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
    `
  }
}

TYPES = {pages: PageList, video: Video}

class Post {
  constructor(data) {
    this.title = data.title
    this.slug = data.slug
    this.excerpt = data.excerpt
    this.publishedDate = new Date(data.publishedDate)
    this.updatedDate = data.updatedDate ? new Date(data.updatedDate) : this.content.updatedDate
    this.type = data.type
    this.content = new TYPES[this.type](data.content)
    this.tags = data.tags ? data.tags : this.content.tags
  }

  render() {
    return `
      <h1>${this.title}</h1>
      <p class="excerpt">${this.excerpt}</p>
      ${this.content.render()}
    `
  }
}

class PostPage {
  constructor() {
    this.promise = fetch("/blog/data/posts.json")
  }
  
  render() {
    this.promise.then((res) => res.json().then((data) => {
      console.log(data)
    })
    
    return "PostPage"
  }
}

class PostIndex {
  constructor(data) {
    this.posts = data.map(rawPost => new Post(rawPost))
  }

  render() {
    return posts.map(post => `<h2>${post.title}</h2>`).join("\n")
  }
}