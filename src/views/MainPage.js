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
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter.js";

function MainPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <MainNavbar />
      <div className="main">
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Country Searcher</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={'https://restcountries.eu/data/afg.svg'}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Afghanistan</CardTitle>
                        <h6 className="card-category">Capital City: Kabul</h6>
                        <h6 className="card-category">Continent: Asia</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Languages: PS, UZ, TK
                    </p>
                    <p className="card-description text-center">
                      Currencies: AFN
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn  btn-success"
                      onClick={e => e.preventDefault()}
                    >
                      Check Details
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={'https://restcountries.eu/data/afg.svg'}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Afghanistan</CardTitle>
                        <h6 className="card-category">Capital City: Kabul</h6>
                        <h6 className="card-category">Continent: Asia</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Languages: PS, UZ, TK
                    </p>
                    <p className="card-description text-center">
                      Currencies: AFN
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn  btn-success"
                      onClick={e => e.preventDefault()}
                    >
                      Check Details
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={'https://restcountries.eu/data/afg.svg'}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Afghanistan</CardTitle>
                        <h6 className="card-category">Capital City: Kabul</h6>
                        <h6 className="card-category">Continent: Asia</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Languages: PS, UZ, TK
                    </p>
                    <p className="card-description text-center">
                      Currencies: AFN
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn  btn-success"
                      onClick={e => e.preventDefault()}
                    >
                      Check Details
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            
             </Row>
          </Container>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default MainPage;
