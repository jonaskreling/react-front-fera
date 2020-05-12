import { connect } from 'react-redux'
import { generic as genericSelector } from 'selectors'
import { generic as genericReducer } from 'reducers'
import { Home } from 'components'

const mapStateToProps = state => ({
  items: genericSelector.getItems(state)
})

const mapDispatchToProps = dispatch => ({
  getRequest: ({ url, store }) => dispatch(genericReducer.actions.getRequest({ url, store }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
