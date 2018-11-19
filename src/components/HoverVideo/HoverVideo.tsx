import * as React from 'react'
import { Player, BigPlayButton, ControlBar } from 'video-react'
import { css } from 'react-emotion'
import IconButton from '@material-ui/core/IconButton'
import Pause from '@material-ui/icons/Pause'
import PlayArrow from '@material-ui/icons/PlayArrow'

import 'video-react/dist/video-react.css'

interface HoverVideoProps {
  imageURL: string
  videoURL: string
}

interface HoverVideoState {
  video: boolean
  mute: boolean
}

class HoverVideo extends React.Component<HoverVideoProps, HoverVideoState> {
  constructor(props, context) {
    super(props, context)
    this.state = {
      video: false,
      mute: false,
    }
  }

  setMuted(muted) {
    return () => {
      this.setState({ mute: muted })
    };
  }

  toggle = () => {
    this.setState(prevState => ({ video: !prevState.video }))
  }

  render() {
    console.log(this.props)
    return (
      <div
        className={css`
          height: 300px;
          width: 400px;
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
              <IconButton onClick={this.toggle}>
                <Pause
                  fontSize="small"
                  className={css`
                    color: white;
                  `}
                />
              </IconButton>
            </div>
            <div
              className={css`
                position: absolute;
                bottom: 0;
                right: 0;
                z-index: 100;
                color: white;
              `}
            >
              <IconButton onClick={this.setMuted(true)}>
                <Pause
                  fontSize="small"
                  className={css`
                    color: white;
                  `}
                />
              </IconButton>
            </div>
            <Player
              playsInline
              autoPlay
              poster="/assets/poster.png"
              mute={this.state.mute}
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
              <IconButton onClick={this.toggle}>
                <PlayArrow
                  fontSize="small"
                  className={css`
                    color: white;
                  `}
                />
              </IconButton>
            </div>
            <img src={this.props.imageURL} className={css``} />
          </div>
        )}
      </div>
    )
  }
}

export default HoverVideo
