import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Button = (props) => {
  const className = [props.className]
  if (props.isPrimary) {
    className.push('btn-primary')
  }
  if (props.isLarge) {
    className.push('btn-lg')
  }
  if (props.isSmall) {
    className.push('btn-sm')
  }
  if (props.isBlock) {
    className.push('btn-block')
  }
  if (props.isCustom) {
    className.push('custom-btn')
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={props.href} className={className.join(' ')} style={props.style} target={props.target === '_blank' ? '_blank' : undefined} ref={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
          {props.children}
        </a>
      )
    } else {
      return (
        <Link to={props.href} className={className.join(' ')} style={props.style}>
          {props.children}
        </Link>
      )
    }
  }

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) {
      className.push('disabled')
    }

    return (
      <span className={className.join(' ')} style={props.style}>
        {props.isLoading ? (
          <>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    )
  }

  return (
    <button data-testid='submit-button' className={className.join(' ')} style={props.style} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  type: PropTypes.oneOf(['button', 'link']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  target: PropTypes.string,
  isPrimary: PropTypes.bool,
  isSmall: PropTypes.bool,
  isLarge: PropTypes.bool,
  isBlock: PropTypes.bool,
  isCustom: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isExternal: PropTypes.bool,
  href: PropTypes.string,
}

export default Button
