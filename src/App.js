import React, { Component } from "react";
import ReactGA from "react-ga";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import {SectionsContainer, Section} from 'react-fullpage';

import data from "./resumeData.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    fetch(data)
      .then((res) => JSON.parse(JSON.stringify(data)))
      .then((result) => {
        this.setState({
          resumeData: result,
        });
      });
  }

  componentDidMount() {
    this.getResumeData();
  }

  
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['section-1', 'section-2','section-3','section-4','section-5','section-6','section-7'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      arrowNavigation:      true
    };
    return (
      <div id="fullpage" className="App">
        <SectionsContainer {...options}>
          <Section className="section-1"><Header data={this.state.resumeData.main} /></Section>
          <Section className="section-2"><About data={this.state.resumeData.main} /></Section>
          <Section className="section-3"><Resume data={this.state.resumeData.resume} /></Section>
          <Section className="section-4"><Skills data={this.state.resumeData.resume} /></Section>
          <Section className="section-5"><Portfolio data={this.state.resumeData.portfolio} /></Section>
          <Section className="section-6"><Testimonials data={this.state.resumeData.testimonials} /></Section>
          <Section className="section-7"><Contact data={this.state.resumeData.main} /><Footer data={this.state.resumeData.main} /></Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
