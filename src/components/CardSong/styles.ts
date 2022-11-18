import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Img = styled.img`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 12px;
`

export const TextContainer = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
`

export const SongTittle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p<{ $variant?: string }>`
  font-size: 0.875rem;
  line-height: 143%;
  ${({ $variant }) => {
    switch ($variant) {
      case 'artist':
        return css`
          font-weight: 500;
        `

      case 'song-duration':
        return css`
          line-height: 100%;
        `
      default:
        break
    }
  }};
`

export const ButtonContainer = styled.div`
  display: flex;
`

export const PlayButton = styled.button`
  background-color: transparent;
  border: none;
`
