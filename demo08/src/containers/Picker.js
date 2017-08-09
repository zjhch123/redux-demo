import Picker from '../components/Picker'
import {connect} from 'react-redux'
import {changeTitle} from '../actions'

function mapStateToProps(state, ownProps) {
  return {
    title: state.title
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChange: (title) => dispatch(changeTitle(title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Picker)
