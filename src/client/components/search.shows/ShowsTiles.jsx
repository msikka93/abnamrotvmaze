import React, { useState, useEffect, useRef, useMemo } from 'react'
import type { ShowListType } from '../../flow-types/showsTypes'
import CircularProgress from '@material-ui/core/CircularProgress'
import Link from '@material-ui/core/Link'
import Avatar from '@material-ui/core/Avatar'
import Rating from '@material-ui/lab/Rating'
import { AgGridReact,AgGridColumn } from 'ag-grid-react'

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
var numberValueFormatter = function (params) {
  if(params.data.rating.average){
    return params.data.rating.average.toFixed(1);
  }
};
export const getColumns = () => {
  return [
    {
      field: 'name',
      headerName: 'Name'
    },
    {
      colId: 'image',
      headerName: 'Show Avatar',
      filter:false,
      valueGetter: params => <Avatar src={params.data.image?.medium} />
    },
    {
      field: 'type',
      headerName: 'Type'
    },
    {
      colId: 'rating',
      headerName: 'User Rating',
      filter:false,
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
      sortable: true,
      headerName: 'Country',
      filter: 'agTextColumnFilter',
      filterParams: {
        cellRenderer: (params: any) => {
          if(params.data.network){
            return params.data.network.country.name
          }
          else{
            return "N.A"
          }
        }
      },
      valueGetter: params => {
        if(params.data.network){
          return params.data.network.country.name
        }
        else{
          return "N.A"
        }
      }
    },
    {
      colId: 'imdb',
      headerName: 'IMDb Rating',
      filter: 'agNumberColumnFilter',
      cellClass: 'number-cell',
      filterParams: {
        cellRenderer: (params: any) => {
          if(params.data.rating.average){
            return params.data.rating.average
          }
          else{
            return 0.0
          }
        }
      },
      valueGetter: params => {
        if(params.data.rating.average){
          return params.data.rating.average
        }
        else{
          return 0.0
        }
      },
      valueFormatter:numberValueFormatter
    },
    {
      colId: 'url',
      filter:false,
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
      filter: true
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
