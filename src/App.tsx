import React from 'react';
import './include/bootstrap';
import './App.css';
import {Switch, Route} from 'react-router';
import { HashRouter } from 'react-router-dom';
import NavComponent from './components/nav-component';
import LoginComponent from './components/page2-login-component';
import { GetUserComponent } from './components/page4-get-all-users-component';
import { GetUserByIdComponent } from './components/page9-get-user-by-id-component';
import { UpdateUserComponent } from './components/page5-update-user-component';
import { SubmitReimbursementComponent } from './components/page3-submit-reimbursement-component';
import { UpdateReimbursementComponent } from './components/page8-update-reimbursement-component';
import { HomeComponent } from './components/page1-home-component';
import { GetReimbursementByAuthorIdComponent } from './components/page6-get-reimbursement-by-authorid-component'
import {GetReimbursementByStatusComponent } from './components/page7-get-reimbursement-status-component';

const App: React.FC = () => {
  return (
    <HashRouter>
      <NavComponent/>
      <Switch>
        <Route path="/home" component={HomeComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/get-user" component={GetUserComponent} />
        <Route path="/get-user-by-id" component={GetUserByIdComponent} />
        <Route path="/update-user" component={UpdateUserComponent} />
        <Route path="/submit-reimbursement" component={SubmitReimbursementComponent} />
        <Route path="/update-reimbursement" component={UpdateReimbursementComponent} />
        <Route path="/reimbursement-by-type" component={GetReimbursementByAuthorIdComponent} />
        <Route path="/reimbursement-by-status" component={GetReimbursementByStatusComponent} />
      </Switch>
      <br></br>
    </HashRouter>

    
  );
}

export default App;
