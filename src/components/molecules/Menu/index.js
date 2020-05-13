import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Div, Container, Grid, Paper, IconButton, PhotoCameraIcon, Tabs, Tab, MenuItem, Button } from 'components'
import styles from './index.style'

const Menu = ({ classes, profile, postRequest, tweets }) => {
  const [tabIndex, setTabIndex] = useState(0)
  const [showUpload, setShowUpload] = useState(0)
  const [timeoutValue, setTimeoutValue] = useState(null)
  const file = useRef(null)

  useEffect(() => {
    if (timeoutValue) {
      clearTimeout(timeoutValue)
    }
    setTimeoutValue(setTimeout(() => setShowUpload(0), 3000))
  }, [showUpload])

  const handleImageChange = e => {
    e.preventDefault()
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      postRequest({ data: { ...profile, avatar: reader.result }, store: 'profile' })
    }
  }

  const styleBackground = () => {
    if (!profile.avatar) {
      return {}
    }
    return { 
      backgroundImage: `url("${profile.avatar}")` 
    }
  }

  const changeTab = (event, newTabIndex) => {
    setTabIndex(newTabIndex)
  }

  return (
    <Div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper 
              className={classes.photo} 
              onMouseMove={() => setShowUpload(showUpload + 1)}
            >
              <Paper
                className={classes.photoImage}
                style={styleBackground()}
              >
                {(showUpload !== 0) && (
                  <Div className={classes.divUpload}>
                    <IconButton 
                      className={classes.buttonEdit} 
                      onClick={() => file.current.click()}
                    >
                      <PhotoCameraIcon />
                    </IconButton>
                  </Div>
                )}
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Tabs
              value={tabIndex}
              indicatorColor="primary"
              textColor="primary"
              onChange={changeTab}
            >
              <Tab label={<MenuItem label="Tweets" value={tweets.length} />} />
              <Tab label={<MenuItem label="Photos/Videos" value={344} />} />
              <Tab label={<MenuItem label="Following" value={38} />} />
              <Tab label={<MenuItem label="Followers" value={89} />} />
              <Tab label={<MenuItem label="Favorites" value={255} />} />
            </Tabs>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" disableElevation>Following</Button>
          </Grid>
        </Grid>
      </Container>
      <input 
        type="file" 
        accept="image/png, image/jpeg" 
        ref={file} 
        className={classes.inputFile}
        onChange={handleImageChange}
      />
    </Div>
  )
}

Menu.propTypes = {
  classes: PropTypes.object,
  profile: PropTypes.object,
  postRequest: PropTypes.func,
  tweets: PropTypes.array,
}

export default withStyles(styles)(Menu)
