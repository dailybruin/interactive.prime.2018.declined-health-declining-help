import * as React from 'react'
import { Player, BigPlayButton, ControlBar } from 'video-react'
import { css } from 'react-emotion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faPause,
  faVolumeMute,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons'
library.add(faPlay)
library.add(faPause)
library.add(faVolumeMute)
library.add(faVolumeUp)
import 'video-react/dist/video-react.css'

import DebbieVideo from '../../images/debbie.mp4'
import DonovanVideo from '../../images/donovan.mp4'
import MarkVideo from '../../images/mark.mp4'

interface VideoOnClickState {
  video: boolean
  mute: boolean
}
interface VideoOnClickProps {
  alt: string
  caption: string
  credit: string
  img: string
  vid: string
}

const getVid = (vidString: string) => {
  if (vidString == 'prime.homelessness.vid.debbie.1080p.mov') return DebbieVideo
  if (vidString == 'prime.homelessness.vid.donovan.1080p.mov')
    return DonovanVideo
  if (vidString == 'prime.homelessness.vid.mark.1080p.mov') return MarkVideo
}

class VideoOnClick extends React.Component<
  VideoOnClickProps,
  VideoOnClickState
> {
  state = {
    video: false,
    mute: false,
  }
  toggleMuted = () => {
    this.setState(prevState => ({ mute: !prevState.mute }))
  }
  toggle = () => {
    this.setState(prevState => ({ video: !prevState.video }))
  }
  render() {
    console.log(this.props)
    return (
      <div
        className={css`
          max-width: 100%;
          object-fit: contain;
        `}
      >
        {this.state.video ? (
          <div
            className={css`
              position: relative;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0;
                right: 0;
                z-index: 100;
                color: white;
                cursor: pointer;
              `}
            >
              <div
                onClick={this.toggle}
                className={css`
                  margin: 20px;
                `}
              >
                <FontAwesomeIcon icon="pause" />
              </div>
            </div>
            <div
              onClick={this.toggleMuted}
              className={css`
                position: absolute;
                cursor: pointer;
                bottom: 0;
                right: 0;
                z-index: 100;
                color: white;
              `}
            >
              <div
                className={css`
                  margin: 20px;
                `}
              >
                {this.state.mute ? (
                  <FontAwesomeIcon icon="volume-mute" />
                ) : (
                  <FontAwesomeIcon icon="volume-up" />
                )}
              </div>
            </div>
            <div
              className={css`
                pointer-events: none;
                margin-bottom: 10px;
              `}
            >
              <Player
                playsInline
                autoPlay
                poster="/assets/poster.png"
                muted={this.state.mute}
                controls={false}
              >
                <source src={getVid(this.props.vid)} type="video/mp4" />
                <BigPlayButton position="center" />
                <ControlBar disableCompletely className="my-class" />
              </Player>
            </div>
          </div>
        ) : (
          <div
            className={css`
              position: relative;
              filter: grayscale(100%);
              transition: 0.3s;
              &:hover {
                filter: none;
              }
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0;
                right: 0;
                z-index: 100;
                color: white;
                cursor: pointer;
              `}
            >
              <div
                onClick={this.toggle}
                className={css`
                  margin: 20px;
                `}
              >
                <FontAwesomeIcon icon="play" />
              </div>
            </div>
            <figure>
              <img src={this.props.img} alt={this.props.alt} />
              <figcaption>
                {this.props.caption} ({this.props.credit})
              </figcaption>
            </figure>
          </div>
        )}
      </div>
    )
  }
}
export default VideoOnClick
