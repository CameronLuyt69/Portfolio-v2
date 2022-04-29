import React, { Component } from "react";
import {SectionsContainer, Section} from 'react-fullpage';

class Testimonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function (
        testimonials
      ) {
        return (
          <li className="client-testimonial" key={testimonials.user}>
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        );
      });
    }

    return (
      <section id="testimonials" className="section">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Testimonials</span>
              </h1>
            </div>

            <div className="nine columns flex-container">
              <ul className="slides">{testimonials}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
