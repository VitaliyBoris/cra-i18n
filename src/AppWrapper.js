import React, { Component } from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import arLocaleData from 'react-intl/locale-data/ar'
import esLocaleData from 'react-intl/locale-data/es'
import App from './App'

addLocaleData(arLocaleData)
addLocaleData(esLocaleData)

class AppWrapper extends Component {
  render () {
    return (
      <IntlProvider locale='en'>
        <App />
      </IntlProvider>
    )
  }
}

export default AppWrapper
