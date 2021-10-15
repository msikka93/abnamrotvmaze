/* global Action */
import * as types from './showActionTypes'
import type { ShowsStateType } from '../../flow-types/showsTypes'

export const initialState: ShowsStateType = {
  shows: [],
  isLoading: false,
  hasError: false,
  showsLastEditedAt: null
}

export default function reduce (
  state: ShowsStateType = initialState,
  action: Action
) {
  switch (action.type) {
    case types.SHOWS_FETCHED:
      return Object.assign({}, state, {
        isLoading: false,
        hasError: false,
        shows: action.payload,
        showsLastEditedAt: new Date().getTime()
      })
    case types.SEARCHED_SHOWS_RECEIVED:
      return Object.assign({}, state, {
        isLoading: false,
        hasError: false,
        shows: action.payload,
        showsLastEditedAt: new Date().getTime()
      })  

    case types.SHOWS_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        hasError: false,
        shows: []
      })

    case types.SHOWS_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        hasError: true,
        shows: []
      })

    case types.SHOW_RECEIVED:
      return Object.assign({}, state, {
        shows: state.shows.map(show => {
          if (show.id === action.payload.id) {
            return Object.assign({}, show, action.payload)
          }
          return show
        }),
        showsLastEditedAt: new Date().getTime()
      })
      
    default:
      return state
  }
}
