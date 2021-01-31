import React, { Component } from 'react'
import Header from './common/header/index'
import store from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style.js'
import { IconfontStyle } from './statics/iconfont/iconfont.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <IconfontStyle />
        <GlobalStyle />
      </Provider>
    )
  }
}
export default App
