import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, CoverPhoto, Footer, Head } from '@dailybruin/lux'
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
    <Head {...data.site.siteMetadata} />
    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition="start"
      yPosition="center"
    />
    <div
      className={css`
        background-color: #1d1a1a;
        color: #ffffff;
        padding: 1rem 3rem 1rem 3rem;
      `}
    >
      <p>
        <strong>Donovan Wilkes </strong>
        was eating lunch in his office when two of his colleagues told him Miss
        Mary, an older homeless woman he had been checking on, wasn’t
        responsive.
      </p>
      <p>
        It was 11 a.m., two hours after Miss Mary usually woke up, packed her
        belongings and walked to Peet’s Coffee for her first cup of coffee of
        the day.
      </p>
      <p>
        “My heart dropped,” Wilkes said. “The only thing I was thinking was, ‘Go
        to her.’”
      </p>
    </div>
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
  </>
)

export default IndexPage
