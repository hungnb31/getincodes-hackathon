import React from 'react';

import { ProfileContainer } from './Profile.styled'
import avatar from '../../assets/images/user-avatar.png'

const Profile = () => (
  <ProfileContainer>
    <div id="head">
      <img src={avatar} alt="user avatar" />
      <div id="name">Greyson Drake</div>
    </div>
  </ProfileContainer>
)

export default Profile;
