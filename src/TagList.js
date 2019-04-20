import React, { Component } from 'react'

const Tag = ({title, path}) => <span>
  <a href={path}>{title}</a>
</span>

export default class TagList extends Component {
  renderTags(tags) {
    return tags
      .map((tag) => <Tag key={tag.slug} title={tag.title} path={tag.path} />)
      .reduce((prev, curr) => [prev, ' ', curr])
  }
  render() {
    const { tags } = this.props
    if (!tags) return null

    return <div>{this.renderTags(tags)}</div>
  }
}
