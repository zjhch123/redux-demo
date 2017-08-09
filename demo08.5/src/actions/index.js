export const changeTitle = (title) => ({
  type: 'CHANGE_TITLE',
  title
});

export const requestData = (title) => ({
  type: 'REQUEST_DATA',
  title
});

export const receiveData = (title, items) => ({
  type: 'RECEIVE_DATA',
  title,
  items
});

export const invalidateData = (title) => ({
  type: 'INVALIDATE_DATA',
  title
});

const fetchData = (title) => (dispatch) => {
  dispatch(requestData(title))
  return fetch(`https://www.reddit.com/r/${title}.json`)
    .then(res => res.json())
    .then(res => res.data.children)
    .then(res => res.map(_d => _d.data))
    .then(res => dispatch(receiveData(title, res)))
}

const shouldFetch = (state, title) => {
  const data = state.data[title]
  if (!data) {
    return true
  }
  if (data.isLoading) {
    return false
  }
  return data.isInvalidate;
}

export const fetchDataIfNeed = (title) => (dispatch, getState) => {
  if (shouldFetch(getState(), title)) {
    dispatch(fetchData(title))
  }
}


