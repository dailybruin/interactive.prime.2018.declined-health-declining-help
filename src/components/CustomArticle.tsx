import * as React from 'react'
import { css } from 'react-emotion'
import { Image } from '@dailybruin/lux'
import { PullQuote } from '@dailybruin/lux'
import VideoOnClick from './VideoOnClick'

enum ContentType {
  Text = 'text',
  Image = 'image',
  Line = 'line',
  ImgVid = 'imgvid',
  PullQuote = 'pull',
}

interface Content {
  type: string
  value: string
}

interface Text {
  value: string
}

/**
 * Article properties.
 */
interface ArticleProps {
  /** The paragraphs of content for the story. */
  content: Content[]
  dropcap: boolean
  /** custom css for the article component */
  style?: string
}

interface ImageProps {
  url: string
  caption: string
  credit: string
  alt: string
  /** Custom css for the image component */
  style?: string
}

interface PullQuoteProps {
  caption: string
  style?: string
}

interface VideoOnClickProps {
  alt: string
  caption: string
  credit: string
  img: string
  vid: string
}

/** A footer to go at the bottom of every page. */
export default class CustomArticle extends React.Component<ArticleProps> {
  public static defaultProps = { dropcap: false }

  public render() {
    console.log(this.props.content)
    const renderedContent = this.props.content.map(
      (content: any, i: number) => {
        switch (content.type) {
          case ContentType.Text:
            const text = content as Text
            return (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: text.value,
                }}
              />
            )
          case ContentType.Image:
            const image = JSON.parse(content.value) as ImageProps
            return <Image key={i} {...image} />
          case ContentType.PullQuote:
            const pullQuote = JSON.parse(content.value) as PullQuoteProps
            const pullQuoteStyle = css`
              display: flex;
              font-family: Averia Gruesa Libre;
              font-style: regular;
              font-size: 25px;
              line-height: 43px;
              padding: 0;
              border: none;
              float: right;
              width: 70%;
              @media screen and (max-width: 808px) {
                float: none;
                text-align: center;
                width: 100%;
              }
              margin: 10px -190px 24px 36px;
              position: relative;
              top: 5px;
            `
            return <PullQuote text={pullQuote.caption} style={pullQuoteStyle} />
          case ContentType.Line:
            return <hr />
          case ContentType.ImgVid:
            const imgVid = JSON.parse(content.value) as VideoOnClickProps
            return <VideoOnClick key={i} {...imgVid} />
          default:
            break
        }
      }
    )

    return (
      <article
        className={css`
          margin-left: auto;
          margin-right: auto;
          max-width: 600px;
          ${this.props.dropcap
            ? css`
                p:first-child:first-letter {
                  float: left;
                  font-size: 5em;
                  line-height: 60px;
                  padding-top: 4px;
                  padding-right: 8px;
                  padding-left: 3px;
                }
              `
            : ''};
          ${this.props.style};
        `}
      >
        {renderedContent}
      </article>
    )
  }
}
