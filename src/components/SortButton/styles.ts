import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1024px;
`

export const SubTittle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
`

export const Form = styled.form`
  padding: 8px 10px;

  height: fit-content;

  background-color: ${({ theme }) => theme.colors.grayScale50};

  border-radius: 6px;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary};
`

export const DropDown = styled.select`
  background-color: ${({ theme }) => theme.colors.grayScale50};
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  /* Remove the blue highlight */
  &:focus {
    outline: none;
  }
`
export const DropDownItem = styled.option``
