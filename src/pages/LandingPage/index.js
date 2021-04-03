import React, { Component } from 'react'

import Header from 'components/Header'
import Hero from 'components/Hero'
import ProjectList from 'components/ProjectList'
import Experience from 'components/Experience'
import ContactMe from 'components/Contact'
import Footer from 'components/Footer'

import dataList from 'json/projectList.json'

class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero></Hero>
        <ProjectList data={dataList.projectListDetail}></ProjectList>
        <Experience></Experience>
        <ContactMe></ContactMe>
        <Footer></Footer>
      </>
    )
  }
}
export default LandingPage
