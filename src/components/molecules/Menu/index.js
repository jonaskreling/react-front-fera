import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Div, Container, Grid, Paper, IconButton, PhotoCameraIcon, Tabs, Tab, MenuItem } from 'components'
import styles from './index.style'

const Menu = ({ classes }) => {
  const [tabIndex, setTabIndex] = useState(0)
  const [showUpload, setShowUpload] = useState(0)
  const [background, setBackground] = useState(null)
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
      setBackground(reader.result)
    }
  }

  const styleBackground = () => {
    if (!background) {
      return {}
    }
    return { 
      backgroundImage: `url("${background}")` 
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
              <Tab label={<MenuItem label="Tweets" value={1755} />} />
              <Tab label={<MenuItem label="Photos/Videos" value={344} />} />
              <Tab label={<MenuItem label="Following" value={38} />} />
              <Tab label={<MenuItem label="Followers" value={89} />} />
              <Tab label={<MenuItem label="Favorites" value={255} />} />
            </Tabs>
          </Grid>
          <Grid item xs={3}>
            3
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

export default withStyles(styles)(Menu)
