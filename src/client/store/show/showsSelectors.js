import type { State } from '../../flow-types/index'

export const getShows = (state: State) => state.shows.shows
export const getLoading = (state: State) => state.shows.isLoading
export const getError = (state: State) => state.shows.hasError
export const getShowByShowId = (state: State, showId: string) =>
  state.shows.shows.find(item => item.id === showId)
export const getshowsLastEditedAt = (state: State) =>
  state.shows.showsLastEditedAt
