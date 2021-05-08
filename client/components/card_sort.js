import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrItem } from '../redux/reducers/market'

const Cardsort = (props) => {
  const basket = useSelector((s) => s.market.basket)
  const base = useSelector((s) => s.market.base)
  const rate = useSelector((s) => s.market.rate)
  const symbols = {
    USD: '$',
    EUR: '€',
    CAD: 'C$'
  }
  const dispatch = useDispatch()
  return (
    <div className="flex flex-nowrap w-full justify-between items-center mx-4 my-2">
      <div className="w-1/6 h-48 text-center">
        <img
          className="card__image text-center h-48 object-cover mt-2"
          src={props.product.image}
          alt={props.product.title}
        />
      </div>
      <div className="w-1/6 text-center">{props.product.title}</div>
      <div className="w-1/6 text-center">{props.product.price}</div>
      <div className="w-1/6 text-center">{basket[props.product.id]}</div>
      <div className="w-1/6 text-center">
        {(basket[props.product.id] * props.product.price * rate[base]).toFixed(2)}
        {symbols[base]}
      </div>
      <div>
        <button type="button" onClick={() => dispatch(decrItem(props.product.id))}>
          {' - '}
        </button>
      </div>
    </div>
  )
}

Cardsort.propTypes = {}

export default React.memo(Cardsort)
