import React, { memo, useContext } from 'react'
import LangContext from '../LangContext'
import { A } from 'hookrouter'
import AdBlockDetect from '../AdBlockDetect/AdBlockDetect'
import NewsletterSignUpForm, { NewsletterSignUpLink } from '../NewsletterSignUpForm/NewsletterSignUpForm'
import Gravatar from '../Gravatar/Gravatar'
import PreviousNowPosts from '../PreviousNowPosts/PreviousNowPosts'
import ConversationPrompt from '../ConversationPrompt/ConversationPrompt'
import { assert } from '../utils'
import styles from './PostPageFooter.module.css'
import * as routes from '../routes'

/* FIXME: is duplicated in PreviousNowPosts */
const isTaggedWithNow = (nowTag, post) => (
  post.tags.map(tag => tag.name).includes(nowTag)
)

export default memo(function PostPageFooter ({ post, posts }) {
  const { t, lang, nowTag } = useContext(LangContext)

  const { getPostPagePath } = routes[lang]

  const translations = {
    prompt: {
      adBlock: [
        <>
          Did you like the post? Sign up for my newsletter and I'll send you a <em>quarterly</em> email with the most popular posts.
        </>,
        <>
          ¿Te gustó la entrada? Subscríbete a mi boletín y te mando correo con las entradas más populares <em>trimestralmente</em>.
        </>,
      ],
      noAdBlock: [
        <>
          Did you like the post? <NewsletterSignUpLink>Sign up</NewsletterSignUpLink> for my newsletter and I'll send you a <em>quarterly</em> email with the most popular posts.
        </>,
        <>
          ¿Te gustó la entrada? <NewsletterSignUpLink>Subscríbete</NewsletterSignUpLink> a mi boletín y te mando correo con las entradas más populares <em>trimestralmente</em>.
        </>,
      ]
    },
    license: [
      <>
        This post has been <A href={getPostPagePath('releasing-copyright')}>uncopyrighted</A>. You can do anything you want with it.
      </>,
      <>
        Esta entrada está <A href={getPostPagePath('liberando-el-copyright')}>libre de los derechos de autor</A>. Haz lo que quieres con el contenido.
      </>
    ],
    oss: [
      <>
        It is also OSS and if you see any typos or information that you believe incorrect, you can just{' '}
        <A href={getPostPagePath('how-to-submit-a-pull-request-to-my-posts')}>submit a pull request</A>.
      </>,
      <>
        También es código libre y si ves unos errores, puedes{' '}
        <A href={getPostPagePath('how-to-submit-a-pull-request-to-my-posts')}>mandar a PR</A>.
      </>
    ]
  }

  return (
    <footer className={assert(styles.footer)}>
      {isTaggedWithNow(nowTag, post) && <PreviousNowPosts posts={posts} currentPostSlug={post.slug} />}

      <div className={assert(styles.about)}>
        <Gravatar className={assert(styles.gravatar)} />
        <ConversationPrompt tagNames={post.tags && post.tags.map(tag => tag.name)} />
      </div>

      <div className={assert(styles.newsletter)}>
        <AdBlockDetect>
          <p>{t(translations.prompt.noAdBlock)}</p>
        </AdBlockDetect>

        <AdBlockDetect value={false}>
          <p>{t(translations.prompt.adBlock)}</p>

          <NewsletterSignUpForm />
        </AdBlockDetect>
      </div>

      <p className={assert(styles.license)}>
        {t(translations.license)}
      </p>

      <p className={assert(styles.license)}>
        {t(translations.oss)}
      </p>
    </footer>
  )
})
