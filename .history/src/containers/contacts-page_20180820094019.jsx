import React from "react";
import PageHeading from "../components/page-heading";
import ContactsSection from "../components/contacts-section";
const ContactsPage = props => {
  // console.log(props);
  return (
    <React.Fragment>
      <PageHeading
        heading={props.heading}
        subheading={props.subheading}
        colors={props.colors}
      />
      <ContactsSection {...props} />
    </React.Fragment>
  );
};

export default ContactsPage;
