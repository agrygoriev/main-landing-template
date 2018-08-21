import React from "react";
import PageHeading from "../components/page-heading";
import ContactsSection from "../components/contacts-section";
const ContactsPage = props => {
  console.log(props);
  return (
    <div className="blog-page-wrapper">
      <PageHeading
        heading={props.heading}
        subheading={props.subheading}
        colors={props.colors}
      />
      <ContactsSection {...props} />
    </div>
  );
};

export default ContactsPage;
