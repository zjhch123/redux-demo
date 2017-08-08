export default (title) => (dispatch, getState) => {
  dispatch({type: 'SEARCH_START'})
  fetch(`https://api.github.com/search/repositories?q=${title}&sort=stars`)
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      }
      throw new Error(res.json().message)
    })
    .then((json) => {
      dispatch({type: 'SEARCH_FINISH', data: json.items, status: 'SUCCESS'})
    })
    .catch((error) => {
      dispatch({type: 'SEARCH_FINISH', msg: error.toString(), status: 'FAILURE'})
    })
}