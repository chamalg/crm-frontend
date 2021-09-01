import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/EntryPage';
import Dashboard from './pages/dashboard/Dashboard';
import { TicketListing } from './pages/ticket-listing/TicketListing';
import {NewTicket} from "./pages/new-ticket/NewTicket";
import {TicketInfo} from './pages/ticket-info/TicketInfo'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Entry} />
          <DefaultLayout>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/add-ticket" component={NewTicket} />
            <Route exact path="/tickets" component={TicketListing} />
            <Route exact path="/ticket/:id" component={TicketInfo} />
          </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
