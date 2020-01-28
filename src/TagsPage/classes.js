import { assert } from '../utils'
import slugify from '../utils/slugify'

export class Category {
  constructor(enName, esName, tagEntries = []) {
    this.enName = assert(enName)
    this.esName = assert(esName)
    this.tagEntries = assert(tagEntries)
  }

  name(lang) {
    return (lang === 'en') ? this.enName : this.esName
  }
}

export class Tag {
  constructor(enName, esName = enName) {
    this.enName = assert(enName)
    this.esName = esName
  }

  name(lang) {
    return (lang === 'en') ? this.enName : this.esName
  }

  slug(lang) {
    return slugify(this.name(lang))
  }
}
