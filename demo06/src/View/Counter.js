import React from 'react'

export default ({ value, onIncreaseClick, onDecreaseClick }) => (
  <div>
    <div>
      <span>{ value }</span>
    </div>
    <button onClick={ onIncreaseClick }>+</button>
    <button onClick={ onDecreaseClick }>-</button>
  </div>
)