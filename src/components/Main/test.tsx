import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should be render the component', () => {
    const { container } = render(<Main title="Hello world" />)

    expect(
      screen.getByRole('heading', { name: /hello world/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
