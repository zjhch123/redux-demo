import React from 'react'
import FilterLink from '../controller/FilterLink'
export default (props) => (
  <div>
    Show:
    <FilterLink title="All" filter="SHOW_ALL"/>
    {' '}
    <FilterLink title="Active" filter="SHOW_ACTIVE"/>
    {' '}
    <FilterLink title="Complete" filter="SHOW_COMPLETE"/>
  </div>
)