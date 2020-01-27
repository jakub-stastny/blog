// FIXME: transliteration doesn't seem to export anything,
// even though it works on the backend.
//
// import { transliterate, slugify } from 'transliteration'
// import * as transliterate from 'transliteration'

// export default slugify

export default function slugify (name) {
  return name.toLocaleLowerCase().replace(' ', '-')
}
