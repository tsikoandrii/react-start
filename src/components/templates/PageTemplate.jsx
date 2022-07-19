import React from 'react'
import PropTypes from 'prop-types'
import Header from '@organisms/Header'

const PageTemplate = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.node,
}

export default PageTemplate
