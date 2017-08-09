import React from 'react'
import PropTypes from 'prop-types'

const Picker = ({title, options, onChange}) => (
  <div>
    <h1>{title}</h1>
    <select value={title} onChange={(e) => onChange(e.target.value)}>
      {
        options.map(option => 
          <option value={option} key={option}>
            {option}
          </option>)
      }
    </select>
  </div>
)

Picker.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker