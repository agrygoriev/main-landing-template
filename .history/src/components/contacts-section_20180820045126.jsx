import React from "react";

const ContactsSection = props => {
  // console.log(props);
  return (
    <div className="pix_section pix-padding" id="contacts_section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12 col-sm-6 column ui-droppable">
            <div className="pix-content">
              <h2
                style={{
                  color: props.colors.secondary,
                  fontWeight: 700,
                  fontSize: "2em"
                }}
              >
                {props.contacts.ouraddress}
              </h2>
              <p className="pix-black-gray-light big-text pix-padding-bottom-20">
                <span className="pix_edit_text">
                  {props.contacts.street}
                  {props.contacts.city} {props.contacts.postcode}
                  {props.contacts.country}
                  <br />
                </span>
              </p>
              <div className="embed-responsive embed-responsive-4by3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.834391098569!2d144.9540724152082!3d-37.81734787975174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd240e2b7%3A0x471dcf081469ca6a!2s114+King+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sus!4v1532638013656"
                  title="Address on map"
                  width="600"
                  height="450"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xs-12 col-sm-6 column ui-droppable">
            <div className="pix-content pix-radius-3">
              <h2
                style={{
                  color: props.colors.secondary,
                  fontWeight: 700,
                  fontSize: "2em"
                }}
              >
                {props.contacts.getintouch}
              </h2>
              <p className="pix-black-gray-light big-text pix-padding-bottom-20">
                <span className="pix_edit_text">
                  {props.contacts.responsible}
                </span>
              </p>
              <form className="pix-form-style pixfort-form ui-sortable">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control pix-darkblue-transparent"
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control pix-darkblue-transparent"
                    placeholder="Enter Your Email Address"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control pix-darkblue-transparent"
                    name="message"
                    rows="5"
                    placeholder="Enter Your Message Here..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg small-text btn-block"
                  style={{
                    backgroundColor: props.colors.tertiary,
                    color: props.colors.primary
                  }}
                >
                  <strong>{props.contacts.sendbtn}</strong>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsSection;
