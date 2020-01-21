import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { A } from 'hookrouter'
import AdBlockDetect from '../AdBlockDetect/AdBlockDetect'
import NewsletterSignUpForm, { NewsletterSignUpLink } from '../NewsletterSignUpForm/NewsletterSignUpForm'
import Gravatar from '../Gravatar/Gravatar'
import ConversationPrompt from '../ConversationPrompt/ConversationPrompt'
import Moment from 'react-moment'
import { assert } from '../utils'
import styles from './PostPageFooter.module.css'
import { getPostPagePath } from '../routes'

import 'moment/locale/es'

// TODO: Translate everything.
const translations = {
  previousUpdates: ["Previous updates", "Actualizaciones anteriores"],
}

function PreviousNowPosts ({ posts, currentPostSlug }) {
  const { t, lang, nowTag } = useContext(LangContext)

  function titleCase (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <>
      <h3>{t(translations.previousUpdates)}</h3>
      <ul className={styles.sentenceList}>
        {/* TODO: extract out as a helper fn to the state context. */}
        {posts.filter(post => post.tags.map(tag => tag.name).includes(nowTag) && post.slug !== currentPostSlug).map(post => (
          <li key={post.slug}>
            <A href={getPostPagePath(post.slug)}>
              <Moment date={post.date} filter={titleCase} format="MMMM YYYY" interval={0} locale={lang} />
            </A>
          </li>
        ))}
      </ul>
    </>
  )
}

export default memo(function PostPageFooter ({ post, posts }) {
  // const { t } = useContext(LangContext)

  return (
    <footer className={assert(styles.footer)}>
      {/* TODO: extract out as a helper fn to the state context. */}
      {post.tags.map(tag => tag.name).includes('now') && <PreviousNowPosts posts={posts} currentPostSlug={post.slug} />}

      <div className={assert(styles.about)}>
        <Gravatar className={assert(styles.gravatar)} />
        <ConversationPrompt tagNames={post.tags && post.tags.map(tag => tag.name)} />
      </div>

      <div className={assert(styles.newsletter)}>
        <AdBlockDetect>
          <p>
            Did you like the post? <NewsletterSignUpLink>Sign up</NewsletterSignUpLink> for my newsletter and I'll send you a <em>quarterly</em> email with the most popular posts.
          </p>
        </AdBlockDetect>

        <AdBlockDetect value={false}>
          <p>
            Did you like the post? Sign up for my newsletter and I'll send you a <em>quarterly</em> email with the most popular posts.
          </p>

          <NewsletterSignUpForm />
        </AdBlockDetect>
      </div>

      <p className={assert(styles.license)}>
        This post has been <A href="/posts/releasing-copyright">uncopyrighted</A>. You can do anything you want with it.
      </p>

      <p className={assert(styles.license)}>
        It is also OSS and if you see any typos or information that you believe incorrect, you can just{' '}
        <A href="/posts/how-to-submit-a-pull-request-to-my-posts">submit a pull request</A>.
      </p>
    </footer>
  )
})
