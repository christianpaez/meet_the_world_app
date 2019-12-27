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

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter.js"; 
import CountriesComponent from "./CountriesComponent";

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
          <CountriesComponent />
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default MainPage;
