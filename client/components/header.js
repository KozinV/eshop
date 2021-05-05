import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSort, setBase, sortByName, sortByPrice } from '../redux/reducers/market'

const Header = () => {
  const dispatch = useDispatch()
  const sort = useSelector((s) => s.market.sort)
  const base = useSelector((s) => s.market.base)
  const amountOfItems = Object.values(useSelector((s) => s.market.basket)).reduce(
    (acc, rec) => acc + rec,
    0
  )
  const symbols = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  return (
    <div className="flex justify-between mx-4 my-2">
      <div className="flex w-1/5">
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
              className={`mx-1 px-1 border-2 border-black rounded-md hover:bg-gray-200 ${
                base === it ? 'bg-gray-300' : ''
              }`}
              onClick={() => dispatch(setBase(it))}
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
          className={`mx-1 px-1 border-2 border-black rounded-md hover:bg-gray-200 ${
            sort === 'price' ? 'bg-gray-300' : ''
          }`}
          onClick={() => {
            dispatch(setSort('price'))
            dispatch(sortByPrice())
          }}
        >
          by Price
        </button>
        <button
          type="button"
          id="sort-name"
          className={`{mx-1 px-1 border-2 border-black rounded-md hover:bg-gray-200} ${
            sort === 'name' ? 'bg-gray-300' : ''
          }`}
          onClick={() => {
            dispatch(sortByName())
            dispatch(setSort('name'))
          }}
        >
          by Name
        </button>
      </div>
      <div className="w-1/6">Total amount: {}</div>
    </div>
  )
}

Header.propTypes = {}

export default React.memo(Header)
