import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrItem } from '../redux/reducers/market'

const Cardsort = (props) => {
  const basket = useSelector((s) => s.market.basket)
  const dispatch = useDispatch()
  return (
    <div className="flex flex-nowrap">
      <div>
        <img
          className="card__image h-56 object-cover mt-2"
          src={props.product.image}
          alt={props.product.title}
        />
      </div>
      <div>{props.product.title}</div>
      <div>{props.product.price}</div>
      <div>{basket[props.product.id]}</div>
      <div>{`${basket[props.product.id]} * ${props.product.price}`}</div>
      <div>
        <button type="button" onClick={() => dispatch(decrItem(props.product.id))}>
          Del 1 item
        </button>
      </div>
    </div>
  )
}

Cardsort.propTypes = {}

export default React.memo(Cardsort)
