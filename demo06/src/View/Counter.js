import React from 'react'

export default (prop) => (
  <div>
    <div>
      <span>{prop.value}</span>
    </div>
    <button onClick={prop.onIncreaseClick}>+</button>
    <button onClick={prop.onDecreaseClick}>-</button>
  </div>
)