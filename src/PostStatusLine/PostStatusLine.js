import React, { memo } from 'react'
import TagList from '../TagList/TagList'
import PublishedDate from '../PublishedDate/PublishedDate'
import { assert } from '../utils'
import styles from './PostStatusLine.module.css'

const InlineTagList = ({ tags }) => (
  <>
    , tagged with <TagList tags={tags} />
  </>
)

const TagsPart = ({ tags }) => (
  tags.length ? <InlineTagList tags={tags} /> : null
)

export default memo(({ date, tags = []}) => (
  <div className={assert(styles.line)}>
    Published <PublishedDate date={date} />
    <TagsPart tags={tags} />.
  </div>
))
