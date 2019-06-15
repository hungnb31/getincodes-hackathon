import styled from 'styled-components'

export const NavigationWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`

export const BackButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid silver;
  margin-right: 20px;
  &:focus {
    outline: none;
  }
  cursor: not-allowed;
`

export const NextButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #DC5935;
  &:focus {
    outline: none;
  }
  cursor: pointer;
`