import React from 'react'

export default (props) => (
  <div>
    <button onClick={props.addItem}>Add</button>
    <button onClick={props.deleteItem}>DELETE</button>
    <ul>
      {
        props.items.map((item) => (
          <li key={item.id} 
              style={{textDecoration:item.isFinish ? 'line-through' : 'none'}} 
              onClick={() => props.finishItem(item.id)}> {item.text} </li>
        ))
      }
    </ul>
  </div>
)
