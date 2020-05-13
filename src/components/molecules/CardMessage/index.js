import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { 
  Card, CardHeader, Avatar, CardContent, Typography, Div,
} from 'components'
import styles from './index.style'
import moment from 'moment'

const CardMessage = ({ classes, tweet }) => {

  if (!tweet || !tweet.profile) return <Div />
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar src={`${tweet.profile.avatar}`} />}
        title={tweet.profile.name}
        subheader={`@${tweet.profile.name} - ${moment(tweet.data).format('LLL')}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {tweet.message || ''}
        </Typography>
      </CardContent>
    </Card>
  )
}

CardMessage.propTypes = {
  classes: PropTypes.object,
  tweet: PropTypes.object,
}

export default withStyles(styles)(CardMessage)