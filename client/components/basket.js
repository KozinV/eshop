import React from 'react'
import Header from './header'

const Basket = () => {
  return (
    <div>
      <Header />
      <div>basket</div>
    </div>
  )
}

Basket.propTypes = {}

export default React.memo(Basket)
