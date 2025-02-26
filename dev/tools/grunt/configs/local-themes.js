"use strict"; module.exports = {
  blank: {
    area: 'frontend',
    name: 'Magento/blank',
    locale: 'en_US',
    files: [ 'css/styles-m', 'css/styles-l', 'css/email', 'css/email-inline' ],
    dsl: 'less'
  },
  luma: {
    area: 'frontend',
    name: 'Magento/luma',
    locale: 'en_US',
    files: [ 'css/styles-m', 'css/styles-l' ],
    dsl: 'less'
  },
  sqli: {
    area: 'frontend',
    name: 'Sqli/default',
    locale: 'en_US',
    files: [ 'css/styles-m', 'css/styles-l' ],
    dsl: 'less'
  },
  training: {
    area: 'frontend',
    name: 'Sqli/training',
    locale: 'en_US',
    files: [ 'css/styles-m', 'css/styles-l' ],
    dsl: 'less'
  },
  backend: {
    area: 'adminhtml',
    name: 'Magento/backend',
    locale: 'en_US',
    files: [ 'css/styles-old', 'css/styles' ],
    dsl: 'less'
  }
}