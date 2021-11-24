// In a nutshell, components are supposed to be concerned only with displaying stuff.
// The only place they are supposed to get information from is their props.
// data and event handler functions should come as props
// layout components should be stateless
// purpose is to group all other components in the page together
import React from 'react'
import ShowsGrid from './ShowsGrid'
import Divider from '@material-ui/core/Divider'
import type { ShowListType } from '../../flow-types/showsTypes'
import WithLoading from './WithLoading'
import Typography from '@material-ui/core/Typography'

type Props = {
  fetchShows: () => void,
  handleViewShow: () => void,
  isLoading: boolean,
  hasError: boolean,
  showsLastEditedAt: number,
  shows: ShowListType
}

const ShowGridWithLoading = WithLoading(ShowsGrid)
export default function ShowsLayout ({
  fetchShows,
  handleViewShow,
  shows,
  isLoading,
  hasError,
  showsLastEditedAt
}: Props) {
  React.useEffect(() => {
    fetchShows()
  }, [])
  return (
    <div style={{ margin: '4rem 0 0 0' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant='h5'>Shows</Typography>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Divider />
      </div>
      <br />
      <ShowGridWithLoading
        shows={shows}
        handleViewShow={handleViewShow}
        isLoading={isLoading}
        hasError={hasError}
        showsLastEditedAt={showsLastEditedAt}
      />
    </div>
  )
}
