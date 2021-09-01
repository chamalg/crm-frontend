import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/EntryPage';
import Dashboard from './pages/dashboard/Dashboard';
import { TicketListing } from './pages/ticket-listing/TicketListing';
import { NewTicket } from "./pages/new-ticket/NewTicket";
import { TicketInfo } from './pages/ticket-info/TicketInfo'
import { PrivateRoutes } from './components/private-routes/PrivateRoutes';

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Entry} />
            <PrivateRoutes exact path="/dashboard" component={Dashboard} />
            <PrivateRoutes exact path="/add-ticket" component={NewTicket} />
            <PrivateRoutes exact path="/tickets" component={TicketListing} />
            <PrivateRoutes exact path="/ticket/:id" component={TicketInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
