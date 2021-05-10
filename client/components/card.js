import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrItem, decrItem } from '../redux/reducers/market'

const Card = (props) => {
  const dispatch = useDispatch()
  const count = useSelector((s) => s.market.basket[props.product.id])
  const basket = useSelector((s) => s.market.basket)
  const base = useSelector((s) => s.market.base)
  const rate = useSelector((s) => s.market.rate)
  const symbols = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  return (
    <div className="card flex flex-col justify-between max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 mx-5 w-1/3">
      <div>
        <div className="card__title flex flex-col justify-between px-4 py-2">
          <h3 className="block text-gray-900 font-bold text-3xl uppercase">
            {props.product.title}
          </h3>
          <p className="block text-gray-600 text-sm mt-1">{props.product.description}</p>
        </div>
      </div>
      <div>
        <img
          className="card__image h-56 w-full object-cover mt-2"
          src={props.product.image}
          alt={props.product.title}
        />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h3 className="card__price text-gray-200 font-bold text-xl">{`${(
            props.product.price * rate[base]
          ).toFixed(2)}${symbols[base]}`}</h3>
          <div className="flex flex-row">
            <button
              type="button"
              className="text-white font-bold text-4xl focus:outline-none"
              onClick={() => {
                if (typeof basket[props.product.id] !== 'undefined') {
                  dispatch(decrItem(props.product.id))
                }
              }}
            >
              -
            </button>
            <span className="card__product-amount text-white font-bold text-3xl text-center w-10">
              {count || 0}
            </span>
            <button
              type="button"
              className="text-white font-bold text-4xl focus:outline-none"
              onClick={() => dispatch(incrItem(props.product.id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
