import React, { Component } from "react";
import {SectionsContainer, Section} from 'react-fullpage';

class Skills extends Component {
  render() {
    if (this.props.data) {

      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name} className="skill-item">
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="Skills" className="section">

        <div className="skill">
          <div className="three header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className=" main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
