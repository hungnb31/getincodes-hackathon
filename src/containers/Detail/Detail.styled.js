import styled from 'styled-components'

import detailBg from '../../assets/images/detailBg.png'

export const DetailContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  text-align: center;
`

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const DetailCourse = styled.div`
  width: 70%;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  height: 500px;
  box-sizing: border-box;
`

export const AuthorDetail = styled.div`
  width: 25%;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 25px 20px;
  #description {
    margin-top: 30px;
    font-size: 14px;
    padding: 0 20px;
    line-height: 20px;
    margin-bottom: 50px;
  }
  #title {
    font-size: 22px;
    font-weight: bold;
  }
  #avatar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }
    div {
      color: #DC5935;
      text-decoration: underline;
    }
    margin-top: 30px;
  }
`


export const Title = styled.h1`
  font-size: 40px;
`

export const CourseHeader = styled.div`
  background-image: url(${detailBg});
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  padding: 20px;
  #header {
    font-size: 30px;
    font-weight: bold;
  }
  #author {
    margin-top: 10px;
    font-size: 16px;
    font-weight: bold;
  }
  #description {
    margin-top: 15px;
    font-size: 13px;
  }
  #control {
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    button {
      padding: 10px 15px;
      background-color: #DC5935;
      font-size: 15px;
      color: white;
      margin-top: 20px;
      &:focus {
        outline: none;
      }
      &:hover {
        cursor: pointer;
      }
    }
    .sub-button {
      color: #DC5935;
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      margin-left: 20px;
    }
  }
`

export const CourseContent = styled.div`
  margin-top: 50px;
`