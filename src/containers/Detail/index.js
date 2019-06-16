import React from 'react'
import { Tabs } from 'antd'
import 'antd/lib/tabs/style/index.css'
import styled from 'styled-components'

import {
  DetailContainer,
  DetailCourse,
  Title,
  CourseHeader,
  CourseContent,
  AuthorDetail,
  DetailWrapper
} from './Detail.styled'
import avatar from '../../assets/images/user-avatar.png'
import social from '../../assets/social.svg'

const { TabPane } = Tabs

const CustomTabs = styled(Tabs)`
  .ant-tabs-nav-scroll {
    display: flex;
  }
  .ant-tabs-nav {
    margin: 0 auto;
  }
  .ant-tabs-tab {
    padding: 15px 0;
    &:hover {
      color: #DC5935;
    }
  }
  .ant-tabs-tab-active {
    color: #DC5935;
    font-weight: bold;
  }
  .ant-tabs-tabpane {
    padding: 30px 0px;
  }
  .ant-tabs-ink-bar {
    background-color: #DC5935;
  }
`

const Detail = () => (
  <DetailContainer>
    <Title>Course Detail</Title>
    <DetailWrapper>
      <DetailCourse>
        <CourseHeader>
          <div id="header">Angular: The big picture</div>
          <div id="author">by John Cena</div>
          <div id="description">This course will teach you a high level view of Angular, to assist you in either understanding <br /> Angular better for your own development, or learning when to use Angular vs. other front end frameworks.</div>
          <div id="control">
            <button style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd" d="M12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22ZM11.86 15.14L14.65 12.35C14.84 12.16 14.84 11.84 14.64 11.64L11.85 8.85C11.54 8.53 11 8.75 11 9.2V14.79C11 15.24 11.54 15.46 11.86 15.14Z" fill="white" />
              </svg>&nbsp;
                Start Course
          </button>
            <button className="sub-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd" d="M5 1.10251H19C20.1 1.10251 21 2.00251 21 3.10251V16.0325C21 16.7225 20.65 17.3325 20.12 17.6925L12.56 22.7325C12.22 22.9525 11.79 22.9525 11.45 22.7325L3.88 17.6925C3.35 17.3325 3 16.7225 3 16.0325L3.01 3.10251C3.01 2.00251 3.9 1.10251 5 1.10251ZM10.71 15.3925L18.3 7.80251C18.69 7.41251 18.68 6.78251 18.29 6.39251C17.9 6.00251 17.27 6.00251 16.88 6.39251L10 13.2725L7.12 10.3925C6.73 10.0025 6.1 10.0025 5.71 10.3925C5.32 10.7825 5.32 11.4125 5.71 11.8025L9.3 15.3925C9.69 15.7825 10.32 15.7825 10.71 15.3925Z" fill="#DC5935" />
              </svg>&nbsp;
              Save
          </button>
            <button className="sub-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd" d="M20.71 4.04207C21.1 3.65211 21.1 3.02217 20.71 2.63221L18.37 0.292455C18.1832 0.105222 17.9295 0 17.665 0C17.4005 0 17.1468 0.105222 16.96 0.292455L15 2.25225L18.75 6.00186L20.71 4.04207ZM17.75 7.00176L14 3.25215L4.15 13.1011C4.05 13.2011 4 13.3211 4 13.4611V16.5008C4 16.7807 4.22 17.0007 4.5 17.0007H7.54C7.67 17.0007 7.8 16.9507 7.89 16.8507L17.75 7.00176ZM22 20.0004H2C0.9 20.0004 0 20.9003 0 22.0002C0 23.1001 0.9 24 2 24H22C23.1 24 24 23.1001 24 22.0002C24 20.9003 23.1 20.0004 22 20.0004Z" fill="#DC5935" />
              </svg>&nbsp;
              Do The Test
          </button>
            <button className="sub-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.5H16.59C17.48 9.5 17.92 10.58 17.29 11.21L12.7 15.8C12.31 16.19 11.68 16.19 11.29 15.8L6.7 11.21C6.07 10.58 6.52 9.5 7.41 9.5H9V4.5C9 3.95 9.45 3.5 10 3.5H14C14.55 3.5 15 3.95 15 4.5V9.5ZM6 20.5C5.45 20.5 5 20.05 5 19.5C5 18.95 5.45 18.5 6 18.5H18C18.55 18.5 19 18.95 19 19.5C19 20.05 18.55 20.5 18 20.5H6Z" fill="#DC5935" />
              </svg>
              &nbsp;
              Download Course
          </button>
          </div>
        </CourseHeader>
        <CourseContent>
          <CustomTabs defaultActiveKey="1">
            <TabPane tab="Table of contents" key="1">
              <h2>Table of Content</h2>
            </TabPane>
            <TabPane tab="Description" key="2">
            <h2>Description</h2>
            </TabPane>
            <TabPane tab="Q&A" key="3">
            <h2>Q&A</h2>
            </TabPane>
            <TabPane tab="Discussion" key="4">
            <h2>Discussion</h2>
            </TabPane>
          </CustomTabs>
        </CourseContent>
      </DetailCourse>
      <AuthorDetail>
        <div id="title">Course Author</div>
        <div id="avatar">
          <img src={avatar} alt="author avatar" />
          <div>John Cena</div>
        </div>
        <div id="description">John began his love of programming on an Apple III in BASIC. Although his preferred language is JavaScript, he has worked professionally with just about every major Microsoft language. He is...</div>
        <img src={social} alt="author social" />
    </AuthorDetail>
    </DetailWrapper>
  </DetailContainer>
)

export default Detail