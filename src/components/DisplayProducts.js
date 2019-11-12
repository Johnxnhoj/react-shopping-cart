import React from "react"
import { useDataHook } from "..Redux-store/Vendors/T-shirts/Action-Reducers/"
export default function DisplayProducts(props) {
  return (
    <div className="shelf-container">
      <div className="shelf-container-header">
        <small className="products-found">
          <span>16 Product(s) found.</span>
        </small>
        <div className="sort">
          <p>Order by</p>
          <select>
            <option value="select">Select</option>
            <option value="lowestprice">Lowest to highest</option>
            <option value="highestprice">Highest to lowest</option>
          </select>
        </div>
      </div>
      <div className="shelf-item">
        {goods.map(product => (
          <div className="shelf-wrap">
            <div
              className={product.isFreeShipping === true ? "free" : "notFree"}
            >
              Free Shipping
            </div>
            <div className="shelf-item_thumb">
              <img src={`/assets/${product.sku}_1.jpg`} />
            </div>
            <p className="shelf-item_title">{product.title}</p>
            <div className="shelf-item_price">
              <div className="val">
                <small>{product.currencyFormat}</small>
                <b>{parseInt(product.price)}</b>
                <span>
                  {(product.price - parseInt(product.price)).toFixed(2)}
                </span>
              </div>
              <div className="installment">
                <span>or {product.installments} x </span>
                <b>
                  {product.currencyFormat}
                  {(product.price / product.installments).toFixed(2)}
                </b>
              </div>
            </div>
            <div className="shelf-item_btn">Add to cart</div>
          </div>
        ))}
      </div>
    </div>
  )
}
