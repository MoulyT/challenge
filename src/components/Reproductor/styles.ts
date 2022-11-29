import styled, { css } from 'styled-components/macro'
import { SongText } from './types'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 120px;
  width: 100vw;

  margin-bottom: -20px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 22px;
`
export const LeftContainer = styled.div`
  display: flex;
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
        `

      case 'artist':
        return css`
          font-size: 12px;
          line-height: 12px;
        `
    }
  }}
`

export const CenterContainer = styled.div`
  display: flex;
  column-gap: 21px;
`

export const RightContainer = styled.div``
