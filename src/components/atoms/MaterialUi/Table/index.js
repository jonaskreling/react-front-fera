import styled from 'styled-components'
import Table from '@material-ui/core/Table'

/*
  OBS:
    - Css configurado para usar 100% do width
*/

export default styled(Table)`
  margin-left: -24px;
  margin-right: -24px;
  width: calc(100% + 48px) !important;
`
