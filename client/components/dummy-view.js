import React from 'react'

const Dummy = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">Dummy</div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
