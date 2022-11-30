import type { Meta, Story } from '@storybook/react'

import { SearchBar } from '.'

export default {
  component: SearchBar,
  title: 'Component/SearchBar',
  argTypes: {
    input: { control: 'text' },
  },
} as Meta

const Template: Story = () => (
  <SearchBar
    input={''}
    handleChange={function (): void {
      console.log('holi')
    }}
  />
)

export const Default = Template.bind({})
Default.args = {
  input: 'Search by title, genre...',
}
