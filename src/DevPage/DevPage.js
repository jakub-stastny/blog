import React, { useContext, useEffect, Suspense, lazy } from 'react'
import { useTitle } from 'hookrouter'
import StateContext from '../StateContext'
import LangContext from '../LangContext'
import SettingsContext from '../SettingsContext'
import Join from '../Join/Join'
import ToggleHideContent from '../ToggleHideContent/ToggleHideContent'
import { tagEntries } from '../TagsPage/entries'

// TODO: I'm really confused about it, I cannot see this in yarn build output; I'm not sure if it helped at all.
const SyntaxHighlighter = lazy(() => import(/* webpackChunkName: "SyntaxHighlighter" */ 'react-syntax-highlighter'))
const hlStyles = lazy(() => import(/* webpackChunkName: "highlight-style" */ 'react-syntax-highlighter/dist/esm/styles/hljs'))
const If = ({ condition, children }) => condition ? children : null

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

const CodeSection = ({ object }) => (
  <pre><code>{JSON.stringify(object, null, 2)}</code></pre>
)

const Highlight = ({ object }) => (
  <Suspense fallback={<CodeSection object={object} />}>
    <SyntaxHighlighter language="json" style={hlStyles.zenburn} customStyle={{padding: 20}}>
      {JSON.stringify(object, null, 2)}
    </SyntaxHighlighter>
  </Suspense>
)

export default function DevPage () {
  const settings = useContext(SettingsContext)
  const state = useContext(StateContext)
  const { lang } = useContext(LangContext)

  const localStorageObject = Object.entries(localStorage)
    .reduce((buffer, [ key, value ]) => Object.assign(buffer, {[key]: value}), {})

  const largeObjectKeys = ['posts', 'tags']
  const stateWithoutLargeObjects = Object.entries(state)
    .reduce((buffer, [ key, value ]) => largeObjectKeys.includes(key) ? buffer : Object.assign(buffer, {[key]: value}), {})

  const missingTagEntries = state.tags.filter(tag => !tagEntries.find(tagEntry => tagEntry.name(lang) === tag.name))

  useTitle("Dev info")

  useEffect(() => {
    state.helpers.fetchTags()
  }, [])

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
      <If condition={!missingTagEntries[0]}>
        <p style={{fontStyle: 'italic'}}>
          There are currently no missing tags for language <code>{lang}</code>. Switch locale to make sure it's true also for the other language.
        </p>
      </If>

      <If condition={missingTagEntries[0]}>
        <h3>Missing tag entries</h3>
        <Highlight object={missingTagEntries} />
      </If>

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
