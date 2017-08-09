import {connect} from 'react-redux'
import Post from '../components/Post'
import {invalidateItems, fetchItemIfNeeded} from '../actions'

function mapStateToProps(state, ownProps) {
  const {title, itemsByTitle} = state
  const {
    isLoading,
    lastUpdate,
    items
  } = itemsByTitle[title] || {
    isLoading: false,
    items: []
  }
  return {
    title,
    isLoading,
    lastUpdate,
    items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    fetchData: (text) => {
      dispatch(invalidateItems(text))
      dispatch(fetchItemIfNeeded(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)