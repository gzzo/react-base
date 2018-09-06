import React from 'react'
import { Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { Helmet } from 'react-helmet';
import { ConnectedRouter } from 'connected-react-router'

import Home from 'pages/home'

import css from 'sanitize.css'

class App extends React.Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Helmet>
            <title>Hello</title>
          </Helmet>
          <Route path="/" component={Home} />
        </div>
      </ConnectedRouter>
    )
  }
}

export default hot(module)(App)
