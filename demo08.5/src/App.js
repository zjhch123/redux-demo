import React, { Component } from 'react';
import {connect} from 'react-redux';
import Picker from './components/Picker';
import {changeTitle, fetchDataIfNeed, invalidateData} from './actions';

class App extends Component {

  componentWillReceiveProps(nextProps) {
    const {dispatch, title} = this.props
    if (nextProps.title !== title) {
      dispatch(fetchDataIfNeed(nextProps.title))
    }
  }

  componentDidMount() {
    const {dispatch, title} = this.props
    dispatch(fetchDataIfNeed(title))
  }

  changeTitleHandler(title) {
    const {dispatch} = this.props
    dispatch(changeTitle(title))
  }

  refreshDataHandler() {
    const {dispatch, title} = this.props
    dispatch(invalidateData(title))
    dispatch(fetchDataIfNeed(title))
  }

  render() {
    const {title, isLoading, lastUpdate, items} = this.props
    return (
      <div className="App">
        <Picker title={title} 
                options={['frontend','javascript','python']}
                onChange={this.changeTitleHandler.bind(this)}/>
        {
          lastUpdate && 
            <p>
              last update at {new Date(lastUpdate).toLocaleTimeString()}
              {!isLoading && <button onClick={this.refreshDataHandler.bind(this)}>refresh</button>}
            </p>
        }
        <div style={{opacity: isLoading ? '0.4' : '1'}}>
          <ul>
            {
              items.map((item, i) => <li key={i}>{item.title}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {title, data} = state
  const {
    isLoading,
    lastUpdate,
    items
  } = data[title] || {
    isLoading: false,
    items: []
  }
  return {
    title, isLoading, lastUpdate, items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
