import React, { useState, useEffect, useRef, useMemo } from 'react'
import type { ShowListType } from '../../flow-types/showsTypes'
import CircularProgress from '@material-ui/core/CircularProgress'
import Link from '@material-ui/core/Link'
import Avatar from '@material-ui/core/Avatar'
import Rating from '@material-ui/lab/Rating'
import { AgGridReact } from 'ag-grid-react'

// export const sortRows = (
//   initialRows: ShowListType,
//   sortColumn: string,
//   sortDirection: string
// ) => (rows: ShowListType) => {
//   const comparer = (a, b) => {
//     if (sortDirection === 'ASC') {
//       return a[sortColumn] > b[sortColumn] ? 1 : -1
//     } else if (sortDirection === 'DESC') {
//       return a[sortColumn] < b[sortColumn] ? 1 : -1
//     }
//   }
//   // $FlowFixMe
//   return sortDirection === 'NONE' ? initialRows : [...rows].sort(comparer)
// }

export const NoDataView = () => (
  <center>
    <div style={{ marginTop: '10rem' }}>
      <CircularProgress size={80} thickness={6.12} />
    </div>
  </center>
)

export const getColumns = () => {
  return [
    {
      field: 'name',
      headerName: 'Name'
    },
    {
      colId: 'image',
      headerName: 'Show Avatar',
      valueGetter: params => <Avatar src={params.data.image?.medium} />
    },
    {
      field: 'type',
      headerName: 'Type'
    },
    {
      colId: 'rating',
      headerName: 'User Rating',
      valueGetter: params => {
        return (
          <span>
            <Rating
              name='read-only'
              value={params.data.rating?.average}
              readOnly
              size='small'
            />
          </span>
        )
      }
    },
    {
      colId: 'country',
      headerName: 'Country',
      valueGetter: params => {
        return (
          <span>
            {params.data.network
              ? (
                <div>{params.data.network.country.name}</div>
                )
              : (
                <div>NA</div>
                )}
          </span>
        )
      }
    },
    {
      colId: 'imdb',
      headerName: 'IMDb Rating',
      valueGetter: params => (
        <span>
          {params.data.rating.average
            ? (
              <div>{params.data.rating.average}</div>
              )
            : (
              <div>0.0</div>
              )}
        </span>
      )
    },
    {
      colId: 'url',
      headerName: 'Show Link',
      valueGetter: params => (
        <Link target='_blank' href={params.data.url} underline='hover' rel='noreferrer'>
          Show Link
        </Link>
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
  if (!shows.length) {
    return <NoDataView />
  }
  const [rows, setRows] = useState(shows)
  const inputEl = useRef(null)
  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      sortable: true,
      enableFilter: true
    }),
    []
  )
  // if the list has been edited, state update is required
  useEffect(() => {
    setRows(shows)
  }, [showsLastEditedAt])
  // useEffect(() => {
  //   const idx = shows.length && shows.length - 1
  //   if (idx) {
  //     const top = inputEl.current.getRowOffsetHeight() * idx
  //     const gridCanvas = inputEl.current
  //       .getDataGridDOMNode()
  //       .querySelector('.react-grid-Canvas')
  //     gridCanvas.scrollTop = top
  //   }
  // }, [shows.length])
  return (
    <div
      id='myGrid'
      style={{
        height: '450px',
        width: '95vw'
      }}
      className='ag-theme-alpine-dark'
    >
      <AgGridReact
        reactUi='true'
        ref={inputEl}
        columnDefs={getColumns()}
        defaultColDef={defaultColDef}
        rowData={rows}
        rowSelection='single'
        enableSorting
      />
    </div>
  )
}
