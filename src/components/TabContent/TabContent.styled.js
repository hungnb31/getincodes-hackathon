import styled from 'styled-components'

export const TabItemContainer = styled.div`
  
`

export const TabItemWrapper = styled.div`
  box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.05);
  max-width: 330px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: .4s;
  :hover {
    transform: scale(1.05);
  }
  :hover img {
    filter: grayscale(50%);
  }
`

export const TabItemImage = styled.img`
  width: 330px;
  transition: .3s;
`

export const ItemTag = styled.div`
  color: #838383;
  font-size: 13px;
`

export const ItemButton = styled.button`
  background-color: #DC5935;
  margin-top: 20px;
  padding: 10px 0;
  font-size: 15px;
  color: white;
  width: 100%;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

export const ItemTitle = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: black;
  :hover {
    text-decoration: underline;
  }
`

export const TabItemContent = styled.div`
  padding: 20px;
  max-width: 330px;
  text-align: left;
`

export const ItemInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  #path {
    display: flex;
    flex-direction: row;
    #des {
      margin-left: 10px;
      font-size: 12px;
      color: black;
    }
  }
`

export const ItemPrice = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  #price {
    margin-left: 8px;
    font-weight: bold;
    color: #38C9BD;
    font-size: 20px;
  }
`

export const TabContainer = styled.div`
  
`

export const TabWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`