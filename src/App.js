// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <h1>hello</h1>
//   );
// }

// export default App;


import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { MyAppHomePage } from "./landVerificationOfficer/MyAppHomePage";
import { ViewCustomerPage } from "./landVerificationOfficer/ViewCustomerPage";
import { DocsVerificationPage } from "./landVerificationOfficer/DocsVerificationPage";
import {StatusPage } from "./landVerificationOfficer/StatusPage";

import {ApproveOrChangeStatusPage } from "./admin/ApproveOrChangeStatusPage";

function App() {
  return (
    <Router>
      {/** Common Navigation Bar */}
      {/** d-flex justify-content-between  */}
      <div className="bg-dark text-light p-4 mb-2 d-flex justify-content-between">
        <Link to="/home">
          <h3 className="text-light">Home</h3>
        </Link>
        <Link to="/explore">
          <h3 className="text-light">View Customer</h3>
        </Link>
        <Link to="/notification">
          <h3 className="text-light">Docs. Verification</h3>
        </Link>
        <Link to="/message">
          <h3 className="text-light">Status</h3>
        </Link>


        <Link to="/changestatus">
          <h3 className="text-light">ChangeStatus</h3>
        </Link>
       
      </div>

      <Route exact path="/" component={MyAppHomePage} />
      <Route exact path="/home" component={MyAppHomePage} />
      <Route exact path="/explore" component={ViewCustomerPage} />
      <Route exact path="/notification" component={DocsVerificationPage} />
      <Route exact path="/message" component={StatusPage} />

      <Route exact path="/changestatus" component={ApproveOrChangeStatusPage} /> 
    </Router>
  );
}

export default App;