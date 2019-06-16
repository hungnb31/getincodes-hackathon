import styled from 'styled-components'

export const ProfileContainer = styled.div`
  #head {
    width: 400px;
    height: 500px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 150px;
      height: 150px;
      margin-top: 30px;
    }

    #name {
      font-weight: bold;
      font-size: 23px;
    }
  }
`