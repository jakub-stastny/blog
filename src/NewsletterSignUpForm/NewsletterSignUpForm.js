import React, { memo } from 'react'
import AdBlockDetect from 'react-ad-block-detect'
import Mailchimp from 'react-mailchimp-form'
import Highlight from '../Highlight/Highlight'
import { mailchimpURL } from '../config'

const fields = [
  {
    name: 'EMAIL',
    placeholder: 'your@email.com',
    type: 'email',
    required: true
  }
]

export default memo(() => (
  <>
    <AdBlockDetect>
      <Highlight style={{background: 'indianred', marginBottom: 15}}>
        <p>
          Your ad blocker is enabled. This in some cases <em>might prevent submission of this form</em> (
          <a href="https://github.com/gndx/react-mailchimp-form/issues/11">gndx/react-mailchimp-form#11</a>
          ).
        </p>

        <p>
          If this happens to you, please <a href={mailchimpURL}>subscribe directly here</a>.
        </p>
      </Highlight>
    </AdBlockDetect>

    <Mailchimp action={mailchimpURL} fields={fields} />
  </>
))
