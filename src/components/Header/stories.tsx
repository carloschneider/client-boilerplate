import { Story, Meta } from '@storybook/react/types-6-0'

import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header,
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {
  content: 'Header',
}
