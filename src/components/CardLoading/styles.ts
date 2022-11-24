import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  column-gap: 1.25rem;
  max-width: 1024px;
  width: 100%;
  margin-bottom: 2rem;
`

export const Img = styled.img`
  width: 8.75rem;
  height: 8.75rem;
  border-radius: 12px;
  flex-shrink: 0;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.secondary};
  max-width: 38.25rem;
`

export const SongTittle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p<{ $variant?: 'artist' | 'song-duration' }>`
  font-size: 0.875rem;
  line-height: 143%;
  margin-bottom: 0.75rem;

  ${({ $variant }) => {
    switch ($variant) {
      case 'artist':
        return css`
          font-weight: 500;
          margin-bottom: 0.25rem;
        `

      case 'song-duration':
        return css`
          font-size: 0.75rem;
          line-height: 100%;
          margin-bottom: 0;
        `
      default:
        break
    }
  }};
`

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;
  margin-top: auto;
`

export const PlayButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`
export const Genre = styled.span`
  padding: 4px 8px;

  background-color: ${({ theme }) => theme.colors.musicGenreBackground};
  border-radius: 47px;

  font-size: 0.75rem;
`
