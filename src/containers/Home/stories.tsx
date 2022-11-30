import type { Meta, Story } from '@storybook/react'
import Home from '.'

export default {
  component: Home,
  title: 'Container/Home',
} as Meta

const Template: Story = () => <Home />
export const Default = Template.bind({})
