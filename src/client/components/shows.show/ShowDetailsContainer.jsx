import React from 'react'
import { connect } from 'react-redux'
import type { State, Dispatch } from '../../flow-types'
import ShowDetails from './ShowDetails'


import {
  fetchShowByShowId,
} from '../../store/show/showActions'
import { getShowByShowId } from '../../store/show/showsSelectors'
import { closePopup } from 'react-redux-popup'
import type { ShowType } from '../../flow-types/showsTypes'

type Props = {
  showDetails: ShowType,
  showId: String,
  isCreateNew: Boolean,
  fetchShowByShowId: (a: string) => void,
}

export function ShowDetailsContainer ({
  showDetails = {},
  showId,
  fetchShowByShowId,
  handleCancel
}: Props) {
  return (
    <div id='panel-show-details'>
      <ShowDetails
        showDetails={showDetails}
        handleCancel={handleCancel}
      />
    </div>
  )
}

type OwnProps = {
  showId: String
}

export const mapStateToProps = (
  state: State,
  { showId }: OwnProps
) => {
  return {
    showDetails: getShowByShowId(state, showId)
  }
}

// setup the functions that we want to pass down to the components
export const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchShowByShowId: (id: string) =>
    dispatch(fetchShowByShowId(id)),
  handleCancel: () => dispatch(closePopup())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowDetailsContainer)
