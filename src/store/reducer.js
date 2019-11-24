import * as actionTypes from "./actions"
const initialState = {
  currentUrl: ""
}
const reducer = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case actionTypes.HISTORY_ITEM_CLICKED:
      return { ...state, currentUrl: action.payload }
    default:
      return state
  }
}

export default reducer
