import { Meta, Story } from '@storybook/react'
import { CardSong } from '.'
import { SongTypes } from './types'

export default {
  component: CardSong,
  title: 'Component/CardSong',
} as Meta

const song = {
  id: 565,
  image: '',
  name: 'hola que tal',
  author: {
    name: 'Mouly',
    id: 3,
    description: 'bla blablabalab',
  },
  description: 'bla blablabalab',
  genre: 'ROCK',
  audio: {
    id: 1,
    url: '',
  },
}

const Template: Story<SongTypes> = () => <CardSong song={song} />

export const Default = Template.bind({})
