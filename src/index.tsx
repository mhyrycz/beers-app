/* eslint-disable no-use-before-define */
import React from "react"
import ReactDOM from "react-dom"
import AppRouter from "./router"
import { store } from "./redux/store"
import { Provider } from "react-redux"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
