import React from 'react'
import { useSelector } from 'react-redux'
import Header from './header'
import Cardsort from './card_sort'

const Basket = () => {
  const basket = useSelector((s) => s.market.basket)
  const cards = useSelector((s) => s.market.cards)
  const sort = cards.filter((item) => Object.keys(basket).indexOf(item.id) >= 0)
  return (
    <div>
      <div className="fixed w-full bg-white">
        <Header />
      </div>
      <div className="flex flex-wrap flex-row justify-center bg-gray-300">
        {sort.map((it) => (
          <Cardsort product={it} key={it.id} />
        ))}
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
