import {connect} from 'react-redux'
import Link from '../view/Link'
import {setFilter} from '../action'

function mapStateToProps(state, oldProps) {
  return {
    active: state.filter === oldProps.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setFilter: (filter) => dispatch(setFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)