import React from 'react'

export default (prop) => (
  <div>
    <span>{prop.value}</span>
    <button onClick={prop.onIncreaseClick}>add</button>
  </div>
)