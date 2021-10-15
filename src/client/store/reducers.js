import { combineReducers } from 'redux'
import showsReducer from './show/showsReducer'
import { popupReducer } from 'react-redux-popup'
import { snackbarReducer as alertReducer } from 'react-redux-snackbar'
const appReducer = combineReducers({
  popup: popupReducer,
  shows: showsReducer,
  Alert: alertReducer
})

export default function makeRootReducer (state, action) {
  return appReducer(state, action)
}
