import type { Meta, Story } from '@storybook/react'
import { Separator } from './index'

export default {
  component: Separator,
  title: 'Component/Separator',
} as Meta

const Template: Story = () => <Separator />

export const Default = Template.bind({})
