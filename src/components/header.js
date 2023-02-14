import React from "react";
import {Link} from "react-router-dom"
import AddStudent from "../pages/AddStudent";

const Header = ({whichPage="homePage"}) => {
 var bgClass="bg-primary";
 if(whichPage==="AddStudent"){
  bgClass="bg-danger"
 }
 if(whichPage==="EditStudent"){
  bgClass="bg-success"
 }
  return (
    <div>
      <nav className={`navbar navbar-expand-sm navbar-dark ${bgClass}`}>
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            Student App
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Anasayfa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
