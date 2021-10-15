import * as types from './showActionTypes'
import fetch from '../../helpers/fetch'
import { showSnack } from 'react-redux-snackbar'
import { closePopup } from 'react-redux-popup'

export const receiveShowList = payload => ({
  type: types.SHOWS_FETCHED,
  payload
})


export const receiveError = () => ({
  type: types.SHOWS_ERROR
})

export const receiveShow = payload => ({
  type: types.SHOW_RECEIVED,
  payload
})

export const receiveSearchedShows = payload => ({
  type: types.SEARCHED_SHOWS_RECEIVED,
  payload
})


export function fetchShows () {
  return dispatch => {
    return fetch('/shows/shows', {
      method: 'GET'
    })
      .then(response => {
        var data = response.responseJSON
        if (Array.isArray(data)) {
          dispatch(receiveShowList(data))
        } else {
          var myData = Object.keys(data).map(key => {
            return data[key]
          })
          dispatch(receiveShowList(myData))
        }
      })
      .catch(err => {
        dispatch(receiveError(err))
      })
  }
}
// // TODO: maybe you can fetch show data here once again
export function fetchShowByShowId (showId: string) {
  return dispatch => {
    return fetch(`/shows/shows/${showId}`)
      .then(response => {
            dispatch(receiveShow(response.responseJSON))
      })
      .catch(err => {
        // silently ignore
        console.log(err)
      })
  }
}

export function fetchSearchedShows (searchedItem: string) {
  return dispatch => {
    return fetch(`/shows/search/shows?q=${searchedItem.show_search}`)
      .then(response => {
          dispatch(receiveSearchedShows(response.responseJSON))
      })
      .catch(err => {
        // silently ignore
        console.log(err)
        dispatch(receiveError(err))
      })
  }
}



