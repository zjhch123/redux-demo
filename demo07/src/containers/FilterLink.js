import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

function mapStateToProps(state, ownProps) {
  return {
    active: state.visibilityFilter === ownProps.filter
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: (e) => {
      e.preventDefault();
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)