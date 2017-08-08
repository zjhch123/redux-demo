import React from 'react'

export default (props) => (
  <div>
    <button onClick={props.onClick}>{props.title}</button>
  </div>
)
