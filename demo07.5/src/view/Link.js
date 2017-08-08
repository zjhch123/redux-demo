import React from 'react'

export default (props) => {
  if (props.active) {
    return (<span>{props.title}</span>)
  }
  return (
    <a href="#" 
       onClick={(e) => {
        e.preventDefault();
        props.setFilter(props.filter)
      }}>
      {props.title}
    </a>
  )
}