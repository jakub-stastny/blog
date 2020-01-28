import { Category, Tag } from './classes'

export const defaultCategoryEntry = new Category("Others", "El resto")

export const categoryEntries = [
  new Category("IT", "TI", [
    new Tag("1Password"),
    new Tag("Draft.js"),
    new Tag("iPadOS"),
    new Tag("Ruby on Rails"),
    new Tag("my blog engine", "mi motor de blog"),
    new Tag("iPad Pro"),
    new Tag("Gmail"),
    new Tag("password management", "manejo de contraseñas"),
    new Tag("OSS", "código abierto"),
    new Tag("React.js"),
  ]),

  new Category("Life", "Vida", [
    new Tag("finance", "finanzas"),
    new Tag("low-tech lifestyle", "vida sin tecnología"),
    new Tag("life values", "valores de vida"),
    new Tag("minimalism", "minimalismo"),
    new Tag("flow", "flujo"),
    new Tag("mindfulness"),
    new Tag("new year's resolutions", "resoluciones de año nuevo"),
    new Tag("meaning", "propósito"),
    new Tag("now", "ahora"),
    new Tag("goals", "metas"),
    new Tag("retreat", "retiro"),
    new Tag("social network", "red social"),
  ]),

  new Category("Therapy", "Terapia", [
    new Tag("therapy", "terapia"),
    new Tag("systemic therapy", "terapia sistémica"),
    new Tag("Marisela"),
    new Tag("depression", "depresión"),
    new Tag("forgiveness", "perdón"),
  ]),

  new Category("Spirituality", "Espiritualidad", [
    new Tag("spirituality", "espiritualidad"),
    new Tag("ego"),
    new Tag("ego death", "muerte del ego"),
    new Tag("God", "Dios"),
    new Tag("healing", "sanación"),
    new Tag("meditation", "meditación"),
    new Tag("brain synchronization", "sincronización de cerebro"),
    new Tag("duality", "dualidad"),
  ]),

  new Category("Activities", "Actividades", [
    new Tag("diving", "buceo"),
    new Tag("deep diving", "buceo profundo"),
  ]),

  new Category("Health", "Salud", [
    new Tag("health", "salud"),
    new Tag("TCM", "MTC"),
  ]),

  new Category("Share", "Compartir", [
    new Tag("share", "compartir"),
    new Tag("YouTube"),
    new Tag("Eckhart Tolle"),
  ]),

  new Category("Society", "Sociedad", [
    new Tag("consumerism", "consumismo"),
    new Tag("capitalism", "capitalismo"),
    new Tag("advertising", "publicidad"),
    new Tag("social critique", "crítica social"),
  ]),

  new Category("Languages", "Idiomas", [
    new Tag("language learning", "aprendiendo idiomas"),
    new Tag("vocabulary inbox", "bandeja de entrada de vocabulario"),
  ]),

  new Category("Systems", "Sistemas", [
    new Tag("email", "correo electrónico"),
    new Tag("finance planning", "planificación de las finanzas"),
  ]),

  new Category("Tech", "Tecnología", [
    new Tag("Oura ring", "anillo Oura"),
  ]),

  new Category("Licensing", "Concesión", [
    new Tag("copyright"),
    new Tag("uncopyright"),
    new Tag("license", "licencia"),
  ]),
]

export const tagEntries = categoryEntries.map(categoryEntry => categoryEntry.tagEntries).flat()

export function findCategoryEntryForTagName (lang, tagName) {
  return categoryEntries.find(categoryEntry => (
    categoryEntry.tagEntries.map(tagEntry => tagEntry.name(lang)).includes(tagName)
  ))
}
