import styled, { css } from 'styled-components/macro'
import { SongText } from './types'

export const InfoContainer = styled.div`
  display: flex;
  column-gap: 1rem;

  align-items: center;
`
export const Heart = styled.img`
  width: 20px;
  height: 20px;

  margin-right: 4px;
`

export const AlbumImg = styled.img`
  width: 48px;
  aspect-ratio: 1/1;
  border-radius: 12px;
`
export const AlbumInfo = styled.div``

export const Text = styled.p<{ $variant: SongText }>`
  ${({ $variant }) => {
    switch ($variant) {
      case 'song-name':
        return css`
          font-size: 0.875rem;
          line-height: 1.25rem;
          color: white;
        `

      case 'artist':
        return css`
          font-size: 0.75rem;
          line-height: 0.75rem;
          color: ${({ theme }) => theme.colors.navDottedLine};
        `
    }
  }}
`
