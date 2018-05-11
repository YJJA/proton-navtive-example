import React from 'react'
import { render, App, Window } from 'proton-native'

const Home = require('./Home').default

class Hot extends React.Component {
  state = { Home }

  componentDidMount () {
    module.hot.accept('./Home', () => {
      const Home = require('./Home').default
      this.setState({Home})
    })
  }

  render () {
    const {Home} = this.state
    return (
      <App>
        <Window title="这是一个标题" size={{w: 500, h: 500}}>
          <Home />
        </Window>
      </App>
    )
  }
}

render(<Hot />)
