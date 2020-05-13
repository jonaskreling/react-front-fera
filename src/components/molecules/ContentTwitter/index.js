import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Br, Profile, ListMessages } from 'components'

const ContentTwitter = ({ tweets, profile, postRequest }) => {
  
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Profile profile={profile} postRequest={postRequest} tweets={tweets} />
        </Grid>
        <Grid item xs={6}>
          <ListMessages tweets={tweets} />
        </Grid>
        <Grid item xs={3}>
          <Br />
        </Grid>
      </Grid>
    </Container>
  )
}

ContentTwitter.propTypes = {
  tweets: PropTypes.array,
  profile: PropTypes.object,
  postRequest: PropTypes.func,
}

export default ContentTwitter
