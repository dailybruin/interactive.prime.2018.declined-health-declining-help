import * as React from 'react'
import { Player, BigPlayButton, ControlBar } from 'video-react'
import { css } from 'react-emotion'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
library.add(faPlay)
library.add(faPause)
library.add(faVolumeMute)
library.add(faVolumeUp)

import 'video-react/dist/video-react.css'

interface VideoOnClickState {
  video: boolean
  mute: boolean
}

interface VideoOnClickProps {
  videoURL: string
  imageURL: string
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
        {this.state.video && (
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
              `}
            >
              <div onClick={this.toggle} className={css`margin: 20px`}>
                <FontAwesomeIcon icon="pause" />
              </div>
            </div>
            <div
              onClick={this.toggleMuted}
              className={css`
                position: absolute;
                bottom: 0;
                right: 0;
                z-index: 100;
                color: white;
              `}
            >
              <div className={css`margin: 20px`}>
                {this.state.mute ? (
                  <FontAwesomeIcon icon="volume-up" />
                ) : (
                  <FontAwesomeIcon icon="volume-mute" />
                )}
              </div>
            </div>
            <Player
              playsInline
              autoPlay
              poster="/assets/poster.png"
              muted={this.state.mute}
              src={this.props.videoURL}
            >
              <BigPlayButton position="center" />
              <ControlBar disableCompletely className="my-class" />
            </Player>
          </div>
        )}
        {!this.state.video && (
          <div
            className={css`
              position: relative;
              filter: none;
              -webkit-filter: grayscale(100%);
              -moz-filter: grayscale(100%);
              -ms-filter: grayscale(100%);
              -o-filter: grayscale(100%);
              transition: 0.2s;
              &:hover {
                filter: none;
                -webkit-filter: grayscale(0%);
                -moz-filter: grayscale(0%);
                -ms-filter: grayscale(0%);
                -o-filter: grayscale(0%);
                cursor: pointer;
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
              `}
            >
              <div onClick={this.toggle} className={css`margin: 20px`}>
                <FontAwesomeIcon icon="play" />
              </div>
            </div>
            <img src={this.props.imageURL} />
          </div>
        )}
      </div>
    )
  }
}

export default VideoOnClick
