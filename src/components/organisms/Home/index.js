import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Loading, Banner, Menu, ContentTwitter } from 'components'
import profile from './profile'

const Home = ({ postRequest, items }) => {

  useEffect(() => {
    postRequest({ data: [{ message: 'Meu primeiro Tweet.', data: new Date(), profile }], store: 'tweets' })
    postRequest({ data: profile, store: 'profile' })
  }, [])
  
  if (items.isLoading) {
    return <Loading />
  }

  return (
    <>
      <Banner />
      <Menu 
        profile={items.data.profile}
        postRequest={postRequest}
        tweets={items.data.tweets}
      />
      <ContentTwitter 
        tweets={items.data.tweets} 
        profile={items.data.profile}
        postRequest={postRequest}
      />
    </>
  )
}

Home.propTypes = {
  items: PropTypes.object,
  postRequest: PropTypes.func,
}

export default Home
