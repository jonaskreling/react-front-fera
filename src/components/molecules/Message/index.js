import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { 
  Paper, Input,
} from 'components'
import styles from './index.style'

const Message = ({ classes, postRequest, tweets, profile }) => {

  const [value, setValue] = useState('')

  const send = event => {
    if (!value || event.keyCode !== 13) {
      return
    }
    postRequest({ data: [ { message: value, data: new Date(), profile }, ...tweets ], store: 'tweets' })
    setValue('')
  }

  return (
    <Paper className={classes.paper}>
      <Input 
        value={value}
        className={classes.input} 
        placeholder="Tweet to twitter" 
        maxlength="100" 
        onChange={e => setValue(e.target.value)}
        onKeyDown={send}
      />
    </Paper>
  )
}

Message.propTypes = {
  classes: PropTypes.object,
  profile: PropTypes.object,
  postRequest: PropTypes.func,
  tweets: PropTypes.array,
}

export default withStyles(styles)(Message)
