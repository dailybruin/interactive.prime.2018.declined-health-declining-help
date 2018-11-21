import * as React from 'react'
import { css } from 'emotion'
import Carousel from 're-carousel'

const Slider2 = props => {
  {
    console.log('ENTERED SLIDER 2')
  }
  const frames = props.textArray.map((text, i) => {
    return (
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
          height: 100%;
          color: white;
        `}
      >
        {text}
      </div>
    )
  })
  return (
    <div
      className={css`
        position: absolute;
        height: 100%;
        width: 100%;
      `}
    >
      <Carousel frames={frames} />
    </div>
  )
}

export default Slider2
