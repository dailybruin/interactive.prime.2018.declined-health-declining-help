import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, CoverPhoto, Footer, Head } from '@dailybruin/lux'
import Slider from '../components/SlideShowClicker'
import Slider2 from '../components/SlideShowClicker2'
import { css } from 'emotion'

import Slider3 from '../components/SlideShowClicker3'
export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <div
      className={css`
        position: absolute;
        height: 100%;
        width: 100%;
      `}
    >
      <Slider2 />
    </div>
  </>
)

export default IndexPage
