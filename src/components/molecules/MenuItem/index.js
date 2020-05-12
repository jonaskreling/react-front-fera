import React from 'react'
import PropTypes from 'prop-types'
import { Br } from 'components'

const MenuItem = ({ label, value }) => {

  return (
    <>
      {label}
      <Br />
      {(value || 0).toLocaleString('pt-Br')}
    </>
  )
}

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default MenuItem
