import React from 'react'

import {
  NavigationWrapper, BackButton, NextButton
} from './Navigation.styled'

const Navigation = () => (
  <NavigationWrapper>
    <BackButton>
      <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.875 11.8489L16.2166 17.5073L21.875 23.1656C22.4437 23.7343 22.4437 24.6531 21.875 25.2218C21.3062 25.7906 20.3875 25.7906 19.8187 25.2218L13.1249 18.5281C12.5562 17.9594 12.5562 17.0406 13.1249 16.4719L19.8187 9.7781C20.0912 9.50503 20.4611 9.35156 20.8468 9.35156C21.2326 9.35156 21.6025 9.50503 21.875 9.7781C22.4291 10.3469 22.4437 11.2802 21.875 11.8489Z" fill="silver"/>
      </svg>
    </BackButton>
    <NextButton>
      <svg width="25" height="25" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.125 23.1511L18.7834 17.4927L13.125 11.8344C12.5563 11.2657 12.5563 10.3469 13.125 9.77815C13.6938 9.2094 14.6125 9.2094 15.1813 9.77815L21.8751 16.4719C22.4438 17.0406 22.4438 17.9594 21.8751 18.5281L15.1813 25.2219C14.9088 25.495 14.5389 25.6484 14.1532 25.6484C13.7674 25.6484 13.3975 25.495 13.125 25.2219C12.5709 24.6531 12.5563 23.7198 13.125 23.1511Z" fill="white"/>
      </svg>
    </NextButton>
  </NavigationWrapper>
)

export default Navigation