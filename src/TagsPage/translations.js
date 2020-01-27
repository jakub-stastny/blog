export const enToEsTranslations = {
  now: 'ahora',
  finance: 'finanzas',
  'financial-planning': 'planificación-de-las-finanzas',
  'draft-js': 'draft-js',
  'ipad-pro': 'ipad-pro',
  ipados: 'ipados',
  'ruby-on-rails': 'ruby-on-rails',
  depression: 'depresion',
  'ego-death': 'muerte-del-ego',
  email: 'correo-electrónico',
  'low-tech-lifestyle': 'low-tech-lifestyle', // TODO
  capitalism: 'capitalismo',
  consumerism: 'consumismo',
  copyright: 'copyright',
  'social-critique': 'critica-social',
  'deep-diving': 'buceo-profundo',
  diving: 'buceo',
  flow: 'flow', // TODO
}

export const esToEnTranslations = Object.entries(enToEsTranslations).reduce((buffer, [ en, es ]) => Object.assign(buffer, {[es]: en}), {})

window.enToEsTranslations = enToEsTranslations
window.esToEnTranslations = esToEnTranslations
export default (toLang, slug) => (toLang === 'en' ? esToEnTranslations : enToEsTranslations)[slug]
