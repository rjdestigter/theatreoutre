import React, { PropTypes } from 'react'
import InlineCss from 'react-inline-css'
import Transmit from 'react-transmit'
import reset from "isomorphic-style!css?modules!sass!reset.scss";
import githubApi from 'apis/github'
import Avatar from 'components/Avatar'
import favicon from 'favicon.ico'

const fetchStargazers = (page, perPage = 100) => githubApi.browse(
    ['repos', 'RickWong/react-isomorphic-starterkit', 'stargazers'],
    { query: { page, perPage } }
  ).then(json => (json || []).map(({ id, login }) => ({ id, login }))
  ).catch(error => {
    throw error
  })


/**
 * Main React application entry-point for both the server and client.
 */
class Main extends React.Component {

  static propTypes = {
    stargazers: PropTypes.array,
    additionalStargazers: PropTypes.array,
    transmit: PropTypes.any,
  }

  static defaultProps = {
    stargazers: [],
    additionalStargazers: [],
  }

  /**
   * <InlineCss> component allows you to write a CSS stylesheet for your component. Target
   * your component with `&` and its children with `& selectors`. Be specific.
   */
  static css (avatarSize) {
    return (`
      & .github {
        position: absolute;
        top: 0;
        right: 0;
        border: 0;
      }
      & {
        font-family: sans-serif;
        color: #0df;
        padding: 10px 30px 30px;
        width: 443px;
        margin: 10px auto;
        background: #222;
      }
    `)
  }

  /**
   * componentWillMount() runs on server and client.
   */
  componentWillMount () {
    if (__SERVER__) {
      console.log('Hello server')
      console.info(reset._getCss())
    }

    if (__CLIENT__) {
      console.log('Hello client')
    }
  }

  /**
   * componentDidUpdate() only runs on the client.
   */
  componentDidUpdate (prevProps, prevState) {
    debugger
    if (!this.props.additionalStargazers) {
      return
    }

    this.loadMoreStargazersOnClient()
  }

  /**
   * Load more stargazers.
   */
  loadMoreStargazersOnClient () {
    debugger
    const { additionalStargazers = [], transmit } = this.props
    let { nextPage, pagesToFetch } = transmit.variables

    if (--pagesToFetch <= 0) {
      return
    }

    ++nextPage

    transmit.forceFetch({
      nextPage,
      pagesToFetch,
      additionalStargazers,
    }, 'additionalStargazers')
  }

  getStarGazers () {
    let { stargazers = [], additionalStargazers } = this.props

    if (additionalStargazers) {
      return stargazers.concat(additionalStargazers)
    }

    return stargazers
  }

  /**
   * Runs on server and client.
   */
  render () {
    // const repositoryUrl = 'https://github.com/RickWong/react-isomorphic-starterkit'
    const avatarSize = 32
    // const avatarUrl     = (id) => `https://avatars.githubusercontent.com/u/${id}?v=3&s=${avatarSize}`

    return (
      <InlineCss stylesheet={Main.css(avatarSize)} namespace='Main'>
        <h1>
          <img src={favicon} alt='icon' />
          <br />React Isomorphic Starterkit. Let&apos;s get you started!
        </h1>
        <h3>All-You-Need Features</h3>
        <ul>
          <li>Fully automated toolchain with npm run scripts</li>
          <li>React 0.14 + React Router 2.0 on the client and server</li>
          <li>Babel 6 automatically compiles ES2015 + ES7 stage-0</li>
          <li>Webpack HMR for instant server updates</li>
          <li>React Transform HMR for instant client updates</li>
          <li>React Transmit to preload on server and hydrate client</li>
          <li>InlineCss-component for styling components</li>
        </ul>
        <p>
          In short: <em>an excellent choice</em>.
          Ready to start{'?'}
        </p>
        <h3>
          Open Community
          <iframe
            src='https://ghbtns.com/github-btn.html?user=RickWong&repo=react-isomorphic-starterkit&type=star&count=true'
            frameBorder='0' scrolling='0' width='110' height='20' style={{ float: 'right' }}
          />
        </h3>
        <p>
          <Avatar />
          {this.getStarGazers().map(user =>
            <Avatar key={user.id} user={user} />
          )}
          <Avatar />
        </p>
      </InlineCss>
    )
  }
}

if (__CLIENT__) {
  Main.childContextTypes = {
    insertCss: React.PropTypes.func,
  }

  Main.prototype.getChildContext = () => ({
    insertCss: (styles) => styles._insertCss(),
  })
}

/**
 * Use Transmit to query and return GitHub stargazers as a Promise.
 */
export default Transmit.createContainer(Main, {
  initialVariables: {
    nextPage: 2,
    pagesToFetch: 15,
    additionalStargazers: [],
  },
  fragments: {
    /**
     * Load first stargazers.
     */
    stargazers: () => fetchStargazers(1),
    /**
     * Load more stargazers deferred.
     */
    additionalStargazers: ({ nextPage, additionalStargazers }) => () => fetchStargazers(nextPage).then(
      newStargazers => {
        const starGazers = newStargazers.map(({ id, login }) => ({ id, login }))
        return additionalStargazers.concat(starGazers)
      }
    ),
  },
})
