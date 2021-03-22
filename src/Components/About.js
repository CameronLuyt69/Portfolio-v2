import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var province = this.props.data.address.province;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="nine columns main-col">
            <h2>About</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  {name}
                  <br />
                  {street}
                  <br />
                  {province}
                  <br />
                  {zip}
                  <br />
                  {phone}
                  <br />
                  {email}
                </p>
              </div>
              <div className="columns download"></div>
            </div>
          </div>
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Cameron Jude Luyt Profile Pic"
            />
            <p>
              <a href="CAMERON.docx" className="button">
                <i className="fa fa-download"></i> Download CV
              </a>
            </p>
            <div>
              <h2>Hobbies</h2>
              <div className="hobbies">
                <div>
                  <i className="fas fa-gamepad"></i> Gaming
                </div>
                <div>
                  <i className="fas fa-camera"></i> Photography
                </div>
                <div>
                  <i className="fas fa-headphones"></i> Music
                </div>
                <div>
                  <i className="fas fa-guitar"></i> Playing guitar
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
