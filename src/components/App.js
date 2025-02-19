import React from "react"
import "normalize.css/normalize.css"
import "../styles/App.css"
import { Provider } from "react-redux"
import store from "../redux/store"
import Products from "./Products"
import Cart from "./Cart"

export default props => {
  return (
    <Provider store={store}>
      <div className="container">
        <Products />
        <Cart />
      </div>
    </Provider>
  )
}
