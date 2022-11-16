import styled, { css } from 'styled-components'

export const CardSong = styled.div`
  display: flex;
`

export const TextContainer = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`

export const SongTittle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`

const handleVariant = variant:string => {
    switch (variant:string) {
        case 'artist':
            return "font-weight=500"
            break;
        case 'song-duration':
            return "line-height=100%"
            break;
    
        default:
            break;
    }
}

export const Text = styled.p<{ $variant: string }> `
  font-size: 0.875rem;
  line-height: 143%;
  ${({ $variant }) => handleVariant};
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const PlayButton = styled.button`
  background-color: transparent;
  border: none;
`
