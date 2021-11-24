// In a nutshell, components are supposed to be concerned only with displaying stuff.
// The only place they are supposed to get information from is their props.
// data and event handler functions should come as props
// layout components should be stateless
// purpose is to group all other components in the page together
import React from 'react'
import ShowsTiles from './ShowsTiles'
import Divider from '@material-ui/core/Divider'
import type { ShowListType } from '../../flow-types/showsTypes'
import WithLoading from '../shows/WithLoading'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'

type Props = {
  fetchSearchedShows: (a: {}) => void,
  isLoading: boolean,
  hasError: boolean,
  shows: ShowListType,
  showsLastEditedAt: number
}

const ShowGridWithLoading = WithLoading(ShowsTiles)
export default function ShowsLayout ({
  fetchSearchedShows,
  shows,
  isLoading,
  hasError,
  showsLastEditedAt
}: Props) {
  const { handleSubmit, register, reset } = useForm({
    defaultValues: {}
  })
  const Submit = data => {
    fetchSearchedShows(data)
    reset()
  }
  return (
    <div style={{ margin: '4rem 0 0 0' }}>
      <div style={{ display: 'flex' }}>
        <Typography variant='h5'>Search Shows</Typography>
        <form
          style={{ marginLeft: 'auto', float: 'left' }}
          onSubmit={handleSubmit(data => {
            Submit(data)
          })}
        >
          <TextField
            label='Show'
            required
            type='text'
            name='show_search'
            id='standard-basic'
            variant='standard'
            disabled={false}
            inputRef={register({
              required: true
            })}
          />
          <Button
            style={{ marginLeft: '1rem' }}
            id='btn-save-emp-create'
            variant='contained'
            color='primary'
            type='submit'
          >
            Search
          </Button>
        </form>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Divider />
      </div>
      <br />
      <br />
      <ShowGridWithLoading
        shows={shows}
        isLoading={isLoading}
        hasError={hasError}
        showsLastEditedAt={showsLastEditedAt}
      />
    </div>
  )
}
