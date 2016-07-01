import React from 'react'
import { Router, Route } from 'react-router'

import TheatreOutre from './Site'
import Main from './Main'
/**
 * The React Router routes for both the server and the client.
 */
module.exports = (
  <Router>
    <Route path='/' component={TheatreOutre} />
  </Router>
)
