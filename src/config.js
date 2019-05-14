const config = {
  isProduction: (process.env.NODE_ENV === 'production'),
  contactEmail: Buffer.from('amFtZXMrYmxvZ0Bib3RhbmljdXMubWU=', 'base64').toString('ascii'),
  disqusShortname: 'botanicus-me-1',
  rate: 90
}

if (config.isProduction) {
  config.googleAnalyticsTrackingId = 'UA-138694948-1'
}

export default config
