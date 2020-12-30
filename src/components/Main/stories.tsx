import { Story, Meta } from '@storybook/react'

import Main, { MainProps } from '.'

export default {
  title: 'Main',
  component: Main,
} as Meta

const Template: Story<MainProps> = (args) => <Main {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Nice',
}
