import * as React from 'react';
import { Link } from 'react-router-dom';


// creates component for Navigation Bar which will hold other components in the menu
const NavComponent: React.FC = () => {
    return (
        <div>
            {/* 
            1. navbar navbar-expand-lg navbar-light bg-light color-navbar - bootstrap class for designing the nav bar
            2. navbar-brand color - bootstrap class that formats the toggle menu icon in the navbar
            3. collapse nav-collapse - collapses the nav bar
            4. dropdown-menu - designs the dropdown menu
            5. dropdown-item - designs items that are within the dropdown menu
             */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light color-navbar">
              <Link to="/home" className="navbar-brand color">Expense Reimbursement System</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/submit-reimbursement" className="nav-link color">Submit Reimbursement</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle color" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      User Information
                    </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/get-user" className="dropdown-item">Get User Information</Link>
                    <Link to="/get-user-by-id" className="dropdown-item">Get User Information by ID</Link>
                    <Link to="/update-user" className="dropdown-item">Update User Information</Link>
                  </div>
                  </li>
                  <li className="nav-teim dropdown">
                    <a className="nav-link dropdown-toggle color" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Reimbursement Information
                    </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link to="/reimbursement-by-type" className="dropdown-item">Get Reimbursement By Author</Link>
                    <Link to="/reimbursement-by-status" className="dropdown-item">Get Reimbursement by Status</Link>
                    <Link to="/update-reimbursement" className="dropdown-item">Update Reimbursement Information </Link>
                  </div>
                </li>
              </ul>
          </div>
          <Link to="/login" className="btn btn-primary pull-right">Login</Link>
      </nav>
    </div>
    );
}

export default NavComponent;