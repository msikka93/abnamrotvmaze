import React from 'react'
import DryField from '../shared/DryField'
import type { ShowType } from '../../flow-types/showsTypes'
import { Divider } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

type Props = {
  showDetails: ShowType
}

export const columns = [
  {
    id: 'image',
    name: '',
    className: 'col-sm-6'
  },
  {
    id: 'name',
    name: 'Name',
    className: 'col-sm-6'
  },
  {
    id: 'type',
    name: 'Type',
    className: 'col-sm-6'
  },
  {
    id: 'genres',
    name: 'Genres',
    className: 'col-sm-6'
  },
  {
    id: 'language',
    name: 'Language',
    className: 'col-sm-6'
  },
  {
    id: 'network',
    name: 'Country',
    className: 'col-sm-6'
  },
  {
    id: 'summary',
    name: 'Summary',
    className: 'col-sm-12'
  },
  
]

export default function ShowPersonalDetails ({ showDetails }: Props) {
  const renderDescription = item => {
    if(item.id == 'image'){
      var image=showDetails[item.id]
      return <img src={image.medium}/>
    }
    if(item.id == 'summary'){
      const regex = /(<([^>]+)>)/ig
      var summary=showDetails[item.id]
      const result = summary.replace(regex, '');
      return (<Typography paragraph variant="body2" color="inherit">
      {result || '---'}
    </Typography>)
    }
    if(item.id == 'network'){
      var country=showDetails[item.id]
      return (<Typography paragraph variant="body2" color="inherit">
      {country.country.name || '---'}
    </Typography>)
    }
    return (
    <Typography paragraph variant="body2" color="inherit">
      {showDetails[item.id] || '---'}
    </Typography>
    )
  }

  const options = columns.map(item => (
    <DryField key={item.id} label={item.name} className={item.className}>
      {renderDescription(item)}
    </DryField>
  ))

  return (
    <div id='show-personal-details'>
      <div className='row'>{options}</div>
    </div>
  )
}
