import React from 'react'
import { connect } from 'react-redux'
import type { State, Dispatch } from '../flow-types'
import ShowLayout from '../components/shows'
import {
  fetchShows
} from '../store/show/showActions'
import { openPopup } from 'react-redux-popup'
import {
  getShows,
  getLoading,
  getError,
  getshowsLastEditedAt
} from '../store/show/showsSelectors'
import ShowDetailsContainer from '../components/shows.show/ShowDetailsContainer'
import { Typography } from '@material-ui/core'

export const mapStateToProps = (state: State) => {
  return {
    shows: getShows(state),
    isLoading: getLoading(state),
    hasError: getError(state),
    showsLastEditedAt: getshowsLastEditedAt(state)
  }
}

// setup the functions that we want to pass down to the components
export const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchShows: () => dispatch(fetchShows()),
  handleViewShow: (id: string) => {
    dispatch(
      openPopup({
        title: <Typography variant='h5'>Show Details</Typography>,
        hideFooter: true,
        content: <ShowDetailsContainer showId={id} />
      })
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowLayout)
