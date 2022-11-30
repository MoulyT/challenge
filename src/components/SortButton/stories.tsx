import type { Meta, Story } from '@storybook/react'
import { SortButton } from '.'

export default {
  component: SortButton,
  title: 'Component/SortButton',
} as Meta

const Template: Story = () => <SortButton handleChange={() => console.log('holi')} />

export const Default = Template.bind({})
