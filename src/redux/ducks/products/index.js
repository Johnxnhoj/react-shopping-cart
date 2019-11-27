import axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

//action definitions
const GET_PRODUCTS = "products/GET_PRODUCTS"
// const FILTER_PRODUCTS = "products/FILTER_PRODUCTS"

//initialState
const initialState = {
  products: []
  // display: []
}

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}

// action creators
const getProducts = () => {
  return dispatch => {
    axios.get("/api/products").then(resp => {
      dispatch({
        type: GET_PRODUCTS,
        payload: resp.data
      })
    })
  }
}

// getSizes = products => {
//   const arr = []

//   products.forEach(p => arr.concat(p.availableSizes))

//   const unique = new Set(...arr)
//   return {
//     type: GET_SIZES,
//     payload: Array.from(un)
//   }
// }

// const filterProducts = filter => {
//   return {
//     type: FILTER_PRODUCTS,
//     filter: filter
//   }
// }

//custom hooks
export function useProducts() {
  const products = useSelector(appState => appState.productsState.products)
  const dispatch = useDispatch()
  // const filter = dispatch(filterProducts(filter))

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return products
}
