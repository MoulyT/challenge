import { Meta, Story } from '@storybook/react'
import { CardSong } from '.'
import { SongTypes } from './types'

export default {
  component: CardSong,
  title: 'Component/CardSong',
} as Meta

const song = {
  id: 2,
  image: '',
  name: 'Canción chuli',
  author: {
    name: 'Mouly',
    id: 2,
    description: 'Autor de música chuli',
  },
  description: 'canción súper chuli',
  genre: 'CHULI-STEP',
  audio: {
    id: 2,
    url: 'http://chuli.com',
  },
}

const Template: Story<SongTypes> = () => <CardSong song={song} />

export const Default = Template.bind({})
