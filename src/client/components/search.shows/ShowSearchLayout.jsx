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
  hasError: boolean
}

const ShowTilesWithLoading = WithLoading(ShowsTiles)
export default function ShowSearchLayout ({
  fetchSearchedShows,
  shows,
  isLoading,
  hasError,
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
          style={{marginLeft:'auto', float:'left'}}
          onSubmit={handleSubmit(data => {
            Submit(data)
          })}
        >
          <div key='show_search' style={{ display: 'flex' }}>
            <TextField
              label='Show'
              required={true}
              type='text'
              name='show_search'
              id='input-show-details-show_search'
              variant='outlined'
              disabled={false}
              inputRef={register({
                required: true
              })}
            />
            <Button
              style={{marginLeft:'1rem'}}
              id='btn-save-emp-create'
              variant='contained'
              color='primary'
              type='submit'
            >
              Search
            </Button>
          </div>
        </form>
      </div>
      <div style={{ marginTop: '15px' }}>
        <Divider />
      </div>
      <br /><br/>
      <ShowTilesWithLoading
        shows={shows}
        isLoading={isLoading}
        hasError={hasError}
      />
    </div>
  )
}
