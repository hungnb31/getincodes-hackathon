import styled from 'styled-components'

export const ProfileContainer = styled.div`
  margin-top: 100px;
  text-align: center;
  #bio {
    margin-top: 20px;
    color: #838383;
    line-height: 18px;
    font-size: 13px;
  }

  #right {
    width: 65%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  #finished-courses {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    padding: 30px 30px;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 50px;
  }

  #badges {
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    padding: 30px 30px;
    text-align: left;
    box-sizing: border-box;
    margin-bottom: 50px;
    #list-badge {
      margin-top: 25px;
      width: 100%;
      #badge-icon {
        margin-right: 15px;
        margin-bottom: 15px;
      }
      span {
        text-decoration: underline;
        color: #DC5935;
        margin-left: 20px;
      }
    }
  }

  #seemore {
    padding: 15px 25px;
    color: white;
    font-size: 15px;
    background-color: #DC5935;
    margin-top: 15px;
    &:focus {
      outline: none;
      cursor: pointer;
    }
  }

  .title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 50px;
  }

  #done {
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    #result {
      .sub-title {
        color: #838383;
        font-size: 15px;
        margin-bottom: 10px;
      }
      .result-count {
        font-size: 20px;
        color: #DC5935;
      }
    }
  }
  #pagetitle {
    font-size: 40px;
    margin-bottom: 50px;
  }
  #head {
    box-sizing: border-box;
    padding: 50px;
    width: 30%;
    max-height: fit-content;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;

    #social {
      margin-top: 30px;
    }

    #avatar {
      width: 150px;
      height: 150px;
    }

    #name {
      margin-top: 30px;
      font-weight: bold;
      font-size: 23px;
    }
  }
`

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`