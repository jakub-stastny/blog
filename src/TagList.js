import React, { Component, Fragment } from 'react'

const Tag = ({title, path}) => <Fragment>
  <a href={path}>{title}</a>
</Fragment>

export default class TagList extends Component {
  renderTags(tags) {
    return tags
      .map((tag) => <Tag key={tag.slug} title={tag.title} path={tag.path} />)
      .reduce((prev, curr) => [prev, ' ', curr])
  }
  render() {
    const { tags } = this.props
    if (!tags) return null

    return this.renderTags(tags)
  }
}
