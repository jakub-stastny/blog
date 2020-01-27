import React, { useContext, useEffect } from 'react'
import { useTitle } from 'hookrouter'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import SettingsContext from '../SettingsContext'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { zenburn } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Join from '../Join/Join'
import ToggleHideContent from '../ToggleHideContent/ToggleHideContent'
import { enToEsTranslations } from '../TagsPage/translations'
import categoriesEN from '../TagsPage/categories.en'
import categoriesES from '../TagsPage/categories.es'

const SettingButton = ({ value, setter }) => (
  <>
  click to{' '}
    <span style={{color: 'blue'}} onClick={e => setter(!value)}>
      turn {value ? `off` : `on`}
    </span>
  </>
)

const Setting = ({ name }) => (
  <code><span style={{color: 'red'}}>{name}</span></code>
)

const Highlight = ({ object }) => (
  <SyntaxHighlighter language="json" style={zenburn} customStyle={{padding: 20}}>
    {JSON.stringify(object, null, 2)}
  </SyntaxHighlighter>
)

export default function DevPage () {
  const settings = useContext(SettingsContext)
  const state = useContext(StateContext)
  const { t } = useContext(LangContext)

  const localStorageObject = Object.entries(localStorage)
    .reduce((buffer, [ key, value ]) => Object.assign(buffer, {[key]: value}), {})

  const largeObjectKeys = ['posts', 'tags']
  const stateWithoutLargeObjects = Object.entries(state)
    .reduce((buffer, [ key, value ]) => largeObjectKeys.includes(key) ? buffer : Object.assign(buffer, {[key]: value}), {})

  const missingTagTranslations = state.tags.filter(tag => !enToEsTranslations[tag.slug]).map(tag => tag.name).sort()
  const nonexistentTags = Object.keys(enToEsTranslations).filter(key => !state.tags.map(tag => tag.slug).includes(key))
  const tagsWithoutCategory = state.tags.filter(tag => !Object.values(t([categoriesEN, categoriesES])).includes(tag.name)).map(tag => tag.name)

  useTitle("Dev info")

  useEffect(() => {
    state.helpers.fetchTags()
  })

  return (
    <>
      <h2>Settings</h2>
      <div style={{display: 'flex'}}>
        <div>
          <h3><code>SettingsContext</code></h3>
          <Highlight object={settings} />
        </div>

        <div style={{marginLeft: 10}}>
          <h3><code>localStorage</code></h3>
          <Highlight object={localStorageObject} />
        </div>
      </div>

      <h3>Setting keys through URL</h3>
      <ul style={{margin: 0, paddingTop: 0}}>
        <li><code>?<Setting name="from" />=mail</code></li>
      </ul>

      <h3>Setting keys through this page</h3>
      <ul style={{margin: 0, paddingTop: 0}}>
        <li>Key <Setting name="dev" /> (<SettingButton value={settings.dev} setter={settings.setDev} />).</li>
        <li>Key <Setting name="dbg" /> (<SettingButton value={settings.dbg} setter={settings.setDbg} />).</li>
      </ul>

      <h2>Tags</h2>
      <h3>Missing translations</h3>
      <Highlight object={missingTagTranslations} />

      <h3>Non-existent translations</h3>
      <Highlight object={nonexistentTags} />

      <h3>Tags without category</h3>
      <Highlight object={tagsWithoutCategory} />

      <h2>State</h2>
      <h3>State (without <Join items={largeObjectKeys}>{(item) => <code>{item}</code>}</Join>)</h3>
      <Highlight object={stateWithoutLargeObjects} />

      <h3>Tags</h3>
      <ToggleHideContent prompt="Show more">
        <Highlight object={state.tags} />
      </ToggleHideContent>

      <h3>Posts</h3>
      <ToggleHideContent prompt="Show more">
        <Highlight object={state.posts} />
      </ToggleHideContent>
    </>
  )
}
