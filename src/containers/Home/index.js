import React from 'react'
import { Tabs } from 'antd'
import 'antd/lib/tabs/style/index.css'
import styled from 'styled-components'

import {
  HomeContainer,
  Title,
  PathTitle
} from './Home.styled'
import TabContent from '../../components/TabContent'
import image1 from '../../assets/images/tab-1.png'
import image2 from '../../assets/images/tab-2.png'
import image3 from '../../assets/images/tab-3.png'
import nodejs from '../../assets/images/nodejs.jpg'
import reactjs from '../../assets/images/reactjs.jpg'
import graphql from '../../assets/images/graphql.png'

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

const firstContent = [
  {
    image: image1,
    alt:'image 1',
    itemTag:'Adventure Sports',
    itemTitle:'Fear of driving and automatic negative thoughts',
    lession:'12 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Continue'
  },
  {
    image: image2,
    alt:'image 2',
    itemTag:'Sales and Operations',
    itemTitle:'Work more, Earn more while sitting at your home',
    lession:'23 Lession',
    time:'5 Hours 30 Minutes',
    button: 'Continue'
  },
  {
    image: image3,
    alt:'image 3',
    itemTag:'Marketting',
    itemTitle:'Foundation course to understand about software',
    lession:'21 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Continue'
  }
]

const secondContent = [
  {
    image: image1,
    alt:'image 1',
    price: '$500',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'Fear of driving and automatic negative thoughts',
    lession:'12 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Apply Now'
  },
  {
    image: image2,
    alt:'image 2',
    price: '$1000',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'Work more, Earn more while sitting at your home',
    lession:'23 Lession',
    time:'5 Hours 30 Minutes',
    button: 'Apply Now'
  },
  {
    image: image3,
    alt:'image 3',
    price: '$200',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'Foundation course to understand about software',
    lession:'21 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Apply Now'
  }
]

const nodejsContent = [
  {
    image: nodejs,
    alt:'image 1',
    price: '$500',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'NodeJS Beginner',
    lession:'12 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Apply Now'
  },
  {
    image: nodejs,
    alt:'image 2',
    price: '$500',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'NodeJS Immediate',
    lession:'23 Lession',
    time:'5 Hours 30 Minutes',
    button: 'Apply Now'
  },
  {
    image: nodejs,
    alt:'image 3',
    price: '$700',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'NodeJS Advanced',
    lession:'21 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Apply Now'
  }
]

const reactjsContent = [
  {
    image: reactjs,
    alt:'image 1',
    price: '$500',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'ReactJS Beginner',
    lession:'12 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Apply Now'
  },
  {
    image: reactjs,
    alt:'image 2',
    price: '$500',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'ReactJS Immediate',
    lession:'23 Lession',
    time:'5 Hours 30 Minutes',
    button: 'Apply Now'
  },
  {
    image: reactjs,
    alt:'image 3',
    price: '$700',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'ReactJS Advanced',
    lession:'21 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Apply Now'
  }
]

const graphqlContent = [
  {
    image: graphql,
    alt:'image 1',
    price: '$500',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'GraphQL Beginner',
    lession:'12 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Apply Now'
  },
  {
    image: graphql,
    alt:'image 2',
    price: '$500',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'GraphQL Immediate',
    lession:'23 Lession',
    time:'5 Hours 30 Minutes',
    button: 'Apply Now'
  },
  {
    image: graphql,
    alt:'image 3',
    price: '$700',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'GraphQL Advanced',
    lession:'21 Lession',
    time:'3 Hours 30 Minutes',
    button: 'Apply Now'
  }
]

const Home = () => (
  <HomeContainer>
    <Title>Courses</Title>
    <CustomTabs defaultActiveKey="1">
      <TabPane tab="Your Courses" key="1">
        <TabContent content={firstContent} />
      </TabPane>
      <TabPane tab="Feature Courses" key="2">
        <TabContent content={secondContent} />
      </TabPane>
      <TabPane tab="Learning Path" key="3">
        <PathTitle>Mastering Node.JS</PathTitle>
        <TabContent content={nodejsContent} />
        <PathTitle>Mastering React.JS</PathTitle>
        <TabContent content={reactjsContent} />
        <PathTitle>Mastering GraphQL</PathTitle>
        <TabContent content={graphqlContent} />
      </TabPane>
    </CustomTabs>
  </HomeContainer>
)

export default Home;