import React from 'react'
import FilterLink from '../containers/FilterLink'

export default () => (
  <div>
    Show:
    {' '}
    <FilterLink title='All' filter='SHOW_ALL'/>
    {' '}
    <FilterLink title='Completed' filter='SHOW_COMPLETED'/>
    {' '}
    <FilterLink title='Active' filter='SHOW_ACTIVE'/>
  </div>
)