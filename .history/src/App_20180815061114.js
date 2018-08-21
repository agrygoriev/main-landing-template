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
const LangContext = React.createContext("en");
// const { Provider, Consumer } = Context;
const lang = {
  en: "en",
  de: "de",
  es: "es"
};
class LangProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: lang.en,
      changeLang: this.changeLang
    };
    this.changeLang = () => {
      this.setState(({ lang }) => ({
        lang: lang === lang.en ? lang.de : lang.en
      }));
    };
  }
  render() {
    return (
      <LangContext.Provider
        value={{
          state: this.state
        }}
      >
        {this.props.children}
      </LangContext.Provider>
    );
  }
}
const LangConsumer = LangContext.Consumer;
const WholeConsumer = {children} => {
    <LangConsumer>
      {lang => {
        {children}
      }}
    </LangConsumer>
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
      <LangProvider>
        <BrowserRouter>
          <header className="navigation">
          <LangConsumer>
            {lang => 
            
            <NavigationBar lang={lang} logo={logo} colors={colors} />
            }
          </LangConsumer>
          </header>
          <MainSection contacts={contacts} colors={colors} />
          <FooterBlock
            heading={footerInfo.en.heading}
            copyright={footerInfo.en.copyright}
            street={contacts.street}
            city={contacts.city}
            postcode={contacts.postcode}
            country={contacts.country}
            textprivacy={footerInfo.en.textprivacy}
            textterms={footerInfo.en.textterms}
            logo={logo}
            colors={colors}
          />
        </BrowserRouter>
      </LangProvider>
    );
  }
}

export default App;
