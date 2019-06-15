import React from 'react'

import {
  TabItemContainer,
  TabItemWrapper,
  TabItemImage,
  TabItemContent,
  ItemTag,
  ItemTitle,
  ItemInfo,
  ItemButton,
  ItemPrice
} from './TabContent.styled'
import lession from '../../assets/lesson.svg'
import clock from '../../assets/clock.svg'

const TabItem = (props) => (
  <TabItemContainer>
    <TabItemWrapper>
      <TabItemImage src={props.image} alt={props.alt} />
      <TabItemContent>
        <ItemTag>{props.itemTag}</ItemTag>
        {
          props.price && (
            <ItemPrice>
              <svg width="24" height="5" viewBox="0 0 24 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="5" fill="#DC5935"/>
              </svg>
              <div id="price">
                {props.price}
              </div>
            </ItemPrice>
          )
        }
        <ItemTitle>{props.itemTitle}</ItemTitle>
        <ItemInfo>
          <div id="path">
            <img src={lession} alt="lesson icon" />
            <div id="des">{props.lession}</div>
          </div>
          <div id="path">
            <img src={clock} alt="clock icon" />
            <div id="des">{props.time}</div>
          </div>
        </ItemInfo>
        <ItemButton>
          {props.button}
        </ItemButton>
      </TabItemContent>
    </TabItemWrapper>
  </TabItemContainer>
)

export default TabItem