require('dotenv').config()

const htmlOptions = {
  title: process.env.APP_TITLE,
  description: process.env.APP_DESCRIPTION,
  bgcolor: process.env.APP_COLOR,
  nprogress_color: process.env.APP_NPROGRESS,
  site_url: process.env.APP_URL,
  keywords: process.env.APP_KEYWORDS,
  endpoint: process.env.APP_API,
  inject: true
}

module.exports = {
  htmlOptions
}