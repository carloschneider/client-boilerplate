import { withNextRouter } from 'storybook-addon-next-router';

import GlobalStyles from '../src/styles/global'

export const decorators = [
  withNextRouter(),
  Story => {
    const value = {
      theme: 'dark',
      setTheme: () => null
    }

    return (
      <>
        <GlobalStyles />
        <Story />
      </>
    )
  }
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
