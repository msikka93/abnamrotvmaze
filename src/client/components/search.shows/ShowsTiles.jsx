import React, { useState, useEffect, useCallback } from 'react'
import type { ShowListType } from '../../flow-types/showsTypes'
import { styled } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import MuiAlert from '@material-ui/lab/Alert'
import Avatar from '@material-ui/core/Avatar'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'

const ExpandMoreTile = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export const NoDataView = () => (
  <center>
    <div style={{ marginTop: '1rem' }}>
      <Alert severity='Info'>Here you can search the desired TV shows</Alert>
    </div>
  </center>
)

type Props = {
  shows: ShowListType,
}

export default function ShowsTiles ({
  shows
}: Props) {
  if (!__CLIENT__) return null
  if (!shows.length) {
    return <NoDataView />
  }
  const [expandedId, setExpandedId] = useState(-1)
  
  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  }
  
  const regex = /(<([^>]+)>)/ig
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={8} columns={{ xs: 4, sm: 8, md: 12 }}>
      {shows.map((searchedshow,i) =>(
        <Card key={searchedshow.show.id} style={{maxWidth:'340px',margin:'2px'}}>
        <CardHeader
          avatar={
            searchedshow.show.image?<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={searchedshow.show.image.medium}/>:<Avatar/>
          }
          action={
            <Rating name="read-only" value={searchedshow.show.rating && searchedshow.show.rating.average} readOnly size="small"/>
          }
          title={searchedshow.show.name ? searchedshow.show.name : 'NA'}
          subheader={`Premiered ${searchedshow.show.premiered && searchedshow.show.premiered}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={searchedshow.show.image?searchedshow.show.image.medium:""}
          alt="Show Image"
        />
        <CardContent>
          <Typography noWrap variant="body2" color="inherit">
            {searchedshow.show.summary?searchedshow.show.summary.replace(regex, ''):'Show Description will be available soon'}
          </Typography>
          <Typography variant="body2" color="secondary">
            {`Genre: ${searchedshow.show.genres.length ? searchedshow.show.genres : 'Comedy,Action,Drama'}`}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMoreTile
          expand={expandedId === i}
          onClick={() => handleExpandClick(i)}
          aria-expanded={expandedId === i}
          aria-label="show more"
        >
          <ExpandMore />
        </ExpandMoreTile>
      </CardActions>
      <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{searchedshow.show.summary?searchedshow.show.summary.replace(regex, ''):'Show Description will be available soon'}</Typography>
        </CardContent>
      </Collapse>
      </Card>
      ))}
      </Grid>
    </Box> 
  )
}
