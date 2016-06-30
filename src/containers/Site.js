import React from 'react'
import Transmit from 'react-transmit'

class TheatreOutre extends React.Component {

  constructor () {
    super()
    this.state = {
      user: 1,
    }
  }

  render () {
    return (
      <h1>Hello World</h1>
    )
  }
}

export default Transmit.createContainer(TheatreOutre, {
  initialVariables: {},
  fragments: {},
})
