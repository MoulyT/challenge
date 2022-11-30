import { Meta, Story } from '@storybook/react'
import { CardLoading } from '.'

export default {
  component: CardLoading,
  title: 'Component/CardLoading',
}

const Template: Story = () => <CardLoading />

export const Default = Template.bind({})
