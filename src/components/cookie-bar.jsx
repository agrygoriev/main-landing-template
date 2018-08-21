import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";

class CookieBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backdrop: false,
      className: "bottom-modal-footer"
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    if (localStorage.getItem("cookiebar")) {
      this.setState({
        pressed: true,
        modal: false
      });
    } else {
      this.setState({
        pressed: false,
        modal: true
      });
    }
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    localStorage.setItem("cookiebar", true);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.state.className}
          backdrop={this.state.backdrop}
        >
          <ModalBody>
            <div className="row">
              <div className="col-md-10 col-xs-10 col-sm-10 column ui-droppable">
                We use cookies and web analysis software to give you the best
                possible experience on our website. By continuing to browse this
                website, you consent for these tools to be used. For more
                details and how to opt out of these, please read our{" "}
                <a href="/privacy"> Privacy policy</a>.
              </div>
              <div className="col-md-2 col-xs-2 col-sm-2 column ui-droppable">
                <Button color="secondary" onClick={this.toggle}>
                  I agree!
                </Button>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CookieBar;
