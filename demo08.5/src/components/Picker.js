import React from 'react'

export default ({title, options, onChange}) => (
  <div>
    <h1>{title}</h1>
    <select value = {title} onChange = {(e) => onChange(e.target.value)}>
      {
        options.map((option, i) => 
          <option key = {i} value = {option}>{option}</option>
        )
      }
    </select>
  </div>
)