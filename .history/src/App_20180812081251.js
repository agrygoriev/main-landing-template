import React, { Component, Provider } from "react";
import convert from "color-convert";
import logo from "./assets/img/logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/pix_style.css";
import "./App.css";

import colors from "./content/colors.json";
import contacts from "./content/contacts.json";
import NavigationBar from "./containers/nav-bar";
import FooterBlock from "./containers/footer";
import MainSection from "./containers/main-section";

class ContextProvider extends Provider {
  state = {};
}

class App extends Component {
  render() {
    const hex2RgbColor = color => convert.hex.rgb(color);
    colors.primaryRgb = hex2RgbColor(colors.primary);
    colors.secondaryRgb = hex2RgbColor(colors.secondary);
    colors.tertiaryRgb = hex2RgbColor(colors.tertiary);
    return (
      <BrowserRouter>
        <div>
          <header className="navigation">
            <NavigationBar logo={logo} colors={colors} />
          </header>
          <MainSection contacts={contacts} colors={colors} />
          <FooterBlock
            heading="Contact Us"
            copyright="Copyright © 2018 BomShow. All Rights Reserved"
            street={contacts.street}
            city={contacts.city}
            postcode={contacts.postcode}
            country={contacts.country}
            textprivacy="Privacy Policy"
            textterms="Terms &amp; Conditions"
            logo={logo}
            colors={colors}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
