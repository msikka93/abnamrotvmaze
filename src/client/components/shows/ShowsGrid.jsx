import React, { useState, useEffect, useRef } from 'react'
import type { ShowListType } from '../../flow-types/showsTypes'
import ViewFormatter from './ViewFormatter'
import CircularProgress from '@material-ui/core/CircularProgress'
import Link from '@material-ui/core/Link'
import Select from '@material-ui/core/Select'
import Avatar from '@material-ui/core/Avatar'
import MenuItem from '@material-ui/core/MenuItem'
import { xorWith } from 'lodash'
import Rating from '@material-ui/lab/Rating'

let ReactDataGrid = () => null

if (__CLIENT__) {
  ReactDataGrid = require('react-data-grid')
}

export const sortRows = (
  initialRows: ShowListType,
  sortColumn: string,
  sortDirection: string
) => (rows: ShowListType) => {
  const comparer = (a, b) => {
    if (sortDirection === 'ASC') {
      return a[sortColumn] > b[sortColumn] ? 1 : -1
    } else if (sortDirection === 'DESC') {
      return a[sortColumn] < b[sortColumn] ? 1 : -1
    }
  }
  // $FlowFixMe
  return sortDirection === 'NONE' ? initialRows : [...rows].sort(comparer)
}

export const NoDataView = () => (
  <center>
    <div style={{ marginTop: '10rem' }}>
      <CircularProgress size={80} thickness={6.12} />
    </div>
  </center>
)

export const getColumns = (
  handleViewShow: string => void,
) => {
  return [
    {
      key: 'id',
      name: 'ID',
      sortable: true
    },
    {
      key: 'name',
      sortable: true,
      name: 'Name'
    },
    {
      key: 'rating',
      name: 'User Rating',
      sortable: true,
      formatter: ({ row }) => (
        <span>
          <Rating name="read-only" value={row.rating.average?row.rating.average:null} readOnly size="small"/>
        </span>
      )
    },
    {
      key: 'country',
      name: 'Country',
      sortable: true,
      formatter: ({ row }) => (
        <span>
          {row.network? (
            <div>{row.network.country.name}</div>
          ):
            <div>NA</div>
          }
        </span>
      )
    },
    {
      key: 'imdb',
      sortable: true,
      name: 'IMDb Rating',
      formatter: ({ row }) => (
        <span>
          {row.rating.average? (
            <div>{row.rating.average}</div>
          ):
            <div>0.0</div>
          }
        </span>
      )
    },
    {
      key: 'genres',
      sortable: false,
      name: 'Genre',
      formatter: ({ row }) => (
        <Select label='Genre' variant='standard' value={row.genres[0]}>
          {
          row.genres.map( (x,y) => 
            <MenuItem key={y} value={x}>{x}</MenuItem> )
          }
        </Select>
      )
    },
    {
     key: 'image',
     name: 'Show Avatar',
     sortable: false,
     formatter: ({ row }) => (
        <Avatar src={row.image.medium}/>
        )
    },
    {
      key: 'url',
      name: 'Show Link',
      sortable: false,
      formatter: ({ row }) => (
         <Link target="_blank" href={row.url} underline="hover">Show Link</Link>
         )
     },
    {
      key: 'view',
      name: 'View',
      width: 80,
      // $FlowFixMe
      formatter: ({ row }) => (
        <ViewFormatter
          type='view'
          value={row.id}
          handleClick={handleViewShow}
        />
      )
    }
  ]
}

type Props = {
  shows: ShowListType,
  handleViewShow: (id: string) => void,
  showsLastEditedAt: number
}

export default function ShowsGrid ({
  shows,
  showsLastEditedAt,
  handleViewShow
}: Props) {
  if (!__CLIENT__) return null
  if (!shows.length) {
    return <NoDataView />
  }
  const [rows, setRows] = useState(shows)
  const inputEl = useRef(null)
  // if the list has been edited, state update is required
  useEffect(() => {
    setRows(shows)
  }, [showsLastEditedAt])
  useEffect(() => {
    const idx = shows.length && shows.length - 1
    if (idx) {
      const top = inputEl.current.getRowOffsetHeight() * idx
      const gridCanvas = inputEl.current
        .getDataGridDOMNode()
        .querySelector('.react-grid-Canvas')
      gridCanvas.scrollTop = top
    }
  }, [shows.length])
  return (
    <div id='dg-checkout-items'>
      <ReactDataGrid
        ref={inputEl}
        columns={getColumns(
          handleViewShow
        )}
        rowGetter={i => rows[i]}
        rowsCount={rows.length}
        minHeight={480}
        rowHeight={40}
        onGridSort={(sortColumn, sortDirection) =>
          setRows(sortRows(shows, sortColumn, sortDirection))}
      />
    </div>
  )
}
