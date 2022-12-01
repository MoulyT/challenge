import { Meta, Story } from '@storybook/react'
import { FavButton } from '.'

export default {
  component: FavButton,
  title: 'Component/FavButton',
  argTypes: { isFav: { control: 'boolean' } },
} as Meta

const Template: Story = ({ isFav, ...rest }) => {
  return <FavButton songId={0} handleFav={() => console.log('hola')} isFav={isFav} {...rest} />
}
export const Default = Template.bind({})

Default.args = {
  isFav: false,
}
