const config = {
  isProduction: (process.env.NODE_ENV === 'production'),
  contactEmail: 'james+blog@botanicus.me'
}

if (process.env.NODE_ENV !== 'production') {
  config.googleAnalyticsTrackingId = 'UA-138694948-1'
}

console.log(Buffer.from("james+blog@botanicus.me").toString('base64'));
console.log(Buffer.from("SGVsbG8gV29ybGQ=", 'base64').toString('ascii'))
export default config
