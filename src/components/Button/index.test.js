import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './index'
import { BrowserRouter as Router } from 'react-router-dom'

const MOCK_SUBMIT_BUTTON = jest.fn()

describe('Test for button', () => {
  test('should not allowed click button disabled', () => {
    const { container } = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
  })

  test('check render loading', () => {
    const { container } = render(<Button isLoading></Button>)

    expect(screen.getByText(/Loading/)).toBeInTheDocument()
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('check onclick button', () => {
    render(<Button type='button' className='isPrimary' onClick={MOCK_SUBMIT_BUTTON}></Button>)

    const submitBtn = screen.getByTestId('submit-button')
    userEvent.click(submitBtn)

    expect(MOCK_SUBMIT_BUTTON).toHaveBeenCalled()
  })

  test('check button primary', () => {
    const { container } = render(<Button isPrimary></Button>)

    expect(container.querySelector('button.btn-primary')).toBeInTheDocument()
  })

  test('check button large', () => {
    const { container } = render(<Button isLarge></Button>)

    expect(container.querySelector('button.btn-lg')).toBeInTheDocument()
  })

  test('check button small', () => {
    const { container } = render(<Button isSmall></Button>)

    expect(container.querySelector('button.btn-sm')).toBeInTheDocument()
  })

  test('check button block', () => {
    const { container } = render(<Button isBlock></Button>)

    expect(container.querySelector('button.btn-block')).toBeInTheDocument()
  })

  test('check button custom', () => {
    const { container } = render(<Button isCustom></Button>)

    expect(container.querySelector('button.custom-btn')).toBeInTheDocument()
  })
})

describe('Test for Link', () => {
  test('should render link component', () => {
    const { container } = render(
      <Router>
        <Button type='link' href=''></Button>
      </Router>
    )

    expect(container.querySelector('a')).toBeInTheDocument()
  })

  it('should render <a> tag', () => {
    const { container } = render(<Button type='link' href='' isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument()
  })
})
