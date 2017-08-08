import React from 'react'

export default (props) => {
  if (props.active) {
    return (
      <span>{props.title}</span>
    )
  }
  
  return (
    <a href="#" onClick={props.onClick}>{props.title}</a>
  )
}