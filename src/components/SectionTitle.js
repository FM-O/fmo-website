import React from 'react'
import PropTypes from 'prop-types'

export const SectionTitle = ({ content, className, subtitle }) => (
  <div className={className}>
    <h1 dangerouslySetInnerHTML={{ __html: content }}></h1>
    {subtitle && subtitle.length > 0 &&
      <h2 dangerouslySetInnerHTML={{ __html: subtitle }}></h2>
    }
  </div>
)

SectionTitle.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
  subtitle: PropTypes.bool
}

export default SectionTitle
