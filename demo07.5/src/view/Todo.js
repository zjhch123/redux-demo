import React from 'react'

export default (props) => (
  <li 
    style={{textDecoration: props.complete ? 'line-through' : 'none' }}
    onClick={props.onClick}>
    {props.title}
  </li>
)