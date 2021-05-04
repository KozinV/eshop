import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const symbols = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  const amountOfItems = Object.values(useSelector((s) => s.market.basket)).reduce(
    (acc, rec) => acc + rec,
    0
  )
  return (
    <div className="flex mx-4 my-2">
      <div className="flex">
        <Link id="brand-name" to="/" className="mx-1 px-1 hover:bg-gray-200">
          E-shop
        </Link>
        <Link id="order-count" to="/basket" className="mx-1 px-1 hover:bg-gray-200">
          Count Items: {amountOfItems || ''}
        </Link>
      </div>
      <div className="mx-4">
        {Object.keys(symbols).map((it) => {
          return (
            <button
              type="button"
              key={it}
              className="mx-1 px-1 border-2 border-black rounded-md hover:bg-gray-200"
            >
              {it}
            </button>
          )
        })}
      </div>
      <div>
        <span>Sort:</span>
        <button
          type="button"
          id="sort-price"
          className="mx-1 px-1 border-2 border-black rounded-md hover:bg-gray-200"
        >
          by Price
        </button>
        <button
          type="button"
          id="sort-name"
          className="mx-1 px-1 border-2 border-black rounded-md hover:bg-gray-200"
        >
          by Name
        </button>
      </div>
      <div className="">Total amount: {}</div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
