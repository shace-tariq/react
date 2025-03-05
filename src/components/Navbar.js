
import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link active" to="/about">
                {props.aboutText}
              </Link> */}
            </li>
          </ul>

          {/* Enable Dark Mode */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } mx-2`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              DarkMode
            </label>
          </div>

          {/* Search Button */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string };

// import React from 'react'
// import PropTypes from 'prop-types'


// export default function Navbar(props) {

//     return (
//         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
//             <div className="container-fluid">
//                 <link className="navbar-brand" to="/">{props.title}</link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">

//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <link className="nav-link active" /* aria-current="page" */ to="/">Home</link>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" /* aria-current="page" */ to="/">{props.AboutText}</a>
//                             </li>
    
//                         </ul>
//                         {/* <form className="d-flex">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success" type="submit">Search</button>
//                         </form> */}
//                         <div  textColor='white'  class={`form-check form-switch ${props.mode === 'light' ? 'dark' : 'light'}`}>
//                             <input class="form-check-input" type="checkbox" onClick ={props.toggleMode} id="flexSwitchCheckChecked"  />
//                                 <label className="nav-link active" for="flexSwitchCheckChecked">enable darkMode</label>
//                         </div>
//                     </div>
//                 </div>
    
//             </nav>
//         )
//     }
//     Navbar.prototypes = { Text: PropTypes.string, AboutText: PropTypes.string }
//         // < div classname = {`form-check form-switch text- ${props.mode === 'light' ? 'dark' : 'light'} `}>
//         //                         <input classname ="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
//         //                         <label classname ="form-check-label" htmlfor="flexSwitchCheckDefault">Enable darkMode</label>
//         //                     </ >
