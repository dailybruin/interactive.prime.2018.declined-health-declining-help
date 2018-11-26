import * as React from 'react'
import { css } from 'emotion'
// import Carousel from 're-carousel'
// import { render } from 'react-dom'

interface Slider2Props {
  text: string[]
}

interface Slider2State {
  currentIndex: number
  hidden: boolean
}

export default class Slider2 extends React.Component<
  Slider2Props,
  Slider2State
> {
  state = { currentIndex: 0, hidden: false }
  incCount = () => {
    this.setState(() => {
      return { hidden: true }
    })
    setTimeout(() => {
      this.setState(ps => {
        return { currentIndex: ps.currentIndex + 1 }
      })
      this.setState(() => {
        return { hidden: false }
      })
    }, 1000)
  }

  render() {
    console.log(this.state)
    if (this.state.currentIndex === this.props.text.length)
      return (
        <div
          className={css`
            width: 0;
            height: 0;
            opacity: 0;
            display: none;
          `}
        />
      )
    return (
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
          color: white;
          position: absolute;
          padding: 10px;
          text-align: center;
          height: 100%;
          width: 100%;
        `}
        onClick={this.incCount}
      >
        <div
          className={
            this.state.hidden
              ? css`
                  animation: fadeout 1.5s;
                  @keyframes fadeout {
                    from {
                      opacity: 1;
                    }
                    to {
                      opacity: 0;
                    }
                  }
                `
              : css`
                  animation: fadein 1.5s;
                  @keyframes fadein {
                    from {
                      opacity: 0;
                    }
                    to {
                      opacity: 1;
                    }
                  }
                `
          }
        >
          <h2>{this.props.text[this.state.currentIndex]}</h2>
          {this.state.currentIndex === 0 && (
            <p
              className={css`
                font-size: 14px;
              `}
            >
              Click to continue
            </p>
          )}
        </div>
      </div>
    )
  }
}
