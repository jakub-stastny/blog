import React, { Fragment } from 'react'

const Tag = ({title, path}) => <Fragment>
  <a href={path}>{title}</a>
</Fragment>

// export default class TagList extends Component {
//   render() {
//     return this.props.tags || []
//       .map((tag) => <Tag key={tag.slug} title={tag.title} path={tag.path} />)
//       .reduce((prev, curr) => [prev, ' ', curr])
//   }
// }
export default ({tags = []}) => {
  return tags
    .map((tag) => <Tag key={tag.slug} title={tag.title} path={tag.path} />)
    .reduce((prev, curr) => [prev, ' ', curr])
}
