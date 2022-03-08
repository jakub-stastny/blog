import { rewriteLinks } from "/js/propagate-qs.js"
import { inDev, parseQS, tag } from "/js/helpers.js"
import context from "/js/context.js"

function convertToJSCase(string) {
  return string.replace(/-([a-z])/g, (_, a) => a.toUpperCase())
}

function renderTemplate(string, context) {
  return string.replace(/[^$]\{([a-zA-Z-]+)\}/g, (_, keyword) => (convertToJSCase(keyword) in context) ? context[convertToJSCase(keyword)] : console.error(`Unknown context var: ${keyword}`))
}

// Module scripts are executed asynchronously.
function generateTagClone(varName, templateName, script) {
  const lines = [
  `console.log('Exec: ${templateName}')`,
    "import { _init } from '/js/component-helpers.js'",
    //"import { rewriteLinks } from '/js/propagate-qs.js'",
    `const customExports = _init(${varName}, '${templateName}', '${script.getAttribute('name')}')`,
    "Object.entries(customExports).map(([ fnName, fn ]) => window[fnName] = fn)", // I think this will rewrite the one on window, we need local scope, maybe using eval.
    script.text.
      replace(/customElement/g, varName).
      replace(/shadowRoot/g, `${varName}.shadowRoot`),
    //`rewriteLinks(${varName}.shadowRoot)`
    ]

    console.log(`Tag ${templateName}`) ////
  return tag('script', {type: 'module', text: lines.join("\n")})
}

function defineComponent(name, shouldRenderFn, templateRoot = '/blog/js/templates') {
  customElements.define(name,
    class extends HTMLElement {
      constructor() {
        super()

        if (shouldRenderFn && !shouldRenderFn()) console.log(`Not rendering %c${name}`, 'color:#87CEEB')
        if (shouldRenderFn && !shouldRenderFn()) return
        console.log(`Rendering %c${name}`, 'color:#87CEEB')

        this.fetchTemplate().then((res) => res.text().then((text) => {
          const template = tag('template', {innerHTML: renderTemplate(text, context)})
          this.attachShadow({mode: 'open'}).
            appendChild(template.content.cloneNode(true))

          this.shadowRoot.querySelectorAll('script').forEach(script => {
            const varName = `sr${Math.floor(Math.random() * 100000)}`
            window[varName] = this
            console.log(generateTagClone(varName, name, script)) ///
            this.shadowRoot.appendChild(generateTagClone(varName, name, script))
          })
        }))
      }

      callback() {
        if (callback) {
          const result = callback()
          console.log(`Rendering %c${name}%c: %c${result}%c.`, 'color:#87CEEB', 'color:#fff')
        }
      }

      fetchTemplate() {
        return fetch(`${templateRoot}/${name}.html`, {headers: {'Content-Type': 'text/plain'}})
      }

      attributeChangedCallback() {
        console.log("Change", this, arguments)
        this.callback(this)
      }
    }
  )
}

function renderInProduction() {
  return (!parseQS().debug && !inDev())
}

/* Components */
defineComponent('debug-info', renderInProduction, '/js/templates')
defineComponent('site-footer', () => true, '/js/templates')
defineComponent('site-header', () => true, '/js/templates')
defineComponent('site-router')