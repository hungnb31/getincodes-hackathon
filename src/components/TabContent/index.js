import React from 'react'

import TabItem from './TabItem'
import { TabContainer, TabWrapper } from './TabContent.styled'
import Navigation from '../Navigation'

const TabContent = (props) => (
  <TabContainer>
    <TabWrapper>
      {
        props.content.map(item => {
          return (
            <TabItem
              key={item.alt}
              image={item.image}
              alt={item.alt}
              itemTag={item.itemTag}
              itemTitle={item.itemTitle}
              lession={item.lession}
              time={item.time}
              button={item.button}
              price={item.price}
            />
          )
        })
      }
    </TabWrapper>
    <Navigation />
  </TabContainer>
)

export default TabContent