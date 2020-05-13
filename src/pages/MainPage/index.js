import { connect } from 'react-redux'
import { generic as genericSelector } from 'selectors'
import { generic as genericReducer } from 'reducers'
import { Home } from 'components'

const mapStateToProps = state => ({
  items: genericSelector.getItems(state)
})

const mapDispatchToProps = dispatch => ({
  postRequest: ({ data, store }) => dispatch(genericReducer.actions.postRequest({ data, store }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
