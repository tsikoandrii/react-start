import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

import Container from '@layouts/Container'

const App = ({ children }) => (
  <div className="page">
    <Container>{children}</Container>
  </div>
)

App.propTypes = {
  children: {
    type: PropTypes.node,
  },
}

App.defaultProps = {
  children: '',
}

export default App
