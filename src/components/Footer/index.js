import React from 'react'

import logo from '../../assets/logo.svg'
import social from '../../assets/social.svg'
import {
  FooterContainer,
  FooterWrapper,
  FooterDescription,
  FooterColumn,
  FooterHeader,
  FooterItem,
  FooterSocial
} from './Footer.styled'

const Footer = () => (
  <FooterContainer>
    <FooterWrapper>
      <FooterColumn>
        <img src={logo} alt="logo" />
        <FooterDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo nibh, laoreet eget ex a, imperdiet scelerisque nulla.
        </FooterDescription>
        <FooterDescription>
          Vivamus metus neque, egestas a placerat a, aliquam quis est.
        </FooterDescription>
      </FooterColumn>
      <FooterColumn>
        <FooterHeader>Quick Links</FooterHeader>
        <FooterItem>Features</FooterItem>
        <FooterItem>Pricing</FooterItem>
        <FooterItem>Courses</FooterItem>
        <FooterItem>Testimonial</FooterItem>
        <FooterItem>News</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeader>Courses</FooterHeader>
        <FooterItem>UX/UI Guide</FooterItem>
        <FooterItem>Typography</FooterItem>
        <FooterItem>Interface Design</FooterItem>
        <FooterItem>Minimal Design</FooterItem>
        <FooterItem>Ecommerce</FooterItem>
        <FooterItem>Nature Products</FooterItem>
      </FooterColumn>
      <FooterColumn>
        <FooterHeader>Contact</FooterHeader>
        <FooterDescription>
          Feel free to contact us
        </FooterDescription>
        <FooterDescription>
          +123.456789
          <br />
          getincodes@hackathon.com
        </FooterDescription>
        <FooterSocial src={social} alt="social icon" />
      </FooterColumn>
    </FooterWrapper>
  </FooterContainer>
)

export default Footer;