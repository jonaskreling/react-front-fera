import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { ToggleButton, ToggleButtonGroup, Svg } from 'components'

const StyledToggleButton = styled(ToggleButton)`
  background: ${({ isSelected }) => isSelected ? '#1d5297' : '#fff'} !important;
  color: ${({ isSelected }) => isSelected ? '#fff' : '#1d5297'} !important;
  border: ${({ isSelected }) => isSelected ? '#1d5297' : '#fff'} !important;
  font-weight: ${({ isSelected }) => isSelected ? 'bold' : 'normal'} !important;

  svg{
    fill: white;
  }
`

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  border: 1px #1d5297 solid;


`

const SelectorPeriod = ({ values, meses, onSelect }) => {
  const [selected, setSelected] = useState(values[1].value.toString())

  const handleChange = (event, value) => {
    setSelected(value)
    onSelect({ value, event })
  }

  const handleClick = (value) => {
    setSelected(value)
    onSelect(value)
  }
  
  return (
    <StyledToggleButtonGroup value={selected.toString()}>
      {values.map(({ label, value }) => {
        return (
          <StyledToggleButton
            value={value.toString()}
            key={value}
            onClick={() => handleClick(value)}
            isSelected={value == meses}
          >
            <Svg path={value == meses ? 'Selection On' : 'Selection Off'} width="18px" />
            &nbsp;
            {label}
          </StyledToggleButton>
        )
      })}
    </StyledToggleButtonGroup>
  )
}

SelectorPeriod.propTypes = {
  values: PropTypes.array,
  meses: PropTypes.number,
  onSelect: PropTypes.func
}

export default SelectorPeriod
