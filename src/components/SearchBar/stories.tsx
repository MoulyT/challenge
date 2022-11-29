import type { Meta, Story } from '@storybook/react'
import { Filter } from './types'

import { SearchBar } from '.'

export default {
  component: SearchBar,
  title: 'Component/SearchBar',
} as Meta

const Template: Story<Filter> = (args) => <SearchBar {...args} />

export const Default = Template.bind({})
Default.args = {}
