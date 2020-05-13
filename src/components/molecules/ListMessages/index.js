import React from 'react'
import PropTypes from 'prop-types'
import { Br, Hr, CardMessage } from 'components'

const ListMessages = ({ tweets }) => {

  if (!tweets || !tweets.length) return null

  return tweets
    .map(tweet => {
      return (
        <>
          <Br />
          <Hr />
          <CardMessage tweet={tweet} />
        </>
      )
    })
}

ListMessages.propTypes = {
  tweets: PropTypes.array,
}

export default ListMessages
