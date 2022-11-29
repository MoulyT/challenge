import type { Meta, Story } from '@storybook/react'

import { Navbar } from './index'

export default {
  component: Navbar,
  title: 'Component/Navbar',
} as Meta

const Template: Story = () => <Navbar />

export const Default = Template.bind({})
