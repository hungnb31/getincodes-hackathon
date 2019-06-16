import React from 'react'
import { Icon } from 'antd'

import { ProfileContainer, ProfileWrapper } from './Profile.styled'
import avatar from '../../assets/images/user-avatar.png'
import social from '../../assets/social.svg'
import badge from '../../assets/badge.svg'
import TabContent from '../../components/TabContent'
import image1 from '../../assets/images/tab-1.png'
import image2 from '../../assets/images/tab-2.png'

const secondContent = [
  {
    image: image1,
    alt:'image 1',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'Fear of driving and automatic negative thoughts',
    lession:'12 Lession',
    time:'3 Hours 30 Minutes',
  },
  {
    image: image2,
    alt:'image 2',
    itemTag:'Teacher - Mandol pk',
    itemTitle:'Work more, Earn more while sitting at your home',
    lession:'23 Lession',
    time:'5 Hours 30 Minutes',
  }
]

const Profile = () => (
  <ProfileContainer>
    <h1 id="pagetitle">Your Profile</h1>
    <ProfileWrapper>
      <div id="head">
        <img id="avatar" src={avatar} alt="user avatar" />
        <div id="name">
          Greyson Drake&nbsp;&nbsp;
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.7087 5.63125C21.0987 6.02125 21.0987 6.65125 20.7087 7.04125L18.8787 8.87125L15.1287 5.12125L16.9587 3.29125C17.1456 3.104 17.3992 2.99876 17.6637 2.99876C17.9283 2.99876 18.1819 3.104 18.3687 3.29125L20.7087 5.63125ZM2.99875 20.5012V17.4613C2.99875 17.3212 3.04875 17.2013 3.14875 17.1012L14.0587 6.19125L17.8087 9.94125L6.88875 20.8512C6.79875 20.9513 6.66875 21.0012 6.53875 21.0012H3.49875C3.21875 21.0012 2.99875 20.7812 2.99875 20.5012Z" fill="#DC5935"/>
          </svg>
        </div>
        <div id="done">
          <div id="result">
            <div className="sub-title">Courses Learn</div>
            <div className="result-count">35</div>
          </div>
          <div id="result">
            <div className="sub-title">Point</div>
            <div className="result-count">3.500 <Icon type="crown" /></div>
          </div>
        </div>
        <div id="bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id cursus ligula. Cras efficitur sit amet libero sed faucibus. Morbi sed ornare eros. Praesent venenatis nec metus vitae lobortis.
        </div>
        <img id="social" src={social} alt="social icon" />
      </div>
      <div id="right">
        <div id="badges">
          <div className="title">Badges</div>
          <div id="list-badge">
            {
              Array.from({ length: 22 }).map((item) => ( <img id="badge-icon" key={item} src={badge} alt="badge" /> ))
            }
            <button id="seemore">See All</button>
          </div>
        </div>
        <div id="finished-courses">
          <div className="title">Finished Courses</div>
          <TabContent content={secondContent} />
        </div>
      </div>
    </ProfileWrapper>
  </ProfileContainer>
)

export default Profile;
