import React, { Fragment } from 'react'
import TagList from '../TagList/TagList'
import styles from '../PostStatusLine/PostStatusLine.module.css'
import PublishedDate from '../PublishedDate/PublishedDate'

const InlineTagList = ({ tags }) => (
  <Fragment>
    , tagged with <TagList tags={tags} />
  </Fragment>
)

const TagsPart = ({ tags }) => (
  tags.length ? <InlineTagList tags={tags} /> : null
)

export default ({ date, tags }) => (
  <div className={styles.line}>
    Published <PublishedDate date={date} />
    <TagsPart tags={tags} />.
  </div>
)
