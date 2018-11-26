import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, CoverPhoto, Footer, Head } from '@dailybruin/lux'
import Slider2 from '../components/SlideShowClicker2'
import { css } from 'emotion'

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
    <div>
      <Slider2
        text={[
          'Miss Mary’s health had been declining for a couple of months, but now it was worse.',
          'Her legs were badly swollen and she couldn’t stand up on her own. ',
          'Seven minutes later, paramedics arrived.',
          'They asked her if she wanted to be taken to the hospital.',
          'Miss Mary declined politely.',
          'They asked how she was going to walk.',
          '“I’m fine,” she said.',
        ]}
      />
      <p>hello world</p>
    </div>
  </>
)

export default IndexPage
