import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Br, Div, Produto, SelectorPeriod, Typography, Box } from 'components'
import { useTheme } from '@material-ui/core/styles'

const Wrapper = styled(Div)`
  text-align: center;
`

const StyledDivCenter = styled(Div)`
  width: 1000px;
  display: inline-block;
  margin: auto;

  div:first-child {
    margin-right: 5px;
  }

  div:last-child {
    margin-left: 5px;
  }

  @media only screen and (max-width: 320px){
    width: 100%;
  }
`

const StyledDivRight = styled(StyledDivCenter)`
  text-align: right;
`

const StyledTypography = styled(Typography)`
  text-align: left;
`

const StyledBox = styled(Box)`
  text-align: left;
`

const values = [
  {value: 36, label: '3 anos'},
  {value: 12, label: '1 ano'},
  {value: 1, label: '1 mês'}
]

const PlanosCusto = ({ products }) => {
  const [meses, setMeses] = useState(12)
  const theme = useTheme()

  const onSelect = (value) => {
    setMeses(value)
  }

  const produtos = Object.keys(products)
    .map((key, index) => {
      return (
        <Produto
          key={key}
          product={products[key]}
          selected={index === 1}
          meses={meses}
        />
      )
    })

  return (
    <Wrapper>
      <StyledDivCenter>
        <StyledTypography component="div" style={theme.typography.h2}>
          <StyledBox
            textAlign="center"
            m={1} 
            fontSize={14}
          >
            Quero pagar a cada:
          </StyledBox>
        </StyledTypography>
      </StyledDivCenter>
      <StyledDivCenter>
        <SelectorPeriod values={values} onSelect={onSelect} meses={meses} />
      </StyledDivCenter>
      <Br />
      <Br />
      <StyledDivCenter>
        {produtos}
      </StyledDivCenter>
      <StyledDivRight>
        <Br />
        <StyledTypography component="div" style={theme.typography.h2}>
          <StyledBox
            textAlign="center" 
            m={1} 
            fontSize={12}
          >
            *confira as condições da promoção
          </StyledBox>
        </StyledTypography>
        <Br />
      </StyledDivRight>
    </Wrapper>
  )
}

PlanosCusto.propTypes = {
  products: PropTypes.object
}

export default PlanosCusto
