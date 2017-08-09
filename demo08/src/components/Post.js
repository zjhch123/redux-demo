import React from 'react'
import PropTypes from 'prop-types'
import { fetchItemIfNeeded, invalidateItems } from '../actions'

class Post extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.props.title) {
      this.props.dispatch(fetchItemIfNeeded(nextProps.title))
    }
  }

  componentDidMount() {
    this.props.dispatch(invalidateItems(this.props.title))
    this.props.dispatch(fetchItemIfNeeded(this.props.title))
  }

  render() {
    const {
      lastUpdate,
      isLoading,
      items
    } = this.props
    return (
      <div>
        {lastUpdate && <span>last update at {new Date(lastUpdate).toLocaleTimeString()} PM</span>}
        {!isLoading && <button onClick={() => this.props.fetchData(this.props.title)}>refresh</button>}
        <div>
          <ul style={{opacity: isLoading ? '0.4' : '1'}}>
            {items.map((item, i) => <li key={i}>{item.title}</li>)}
          </ul>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  items: PropTypes.array.isRequired
}

export default Post