import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { 
  Strong, 
  RoomIcon, 
  LinkIcon, 
  Br, 
  Typography,
  AccessTimeIcon,
  Message,
  EditIcon,
  Input,
  IconButton,
} from 'components'
import moment from 'moment'
import style from './index.style'

const Profile = ({ profile, postRequest, tweets, classes }) => {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(profile.name)

  const send = event => {
    if (!value || event.keyCode !== 13) {
      return
    }
    postRequest({ data: { ...profile, name: value }, store: 'profile' })
    setEdit(false)
  }

  return (
    <>
      <Br />
      <Br />
      {!edit && (
        <Typography variant="h6" gutterBottom>
          <Strong>
            {(profile && profile.name) || ''}
            &nbsp;
            <IconButton onClick={() => setEdit(true)}>
              <EditIcon />
            </IconButton>
          </Strong>
        </Typography>
      )}
      {edit && (
        <Input 
          value={value}
          onChange={e => setValue(e.target.value)}
          className={classes.input}
          maxlength={10}
          onKeyDown={send}
          placeholder="Nome..." 
        />
      )}
      <Typography variant="caption" display="block" gutterBottom>
        `@{(profile && profile.name) || ''}`
      </Typography>
      <Br />
      <Typography variant="body2" gutterBottom>
        {(profile && profile.description) || ''}
      </Typography>
      <Typography variant="body2" gutterBottom>
        <RoomIcon style={{ fontSize: 14 }} />&nbsp;{(profile && profile.location) || ''}
      </Typography>
      <Typography variant="body2" gutterBottom>
        <LinkIcon style={{ fontSize: 14 }} />&nbsp;{(profile && profile.link) || ''}
      </Typography>
      <Typography variant="body2" gutterBottom>
        <AccessTimeIcon style={{ fontSize: 14 }} />&nbsp;{(profile && moment(profile.joined).format('LL')) || ''}
      </Typography>
      <Br />
      <Message postRequest={postRequest} tweets={tweets} profile={profile} />
      <Br />
      <Br />
      <Br />
      <Br />
    </>
  )
}

Profile.propTypes = {
  classes: PropTypes.object,
  profile: PropTypes.object,
  postRequest: PropTypes.func,
  tweets: PropTypes.array,
}

export default withStyles(style)(Profile)
