const config = {
  isProduction: (process.env.NODE_ENV === 'production'),
  contactEmail: Buffer.from('amFtZXMrYmxvZ0Bib3RhbmljdXMubWU=', 'base64').toString('ascii'),
  disqusShortname: 'botanicus-me-1',
  startYear: 2008,
  rate: 90
}

if (config.isProduction) {
  config.googleAnalyticsTrackingId = 'UA-138694948-1'
} else {
  // Without this we keep getting an annoying message in the console,
  // which is especially annoying when running the tests.
  //
  // The library doesn't have any disable option as of now.
  config.googleAnalyticsTrackingId = '<empty>'
}

export default config
