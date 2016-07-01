import React from 'react'
import Transmit from 'react-transmit'
import Background from 'components/Background'

class TheatreOutre extends React.Component {
  render () {
    return (
      <Background />
    )
  }
}

if (__CLIENT__) {
  TheatreOutre.childContextTypes = {
    insertCss: React.PropTypes.func,
  }

  TheatreOutre.prototype.getChildContext = () => ({
    insertCss: (styles) => styles._insertCss(),
  })
}

export default TheatreOutre
