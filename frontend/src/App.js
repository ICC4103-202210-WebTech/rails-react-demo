import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


import Layout from './components/layout';
import Home from './components/home';
import Events from './components/events';
import TicketTypes from './components/ticket_types';

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/ticket_types" element={<TicketTypes />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
