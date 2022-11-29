import { Meta, Story } from '@storybook/react'
import { FavButton } from '.'

export default {
  component: FavButton,
  title: 'Component/FavButton',
} as Meta

const Template: Story = () => <FavButton />

export const Default = Template.bind({})
