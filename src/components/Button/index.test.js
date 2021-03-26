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

  // TODO: check click test
  it('check onclick button', () => {
    render(<Button type='button' className='isPrimary' onClick={MOCK_SUBMIT_BUTTON}></Button>)

    const submitBtn = screen.getByTestId('submit-button')
    userEvent.click(submitBtn)

    expect(MOCK_SUBMIT_BUTTON).toHaveBeenCalled()
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
