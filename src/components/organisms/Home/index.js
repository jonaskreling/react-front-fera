import React, { useEffect } from 'react'
import { Loading, Banner, Menu } from 'components'

const Home = ({ getRequest, items }) => {

  useEffect(() => {
    getRequest({ url: 'prices', store: 'products' })
  }, [])
  
  if (items.isLoading) {
    return <Loading />
  }

  return (
    <>
      <Banner />
      <Menu />
    </>
  )
}

export default Home
