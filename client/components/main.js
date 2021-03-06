import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCards, getRate } from '../redux/reducers/market'
import Card from './card'
import Header from './header'

const Main = () => {
  const dispatch = useDispatch()
  const cards = useSelector((s) => s.market.cards)
  useEffect(() => {
    dispatch(getCards())
    dispatch(getRate())
  }, [])
  return (
    <div>
      <div className="fixed w-full bg-white">
        <Header />
      </div>
      <div className="h-12" />
      <div className="flex flex-wrap flex-row justify-center bg-gray-300">
        {cards.map((it) => (
          <Card product={it} key={it.id} />
        ))}
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
