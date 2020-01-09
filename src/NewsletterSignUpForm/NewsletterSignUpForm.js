import React, { memo } from 'react'
import AdBlockDetect from '../AdBlockDetect/AdBlockDetect'
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

export const SimpleSignUpForm = memo(() => (
  <>
    <AdBlockDetect>
      <p>
        Please <a href={mailchimpURL} target="_blank" rel="noopener noreferrer">subscribe directly here</a>.
      </p>
    </AdBlockDetect>

    <AdBlockDetect value={false}>
      <Mailchimp action={mailchimpURL} fields={fields} />
    </AdBlockDetect>
  </>
))

export default memo(() => (
  <>
    <AdBlockDetect>
      <Highlight title="Ad blocker" style={{background: 'mistyrose', marginBottom: 15}}>
        <p>
          Your ad blocker is enabled. This in some cases <em>might prevent submission of this form</em> (
          <a href="https://github.com/gndx/react-mailchimp-form/issues/11" target="_blank" rel="noopener noreferrer">gndx/react-mailchimp-form#11</a>
          ).
        </p>

        <p>
          If this happens to you, please <a href={mailchimpURL} target="_blank" rel="noopener noreferrer">subscribe directly here</a>.
        </p>
      </Highlight>
    </AdBlockDetect>

    <Mailchimp action={mailchimpURL} fields={fields} />
  </>
))
