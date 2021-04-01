import React, { Component } from 'react'

import Header from 'components/Header'
import Hero from 'components/Hero'

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero></Hero>
      </>
    )
  }
}
export default LandingPage
