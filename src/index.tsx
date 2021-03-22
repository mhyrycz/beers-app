/* eslint-disable no-use-before-define */
import React from "react"
import ReactDOM from "react-dom"
import { createGlobalStyle } from "styled-components"
import AppRouter from "./router"
import { store } from "./redux/store"
import { Provider } from "react-redux"

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    font-family: -apple-system, Oxygen, Ubuntu;
  }
`

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
