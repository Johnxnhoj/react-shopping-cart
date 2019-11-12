import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"

//Action names, variables-----------------------//
const DISPLAY_PRODUCTS = "DISPLAY_PRODUCTS"
//Reducer --------------------------------------//
const initailState = {
  products: []
}

export default function TshirtReducer(state = initailState, action) {
  switch (action.type) {
    case DISPLAY_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

//action creators--------------------------------//
function getProductData() {
  return dispatch => {
    Axios.get("/products").then(response => {
      dispatch({
        type: DISPLAY_PRODUCTS,
        payload: response.data
      })
    })
  }
}

export function useDataHook() {
  const dispatch = useDispatch()
  const items = useSelector(appState => appState.TshirtReducer.products)

  useEffect(() => {
    const fetch = () => dispatch(getProductData())
    fetch()
  }, [dispatch])

  return items
}
