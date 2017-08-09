import Counter from '../View/Counter'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch({type: 'increase'}),
    onDecreaseClick: () => dispatch({type: 'decrease'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)

