import React, { Component } from 'react'

import Header from 'components/Header'

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    )
  }
}
export default LandingPage
