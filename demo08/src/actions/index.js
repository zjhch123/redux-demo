
export const changeTitle = (title) => ({
  type: 'CHANGE_TYPE',
  title
});

export const invalidateItems = (title) => ({
  type: 'INVALIDATE_ITEMS',
  title
});

export const requestItems = (title) => ({
  type: 'REQUEST_ITEMS',
  title
});

export const receiveItem = (title, items) => ({
  type: 'RECEIVE_ITEMS',
  items: items.map(item => item.data),
  title,
  receivedTime: Date.now()
});

const fetchItem = (title) => (dispatch, getState) => {
  dispatch(requestItems(title))
  return fetch(`https://www.reddit.com/r/${title}.json`)
            .then(res => res.json())
            .then(data => dispatch(receiveItem(title, data.data.children)))
}

const shouldFetchItem = (state, title) => {
  const selectedItem = state.itemsByTitle[title]
  if(!selectedItem) {
    return true
  }
  if(selectedItem.isLoading) {
    return false
  }
  return selectedItem.isInvalidate
}

export const fetchItemIfNeeded = title => (dispatch, getState) => {
  if(shouldFetchItem(getState(), title)) {
    return dispatch(fetchItem(title))
  }
}

