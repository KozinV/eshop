import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './card'

const Main = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('/api/v1/getItems').then((it) => {
      setItems(it.data)
    })
  }, [])
  return (
    <div className="flex flex-wrap flex-row justify-center bg-gray-300">
      {items.map((it) => (
        <Card product={it} key={it.id} />
      ))}
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
