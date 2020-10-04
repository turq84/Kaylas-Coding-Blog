import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const deviceMin = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
}

export const deviceMax = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
}

export const Container = styled.div`
  position: relative;
  margin: 0px auto;

  @media (min-width: 1400px) {
    width: 1170px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 990px) {
    width: 900px;
  }

  @media (max-width: 990px) {
    padding: 0px 45px;
  }

  @media (max-width: 575px) {
    padding: 0px 25px;
  }
`
export const HeaderContainer = styled.div`
  position: relative;
  z-index: 99999;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  padding: 30px 75px;
  transition: all 0.25s ease-in-out 0s;

  @media (max-width: 575px) {
    display: block;
    width: 100%;
    padding: 30px;
    text-align: center;
  }
`

export const HeaderUl = styled.ul`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: auto;
`
export const HeaderLi = styled.li`
  margin: 0px 20px;
  list-style: none;
  text-decoration: none;

  &:first-child {
    margin-left: 0px;
  }

  &:last-child {
    margin-right: 0px;
  }

  @media (max-width: 575px) {
    margin: 0px 10px;
  }
`

export const ImageContainer = styled.div`
  width: 270px;
  height: 270px;
  flex-shrink: 0;
  padding: 30px;
  border-radius: 50%;
  margin: 0px auto;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(237, 237, 237);
  border-image: initial;

  .gatsby-image-wrapper {
    width: 210px;
    height: 210px;

    @media (max-width: 990px) {
      width: 170px;
      height: 170px;
      margin-bottom: 20px;
      padding: 20px;
    }
  }

  @media (max-width: 990px) {
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
    padding: 20px;
  }
  @media (max-width: 990px) {
    width: 220px;
    height: 220px;
    margin-bottom: 25px;
    padding: 25px;
  }
`

export const Img = styled(Image)`
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 20px;
  border-radius: 50%;
`
export const IntroContainer = styled.div`
  padding-left: 30px;

  @media (max-width: 575px) {
    padding-left: 0px;
  }
`
export const IntroTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  font-family: Poppins, sans-serif;
  color: rgb(41, 41, 41);
  margin-bottom: 20px;

  @media (max-width: 575px) {
    font-size: 22px;
  }

  @media (max-width: 990px) {
    font-size: 26px;
    margin-bottom: 15px;
  }
`

export const SocialProfileContainer = styled.ul`
  display: inline-flex;
`

export const SocialProfileItem = styled.li`
  position: relative;
  margin-right: 20px;
  list-style: none;

  &:last-child {
    margin-right: 0px;
  }
`
export const Name = styled.span`
  font-weight: bold;
`
export const P = styled.p`
  font-size: 15px;
  line-height: 2;
`

export const LogoContainer = styled(Link)`
  box-shadow: none;
`
export const Logo = styled.h3`
  display: inline-block;
  margin-top: 0px;
  color: rgb(209, 0, 104);
  font-family: "Lobster", cursive;
`

export const Nav = styled.div`
  display: inline-block;
`
export const NavLink = styled(Link)`
  box-shadow: none;
`

export const LatestStories = styled.div`
  color: rgb(41, 41, 41);
  font-size: 16px;
  font-weight: 500;
  font-family: "Fira Sans", sans-serif;
  letter-spacing: 0.17em;
  position: relative;
  margin-bottom: 30px;
  display: inline-block;

  &::after {
    content: "";
    width: 68px;
    height: 1px;
    display: block;
    margin-top: 8px;
    background: rgb(41, 41, 41);
  }
`
export const PostCardContainer = styled.div`
  position: relative;

  @media (max-width: 575px) {
    margin-bottom: 60px;
  }

  @media (max-width: 990px) {
    margin-bottom: 90px;
  }
