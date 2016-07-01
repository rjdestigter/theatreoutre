import React from 'react'
import Transmit from 'react-transmit'
import { colours } from '../theme'
import styles from "isomorphic-style!css?modules!sass!./clip.scss"
import withStyles from "isomorphic-style-loader/lib/withStyles";
import _ from 'lodash'

class Background extends React.Component {

  constructor () {
    super()
    this.state = {
      mouseMove: false,
      coordinates: [],
      clipStyle: {},
    }

    this.onClick = _.once(this.onClick.bind(this))
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  componentDidMount () {
    this.setState({
      mouseMove: true,
      clipStyle: {
        WebkitClipPath: 'circle(100px at center)',
      },
    })
  }

  onMouseMove ({pageX, pageY}) {
    this.setState({
      coordinates: [pageX, pageY],
      clipStyle: {
        WebkitClipPath: `circle(100px at ${pageX}px ${pageY}px)`,
      },
    })
  }

  onClick () {
    console.log('Clicked')
    const [pageX, pageY] = this.state.coordinates

    this.setState({
      mouseMove: false,
      coordinates: [],
      clipStyle: {
        transition: '-webkit-clip-path 0.8s ease-in-out',
        WebkitClipPath: `circle(5000px at ${pageX}px ${pageY}px)`,
      },
    })
  }

  render () {
    const { clipStyle, mouseMove } = this.state

    return (
      <div
        className={styles.clip}
        style={clipStyle}
        onMouseMove={mouseMove ? this.onMouseMove : null}
        onClick={this.onClick}
      >
        <h1>Hello Theatre 2</h1>
      </div>
    )
  }
}

export default withStyles(Background, styles)
