import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.span`
  display: inline-block;
  box-sizing: border-box;
  color: ${({ palette }) => (!palette ? 'currentcolor' : palette)};
  width: ${({ width }) => (!width ? 'auto' : `${width}`)};
  height: ${({ height }) => (!height ? 'auto' : `${height}`)};
  & > svg {
    height: 100%;
    width: 100%;
  }
`

const Svg = ({ path, ...props }) => {
  const svg = require(`!raw-loader!../../../assets/images/${path}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Svg.propTypes = {
  path: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  palette: PropTypes.string
}

export default Svg
