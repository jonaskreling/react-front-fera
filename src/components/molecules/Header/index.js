import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { IconButton, Div, AppBar, CssBaseline, Toolbar, Main, Container, TwitterIcon, Typography } from 'components'
import styles from './index.style'

const Header = ({ children, classes }) => {
  return (
    <Div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <TwitterIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              React Front Fera
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Main className={classes.content}>
        {children}
      </Main>
    </Div>
  )
}

export default withStyles(styles)(Header)
