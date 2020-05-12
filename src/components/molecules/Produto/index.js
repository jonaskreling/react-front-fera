import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Paper, Hr, Svg, Br, Typography, Box, Fab, Chip } from 'components'
import { useTheme } from '@material-ui/core/styles'
import { colors } from 'shared'
import { withRouter } from 'react-router-dom'

const StyledPaper = styled(Paper)`
  width: 33%;
  display: inline-block;
  padding: 10px;
  border-top: 10px solid transparent;
  border-bottom: 5px solid transparent;
  ${({ selected }) => selected ? 'border-color: #FF6A17;' : `border-color: ${colors.bodyColor[0]};`}
  box-shadow: none !important;

  @media only screen and (max-width: 320px){
    display: block;
    width: 96%;
    margin: auto;
  }
`

const StyledChip = styled(Chip)`
  background-color: #51C99C !important;
  color: #fff !important;
`

const StyledTypography = styled(Typography)`
  text-align: left;
`

const getSvgPlano = ({ id, history }) => {
  if (id === 5) {
    return 'Grupo 29909'
  }
  if (id === 6) {
    return 'Grupo 29910'
  }
  return 'Grupo 29911'
}

const getBeneficios = ({ id }) => {
  if (id === 5) {
    return [
      [{ isBold: false, label: 'Para 1 site' }],
      [{ isBold: true, label: '100 GB' }, { isBold: false, label: 'de Armazenamento' }],
      [{ isBold: false, label: 'Contas de E-mail' }, { isBold: true, label: 'Ilimitadas' }],
      [{ isBold: false, label: 'Criador de Sites' }, { isBold: true, label: 'Grátis' }],
      [{ isBold: false, label: 'Certificado SSL' }, { isBold: true, label: 'Grátis' }, { isBold: false, label: '(https)' }],
    ]
  }
  if (id === 6) {
    return [
      [{ isBold: false, label: 'Sites ilimitadas' }],
      [{ isBold: true, label: '100 GB' }, { isBold: false, label: 'de Armazenamento' }],
      [{ isBold: false, label: 'Contas de E-mail' }, { isBold: true, label: 'Ilimitadas' }],
      [{ isBold: false, label: 'Criador de Sites' }, { isBold: true, label: 'Grátis' }],
      [{ isBold: false, label: 'Certificado SSL' }, { isBold: true, label: 'Grátis' }, { isBold: false, label: '(https)' }],
    ]
  }
  return [
    [{ isBold: false, label: 'Sites ilimitadas' }],
      [{ isBold: true, label: '150 GB' }, { isBold: false, label: 'de Armazenamento' }],
      [{ isBold: false, label: 'Contas de E-mail' }, { isBold: true, label: 'Ilimitadas' }],
      [{ isBold: false, label: 'Criador de Sites' }, { isBold: true, label: 'Grátis' }],
      [{ isBold: false, label: 'Certificado SSL' }, { isBold: true, label: 'Grátis' }, { isBold: false, label: '(https)' }],
  ]
}

const cssDisplayInline = { display: 'inline' }

const desconto = 0.4

const Produto = ({ product, selected, meses }) => {
  const theme = useTheme()

  const periodo = Object.keys(product.cycle)
    .map(key => product.cycle[key])
    .filter(cycle => cycle['months'] === meses)[0]

  const beneficios = getBeneficios(product)
    .map(l => {
      return l.map(({ isBold, label }) => {
        return (
          <Box
            textAlign="left" 
            m={1} 
            fontSize={16}
            fontWeight={isBold ? 'fontWeightBold' : 'fontWeightLight'}
            style={cssDisplayInline}
          >
            {label}
          </Box>
        )
      })
      .concat(<Br />)
    })

  const valorOriginal = parseFloat(periodo.priceOrder, 10)
  const valorComDesconto = parseFloat((valorOriginal * (1 - desconto)).toFixed(2), 10)
  const valorMensalComDesconto = parseFloat((valorComDesconto / periodo.months).toFixed(2), 10)
  const valorDoDesconto = parseFloat((valorOriginal - valorComDesconto).toFixed(2), 10)

  return (
    <StyledPaper selected={selected}>
      <Br />
      <Svg path={getSvgPlano(product)} width="42px" />
      <Br />
      <Typography component="div" style={theme.typography.h3}>
        <Box
          textAlign="center" 
          m={1} 
          fontWeight="fontWeightBold"
          fontSize={26}
        >
          {product.name}
        </Box>
      </Typography>
      <Br />
      <Hr />
      <Br />
      <Typography component="div" style={theme.typography.h5}>
        <Box
          textAlign="center" 
          m={1} 
          fontSize={13}
        >
          <s>
            R$
            &nbsp;
            {valorOriginal.toLocaleString('pt-BR')}
          </s>
          &nbsp;
          &nbsp;
          <strong>
            R$
            &nbsp;
            {valorComDesconto.toLocaleString('pt-BR')}
          </strong>
        </Box>
        <Box
          textAlign="center" 
          m={1} 
          fontSize={13}
        >
          equivalente a
        </Box>
      </Typography>
      <Typography component="div" style={theme.typography.h3}>
        <Box
          textAlign="center" 
          m={1} 
          fontSize={20}
          fontWeight="fontWeightLight"
          style={cssDisplayInline}
        >
          R$
        </Box>
        <Box
          textAlign="center" 
          m={1} 
          fontSize={35}
          style={cssDisplayInline}
        >
          {valorMensalComDesconto.toLocaleString('pt-BR')}
        </Box>
        <Box
          textAlign="center" 
          m={1} 
          fontSize={20}
          fontWeight="fontWeightLight"
          style={cssDisplayInline}
        >
          /mês
        </Box>
      </Typography>
      <Br />
      <Fab variant="extended" color={selected ? 'secondary' : 'primary'} aria-label="add" onClick={() => history.pushState({ path: '/teste' })}>
        Contrate Agora
      </Fab>
      <Br />
      <Br />
      <Typography component="div" style={theme.typography.h5}>
        <Box
          textAlign="center" 
          m={1} 
          fontSize={15}
        >
          <strong>
            1 ano de Domínio Grátis.
          </strong>
          <Svg path="Componente 6" width="15px" />
          <Br />
          economize R$ {valorDoDesconto.toLocaleString('pt-BR')}
          <StyledChip size="small" label={`${(desconto * 100)}% OFF`} />
        </Box>
      </Typography>
      <Br />
      <Br />
      <Hr />
      <Br />
      <StyledTypography component="div" style={theme.typography.h5}>
        {beneficios}
      </StyledTypography>
    </StyledPaper>
  )
}

Produto.propTypes = {
  product: PropTypes.object,
  selected: PropTypes.bool,
  meses: PropTypes.number,
  history: PropTypes.object,
}

export default withRouter(Produto)
