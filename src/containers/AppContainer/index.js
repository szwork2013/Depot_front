import React, { PropTypes } from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import styles from './AppContainer.scss'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

export default class AppContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    routerKey: PropTypes.number,
    store: PropTypes.object.isRequired
  }

  render() {
    const {history, routes, routerKey, store} = this.props
    return (
      <MuiThemeProvider className={styles.main}>
        <Provider store={store}>
          <div style={{ height: '100%' }}>
            <Router
              history={history}
              routes={routes}
              key={routerKey}
            />
          </div>
        </Provider>
      </MuiThemeProvider>
    )
  }
}

