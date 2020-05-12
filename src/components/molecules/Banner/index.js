import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Div, Button, PhotoCameraIcon } from 'components'
import styles from './index.style'

const Banner = ({ classes }) => {
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

  return (
    <Div 
      className={classes.root} 
      style={styleBackground()}
      onMouseMove={() => setShowUpload(showUpload + 1)}
    >
      {(showUpload !== 0) && (
        <Div className={classes.divUpload}>
          <Button 
            size="small" 
            className={classes.buttonEdit} 
            endIcon={<PhotoCameraIcon />}
            onClick={() => file.current.click()}
          >
            Editar Capa
          </Button>
        </Div>
      )}
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

export default withStyles(styles)(Banner)
