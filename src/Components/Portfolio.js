import React, { Component } from 'react';
import {SectionsContainer, Section, Slide} from 'react-fullpage';

import { Swiper, SwiperSlide } from 'swiper/react';
class Portfolio extends Component {
  
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return (
          <SwiperSlide key={projects.image}>
          <div key={projects.image} className="slide columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h3>{projects.title}</h3>
                  <p>{projects.category}</p>
                  <div className="meta-buttons">
                    {projects.url && (
                      <a
                        href={projects.url}
                        title={projects.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button name="code" className="view-code-btn">
                          View Code
                        </button>
                      </a>
                    )}
                    {projects.demo && (
                      <a
                        href={projects.demo}
                        title={projects.title}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button name="demo" className="view-demo-btn">
                          View Demo
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
        );
      })
    }

    return (
      <section id="portfolio" className='section'>

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out My Projects</h1>

            <div id="portfolio-wrapper" className="cf">
              <Swiper spaceBetween={30} slidesPerView={'auto'}>
                {projects}
                </Swiper>
            </div>

          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
