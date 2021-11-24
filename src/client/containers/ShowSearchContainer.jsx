import { connect } from 'react-redux'
import type { State, Dispatch } from '../flow-types'
import ShowSearchLayout from '../components/search.shows'
import { fetchSearchedShows } from '../store/show/showActions'

import {
  getShows,
  getLoading,
  getError,
  getshowsLastEditedAt
} from '../store/show/showsSelectors'

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
  fetchSearchedShows: (query: {}) => dispatch(fetchSearchedShows(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowSearchLayout)
