import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCards } from '../redux/reducers/market'
import Card from './card'
import Header from './header'

const Main = () => {
  const dispatch = useDispatch()
  const cards = useSelector((s) => s.market.cards)
  useEffect(() => {
    dispatch(getCards())
  }, [])
  return (
    <>
      <Header />
      <div className="flex flex-wrap flex-row justify-center bg-gray-300">
        {cards.map((it) => (
          <Card product={it} key={it.id} />
        ))}
      </div>
    </>
  )
}

Main.propTypes = {}

export default React.memo(Main)
