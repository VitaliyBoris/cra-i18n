import React, { Component } from 'react'

import { injectIntl, defineMessages, FormattedMessage } from 'react-intl'

import logo from './logo.svg'
import './App.css'

const messages = defineMessages({
  title: {
    id: 'app.title',
    defaultMessage: 'Welcome to React'
  },
  content1: {
    id: 'app.content1',
    defaultMessage: 'To get started, edit'
  },
  content2: {
    id: 'app.content2',
    defaultMessage: 'and save to reload.'
  },
  content3: {
    id: 'app.content3',
    defaultMessage: 'Learn React'
  }
})

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'Eric',
      unreadCount: 1000
    }
  }

  render () {
    const { intl: { formatMessage } } = this.props
    const { name, unreadCount } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>{formatMessage(messages.title)}</h1>
          <p>
            {formatMessage(messages.content1)} <code>src/App.js</code> {formatMessage(messages.content2)}
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            {formatMessage(messages.content3)}
          </a>
          <p>
            <FormattedMessage
              id='welcome'
              defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural, one {message} other {messages}}`}
              values={{ name: <b>{name}</b>, unreadCount }}
            />
          </p>
        </header>
      </div>
    )
  }
}

export default injectIntl(App)
