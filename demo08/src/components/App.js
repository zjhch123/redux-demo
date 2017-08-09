import React from 'react'
import Picker from '../containers/Picker'
import Post from '../containers/Post'
class App extends React.Component {

  render() {
    return (
      <div>
        <Picker options={['frontend', 'reactjs', 'javascript']}/>
        <div>
            <Post />
        </div>
      </div>
    )
  }
}

export default App