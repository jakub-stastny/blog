export const isProduction = (process.env.NODE_ENV === 'production')
export const contactEmail = Buffer.from('amFrdWIuc3Rhc3RueS5wdCtibG9nQGdtYWlsLmNvbQ==', 'base64').toString('ascii')
export const gravatarEmail = Buffer.from('amFtZXNAYm90YW5pY3VzLm1l', 'base64').toString('ascii')
// export const disqusShortname = 'botanicus-me-1'
export const mailchimpURL = 'https://botanicus.us3.list-manage.com/subscribe/post?u=3ab289fe1aba79ac1725973d1&amp;id=524bfa9e85'
export const logglyToken = '8d913c26-cceb-41c3-a82e-e4542ec98ab0'
export const startYear = 2008
export const rate = 90

// Without this we keep getting an annoying message in the console,
// which is especially annoying when running the tests.
//
// The library doesn't have any disable option as of now.
export const googleAnalyticsTrackingId = isProduction ? 'UA-138694948-1' : '<empty>'
