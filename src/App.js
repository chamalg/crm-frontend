import React from 'react';

import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/EntryPage';

import './App.css'
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
