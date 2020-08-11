import React, { Component } from "react";

class Contact extends Component {
   constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
         status: ""
      };
   }


   render() {

      if(this.props.data){
         var name = this.props.data.name;
         var street = this.props.data.address.street;
         var province = this.props.data.address.province;
         var zip = this.props.data.address.zip;
         var phone= this.props.data.phone;
         var email = this.props.data.email;
      }

      return (
         <section id="contact">

            <div className="row section-head">

               <div className="two columns">
                  <h6> </h6>
               </div>

               <div className="ten columns">

                  <h1>Get In Touch.</h1>

               </div>

            </div>

            <div className="row">
               <div className="eight columns">

                  <form onSubmit={this.submitForm} action="https://formspree.io/mrgyyaqo" method="POST" >
                  <fieldset>

                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} required/>
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="email" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange} required/>
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="5" id="contactMessage" name="contactMessage"></textarea>
                     </div>

                     <div>
                        <button className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
                  </form>

               <div id="message-warning">Error</div>
				      <div id="message-success">
                     <i className="fa fa-check"></i>Message sent, thank you!<br />
				   </div>

            </div>

               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Contact Details</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {province}<br />
                        {zip}<br />
                        {phone}<br />
                        {email}
                     </p>
                  </div>
               </aside>
            </div>
         </section>
      );
   }
   submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
         if (xhr.readyState !== XMLHttpRequest.DONE) return;
         if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
         } else {
            this.setState({ status: "ERROR" });
         }
      };
      xhr.send(data);
   } 
}

export default Contact;