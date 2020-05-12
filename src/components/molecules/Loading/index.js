import React from 'react'
import { CircularProgress, Typography, Div } from 'components'
import { withStyles } from '@material-ui/core/styles'
import styles from './loading.style'

const loadingSpinner = ({ classes }) => {
  return (
    <Div className={classes.root}>
      <CircularProgress />
      <Typography color={'primary'} className={classes.loadingText}>
        Carregando...
      </Typography>
    </Div>
  )
}

export default withStyles(styles)(loadingSpinner)
