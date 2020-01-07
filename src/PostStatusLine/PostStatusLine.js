import React, { memo } from 'react'
import TagList from '../TagList/TagList'
import PublishedDate from '../PublishedDate/PublishedDate'
import { line as lineClassName } from './PostStatusLine.module.css'
import { assert } from '../utils'

assert(lineClassName, 'lineClassName is expected to be defined')

const InlineTagList = ({ tags }) => (
  <>
    , tagged with <TagList tags={tags} />
  </>
)

const TagsPart = ({ tags }) => (
  tags.length ? <InlineTagList tags={tags} /> : null
)

export default memo(({ date, tags = []}) => (
  <div className={lineClassName}>
    Published <PublishedDate date={date} />
    <TagsPart tags={tags} />.
  </div>
))
