import React from "react"
import { useProducts, useCart } from "../hooks"
import "../styles/products.css"

export default props => {
  const products = useProducts()
  const { open, add } = useCart()

  function handleAdd(e, product) {
    e.preventDefault()
    add(product)
    open()
  }

  return (
    <div className="products">
      {products.map(product => {
        const {
          isFreeShipping: free,
          sku,
          title,
          price,
          installments
        } = product

        const dollar = price.toString().split(".")[0]
        const cents = price
          .toFixed(2)
          .toString()
          .split(".")[1]

        return (
          <div key={"product" + product.id} className="product">
            {free ? <div className="shipping">Free Shipping</div> : ""}
            <img src={`/assets/${sku}_1.jpg `} alt={title} />
            <p className="title">{title}</p>
            <hr />
            <div className="price">
              <p>
                $ <span className="dollar">{dollar}</span>.{cents}
              </p>
              {installments ? (
                <p className="installments">
                  {" "}
                  or {installments} x{(price / installments).toFixed(2)}
                </p>
              ) : (
                <p className="installments">&nbsp;</p>
              )}
            </div>
            <button onClick={e => handleAdd(e, product)}>Add To Cart</button>
          </div>
        )
      })}
    </div>
  )
}
