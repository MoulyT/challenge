import { Container } from './styles'

import { PlayerInfo } from '../PlayerInfo'
import { PlayerButtons } from '../PlayerButtons'

import myReactiveSongs from '../../graphql/variables/songs'

export const Player = () => {
  return (
    <Container>
      <PlayerInfo />
      <PlayerButtons />
    </Container>
  )
}