`

export const PostCard = styled(Link)`
  display: flex;
  margin-bottom: 110px;
  box-shadow: none;

  @media (max-width: 575px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`

export const PostDateAndPreview = styled.div`
  position: relative;
  margin-right: 45px;
  flex-shrink: 0;
  height: 170px;
  width: 170px;
  overflow: hidden;

  @media (max-width: 575px) {
    height: auto;
    width: auto;
  }

  @media (max-width: 990px) {
    margin-right: 25px;
  }
  @media (max-width: 1200px) {
    margin-right: 35px;
  }
`
export const PostDate = styled.div`
  font-size: 90px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  height: 100%;
  line-height: 1;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(41, 41, 41);
  transition: all 0.35s ease-in-out 0s;

  @media (max-width: 575px) {
    display: none;
  }

  @media (max-width: 990px) {
    font-size: 56px;
  }
  @media (max-width: 1200px) {
    font-size: 70px;
  }
`
export const Month = styled.span`
  font-size: 13px;
  font-weight: 400;
  display: block;
  margin-top: 12px;
  text-transform: uppercase;
`

export const PostPreview = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  transform: translateY(-100%);
  transition: all 0.35s ease-in-out 0s;

  @media (max-width: 575px) {
    margin-bottom: 30px;
    width: auto;
    height: auto;
    position: relative;
    transform: translateY(0px);
  }

  @media (max-width: 1024px) {
    transform: translateY(0px);
  }
`

export const imgPost = styled(Image)`
  position: relative;
  overflow: hidden;
`

export const PostContent = styled.div`
  align-self: center;
`

export const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center;
  align-items: center;
  margin-bottom: 15px;
`
export const Tags = styled(Link)`
  display: inline-block;
  margin-right: 30px;
  font-size: 14px;
  font-weight: 400;
  color: var(--pink);
  box-shadow: none;
`

export const PostTitle = styled.h2`
  font-size: 21px;
  font-weight: 700;
  color: rgb(41, 41, 41);
  line-height: 1.53;
  margin-bottom: 10px;
  font-family: "Fira Sans", sans-serif;
  margin-top: 0px;

  @media (max-width: 575px) {
    font-size: 17px;
    margin-bottom: 10px;
  }

  @media (max-width: 990px) {
    font-size: 19px;
    margin-bottom: 12px;
  }
  @media (max-width: 1200px) {
    font-size: 21px;
  }
`

export const Excerpt = styled.p`
  font-size: 15px;
  color: rgb(41, 41, 41);
  font-weight: 400;
  line-height: 2;
  margin-bottom: 0px;

  @media (max-width: 990px) {
    font-size: 14px;
  }
`

export const ReadMore = styled.div`
  margin-top: 16px;
`
export const ReadMoreLink = styled(Link)`
  font-size: 13px;
  font-weight: bold;
  color: rgb(41, 41, 41);
  transition: all 0.15s ease-in-out 0s;
  box-shadow: none;

  &:hover {
    padding: 10px 15px;
    border: 1px solid;
    border-radius: 5px;
  }
`

export const NotFoundContent = styled.div`
  max-width: 35%;
  padding-right: 100px;
  flex: 0 0 35%;
  display: inline-block;

  @media (max-width: 575px) {
    max-width: 100%;
    padding-right: 0px;
    order: 1;
    flex: 0 0 100%;
  }
  @media (max-width: 990px) {
    max-width: 55%;
    padding-right: 50px;
    flex: 0 0 55%;
  }
  @media (max-width: 1400px) {
    max-width: 45%;
    flex: 0 0 45%;
  }
`
export const NotFoundImage = styled.div`
  max-width: 65%;
  padding-left: 10px;
  flex: 0 0 65%;
  display: inline-block;

  @media (max-width: 575px) {
    max-width: 100%;
    margin-bottom: 50px;
    flex: 0 0 100%;
  }
  @media (max-width: 990px) {
    max-width: 45%;
    flex: 0 0 45%;
  }
  @media (max-width: 1400px) {
    max-width: 55%;
    flex: 0 0 55%;
  }
`
export const Four0FourImage = styled(Image)`
  .gatsby-image-wrapper {
    position: relative;
    overflow: hidden;
  }
`
export const NotFoundContainer = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0px auto;
  padding: 120px 0px 0px;

  @media (max-width: 575px) {
    padding: 60px 25px 0px;
  }
  @media (max-width: 990px) {
    padding: 80px 45px 0px;
  }

  @media (min-width: 1400px) {
    width: 1170px;
  }
  @media (min-width: 1200px) {
    width: 1050px;
  }
  @media (min-width: 990px) {
    width: 900px;
  }
`
export const Four0FourH1 = styled.h1`
  display: block;
  font-size: 24px;
  font-weight: bold;
`
export const AllTags = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  font-family: "Fira Sans", sans-serif;
  letter-spacing: 0.17em;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
