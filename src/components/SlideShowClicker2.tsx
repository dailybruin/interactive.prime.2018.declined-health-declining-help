import * as React from 'react'
import { css } from 'react-emotion'
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
        return { currentIndex: ps.currentIndex + 1, hidden: false }
      })
    }, 750)
  }

  render() {
    return (
      <div
        className={
          this.state.currentIndex >= this.props.text.length
            ? css`
                animation: remove 2s;
                @keyframes remove {
                  from {
                    position: absolute;
                    background-color: #1d1a1a;
                    visibility: visible;
                    opacity: 1;
                    height: 100vh;
                    width: 100vw;
                  }
                  to {
                    visibility: hidden;
                    opacity: 0;
                  }
                }
              `
            : css`
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #1d1a1a;
                color: white;
                position: absolute;
                padding: 10px;
                text-align: center;
                height: 100%;
                width: 100%;
                z-index: 5;
              `
        }
        onClick={this.state.hidden ? () => {} : this.incCount}
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
          <h2
            className={css`
              margin: 0;
            `}
          >
            {this.props.text[this.state.currentIndex]}
          </h2>
          {this.state.currentIndex < this.props.text.length && (
            <p
              className={css`
                font-size: 14px;
                margin-top: 20px;
              `}
            >
              Click to continue
            </p>
          )}
        </div>
        <p
          onClick={() => {
            this.setState(() => {
              return { currentIndex: 100 }
            })
          }}
          className={css`
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            margin: 0;
            cursor: pointer;
          `}
        >
          SKIP
        </p>
      </div>
    )
  }
}
