import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the component', () => {
    const { container } = render(<Header content="Header" />)
    const heading = screen.getByRole('heading', { name: /Header/i })

    expect(heading).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
