import { Meta, Story } from '@storybook/react'
import Explore from '.'

export default {
  component: Explore,
  title: 'Container/Explore',
} as Meta

const Template: Story = () => <Explore />

export const Default = Template.bind({})
