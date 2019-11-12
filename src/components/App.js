import React from "react"
import "../styles/App.css"
import { Provider } from "react-redux"
import store from "../Redux-store/store"
import { useDataHook } from "../Redux-store/Vendors/T-shirts/Action-Reducers"
import DisplayProducts from "./DisplayProducts"
// import SizeButtons from "../components/size-button-filters"
// import Header from "../components/header"
function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
const App = () => {
  const { items } = useDataHook()
  console.log("items -------->", items)
  return (
    <>
      {/* <Header /> */}
      <div className="container">
        {/* <SizeButtons goods={items} /> */}
        <DisplayProducts goods={items} />
      </div>
    </>
  )
}
export default Wrap
