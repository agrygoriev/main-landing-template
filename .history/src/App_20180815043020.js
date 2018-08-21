import React, { Component } from "react";
import convert from "color-convert";
import logo from "./assets/img/logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/pix_style.css";
import "./App.css";

import colors from "./content/colors.json";
import contacts from "./content/contacts.json";
import footerInfo from "./content/footer.json";
import NavigationBar from "./containers/nav-bar";
import FooterBlock from "./containers/footer";
import MainSection from "./containers/main-section";
import lang from "./context";
const Context = React.createContext();
const { Provider, Consumer } = Context;

class LanguageProvider extends Provider {
  constructor(props) {
    super(props);
    this.changeLang = () => {
      this.setState(state => ({
        lang: state.lang === lang.en ? lang.de : lang.en
      }));
    };
    this.state = {
      lang: lang.en,
      changeLang: this.changeLang
    };
  }
  render() {
    return (
      <Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en"
    };
  }
  render() {
    const hex2RgbColor = color => convert.hex.rgb(color);
    colors.primaryRgb = hex2RgbColor(colors.primary);
    colors.secondaryRgb = hex2RgbColor(colors.secondary);
    colors.tertiaryRgb = hex2RgbColor(colors.tertiary);
    return (
      <LanguageProvider>
        <BrowserRouter>
          <header className="navigation">
            <NavigationBar logo={logo} colors={colors} />
          </header>
          <MainSection contacts={contacts} colors={colors} />
          <FooterBlock
            heading={footerInfo.en.heading}
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
        </BrowserRouter>
      </LanguageProvider>
    );
  }
}

export default App;
