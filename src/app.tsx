import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { Helmet } from 'react-helmet'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import Home from 'pages/home'

import 'sanitize.css'

type AppProps = {
  history: History
}

function App({ history }: AppProps): React.ReactElement {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Helmet>
          <title>Hello</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ConnectedRouter>
  )
}

export default hot(App)
