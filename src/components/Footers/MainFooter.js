/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function MainFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="credits mx-auto">
            <span className="text-dark"><b>
              © {new Date().getFullYear()} {" "}
              <i className="fa fa-globe" /> Christian Páez</b>
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default MainFooter;
