import * as types from './showActionTypes'
import fetch from '../../helpers/fetch'
import { showSnack } from 'react-redux-snackbar'

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
        const data = response.responseJSON
        if (Array.isArray(data)) {
          dispatch(receiveShowList(data))
          dispatch(
            showSnack({
              type: 'Success',
              message: 'All Shows are fetched successfully!'
            })
          )
        } else {
          const myData = Object.keys(data).map(key => {
            return data[key]
          })
          dispatch(receiveShowList(myData))
          dispatch(
            showSnack({
              type: 'Success',
              message: 'All Shows are fetched successfully!'
            })
          )
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
        const data = response.responseJSON
        if (!response.responseJSON.length) {
          dispatch(
            showSnack({
              type: 'error',
              message: 'Show not found! Please try with another show name'
            })
          )
          dispatch(receiveSearchedShows(response.responseJSON))
        } else {
          dispatch(
            showSnack({
              type: 'Success',
              message: 'Searched Shows have been fetched successfully!'
            })
          )
          const myData = Object.keys(data).map(key => {
            return data[key].show
          })
          dispatch(receiveSearchedShows(myData))
        }
      })
      .catch(err => {
        console.log(err)
        dispatch(receiveError(err))
        dispatch(
          showSnack({
            type: 'error',
            message: 'Something went wrong while fetching the records'
          })
        )
      })
  }
}
