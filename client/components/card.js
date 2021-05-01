import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/reducers/market'

const Card = (props) => {
  const dispatch = useDispatch()
  const count = useSelector((s) => s.market.basket[props.product.id])
  return (
    <div className="flex flex-col justify-between max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 mx-5 w-1/3">
      <div>
        <div className="flex flex-col justify-between px-4 py-2">
          <h1 className="block text-gray-900 font-bold text-3xl uppercase">
            {props.product.title}
          </h1>
          <p className="block text-gray-600 text-sm mt-1">{props.product.description}</p>
        </div>
      </div>
      <div>
        <img
          className="h-56 w-full object-cover mt-2"
          src={props.product.image}
          alt={props.product.title}
        />
        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-gray-200 font-bold text-xl">{props.product.price}</h1>
          <div className="flex flex-row">
            <button
              type="button"
              className="text-black-700 font-bold text-4xl bg-gray-200 h-10 w-10 rounded-full hover:bg-white"
              // onClick={() => setCount(Math.max(count - 1, 0))}
            >
              -
            </button>
            <div className="text-white font-bold text-3xl text-center w-10">{count}</div>
            <button
              type="button"
              className="text-black-700 font-bold text-4xl bg-gray-200 h-10 w-10 rounded-full hover:bg-white"
              onClick={() => dispatch(addItem(props.product.id))}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
