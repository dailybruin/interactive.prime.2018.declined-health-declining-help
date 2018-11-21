import * as React from 'react'
import { css } from 'emotion'
import Carousel from 're-carousel'
import { render } from 'react-dom'

export default class Slider2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ['Test1', '', 'Karl', '', 'Richard', '', 'Mindi', ''],
      currentIndex: 0,
    }
  }

  goToNextSlide = e => {
    const rando = this.state.currentIndex
    e.preventDefault()
    setTimeout(() => {
      this.setState({
        currentIndex: rando + 1,
      })
      setTimeout(() => {
        this.setState({
          currentIndex: rando + 2,
        })
      }, 250)
    }, 250)
  }

  render() {
    return (
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
          height: 100%;
          color: white;
          position: relative;
        `}
        onClick={this.goToNextSlide}
      >
        {this.state.text[this.state.currentIndex]}
      </div>
    )
  }
}
