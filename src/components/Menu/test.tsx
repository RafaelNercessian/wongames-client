import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import Menu from '.'

describe('<Menu />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Menu />)
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
  })
})
