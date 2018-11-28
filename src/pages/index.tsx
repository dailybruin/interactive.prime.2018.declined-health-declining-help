import * as React from 'react'
import { graphql } from 'gatsby'
import { CoverPhoto, Footer, Head } from '@dailybruin/lux'
import Slider2 from '../components/SlideShowClicker2'
import { css } from 'react-emotion'
import CustomArticle from '../components/CustomArticle'
import VideoOnClick from '../components/VideoOnClick'

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
  <div
    className={css`
      height: 100vh;
      width: 100vw;
      img {
        margin-bottom: 0;
      }
    `}
  >
    <Head {...data.site.siteMetadata} />
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
    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://assets.dailybruin.com/images/interactive.prime.2018.teddy/web.prime.homelessness.ADX_2-22751bcd4955eeb69f5d100c928d85fb.JPG"
      xPosition="start"
      yPosition="center"
    />
    <VideoOnClick
      imageURL="https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
      videoURL="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    <div
      className={css`
        background-color: #1d1a1a;
        color: #ffffff;
        padding: 1rem;
        display: flex;
        width: 100%;
        justify-content: center;
      `}
    >
      <div
        className={css`
          max-width: 1000px;
        `}
      >
        <p>
          <strong>Donovan Wilkes </strong>
          was eating lunch in his office when two of his colleagues told him
          Miss Mary, an older homeless woman he had been checking on, wasn’t
          responsive.
        </p>
        <p>
          It was 11 a.m., two hours after Miss Mary usually woke up, packed her
          belongings and walked to Peet’s Coffee for her first cup of coffee of
          the day.
        </p>
        <p>
          “My heart dropped,” Wilkes said. “The only thing I was thinking was,
          ‘Go to her.’”
        </p>
      </div>
    </div>
    <CustomArticle
      dropcap={false}
      content={data.kerckhoffArticle.content}
      style={css`
        margin-top: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
      `}
    />
    <Footer
      developers={[
        'Nathan Smith',
        'Richard Yang',
        'Kevin Qian',
        'Mindi Cao',
        'Karl Huang',
        'Max Wu',
        'Megan Le',
      ]}
      copyrightYear={2018}
    />
  </div>
)

export default IndexPage
