import React, { Component } from "react";
import {SectionsContainer, Section} from 'react-fullpage';

class Footer extends Component {
  render() {
    if (this.props.data) {
      // var networks = this.props.data.social.map(function (network) {
      //   return (
      //     <li key={network.name}>
      //       <a href={network.url} target="_black">
      //         <i className={network.className}></i>
      //       </a>
      //     </li>
      //   );
      // });
    }

    return (
      <footer className="section">
        <div className="row">
          <div className="twelve columns">
            {/* <ul className="social-links">{networks}</ul> */}

            <ul className="copyright">
              <li>&copy; Copyright 2021 Cameron Jude Luyt</li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
