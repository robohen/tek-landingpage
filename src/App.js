import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import ProjectPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import Layout from './components/Layout';
import './App.css';

const App = () => {
  return (
    <>
    <Router>
        <Routes >
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path = "/ProjectsPage" element={<ProjectPage />}/>
            <Route path ="/ContactPage" element ={<ContactPage />}/>
        </Route>
        </Routes>
    </Router>
    </>
  )
}

export default App;
