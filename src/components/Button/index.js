import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes as T } from 'prop-types'

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
  type: T.oneOf(['button', 'link']),
  onClick: T.func,
  className: T.string,
  target: T.string,
  isPrimary: T.bool,
  isSmall: T.bool,
  isLarge: T.bool,
  isBlock: T.bool,
  isCustom: T.bool,
  isDisabled: T.bool,
  isLoading: T.bool,
  isExternal: T.bool,
  href: T.string,
}

export default Button
