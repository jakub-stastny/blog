export const isProduction = (process.env.NODE_ENV === 'production')
export const contactEmail = Buffer.from('amFtZXMrYmxvZ0Bib3RhbmljdXMubWU=', 'base64').toString('ascii')
export const gravatarEmail = Buffer.from('mFtZXNAYm90YW5pY3VzLm1l', 'base64').toString('ascii')
export const disqusShortname = 'botanicus-me-1'
export const startYear = 2008
export const rate = 90

// Without this we keep getting an annoying message in the console,
// which is especially annoying when running the tests.
//
// The library doesn't have any disable option as of now.
export const googleAnalyticsTrackingId = isProduction ? 'UA-138694948-1' : '<empty>'
