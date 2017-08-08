import React from 'react'

export default (props) => (
  <li 
    onClick={props.onClick}
    style={{textDecoration: props.complete ? 'line-through' : 'none'}}>
    {props.text}
  </li>
)