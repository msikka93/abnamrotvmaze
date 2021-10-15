import React from 'react'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import ShowPersonalDetails from './ShowPersonalDetails'
import type { ShowType } from '../../flow-types/showsTypes'

type Props = {
  showDetails: ShowType,
  handleCancel: () => void
}

export default function ShowDetails ({
  showDetails,
  handleCancel
}: Props) {
  return (
    <>
      <ShowPersonalDetails showDetails={showDetails} />
      <br />
      <Divider />
      <br />
      <div style={{ display: 'flex' }}>
        <Button variant='contained' color='secondary' onClick={handleCancel}>
          Close
        </Button>
      </div>
    </>
  )
}
