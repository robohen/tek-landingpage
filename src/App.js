import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import Pokemon from './components/Pokemon';
import Layout from './components/Layout';
import './App.css';
import {NightModeButton} from './components/NightModeButton';
import { NightModeProvider } from './components/NightModeContext';

const App = () => {
  return (
     <>
        <Router>
          <NightModeProvider >
          <NightModeButton />
          <Routes >
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/ProjectsPage" element={<ProjectsPage />} />
              <Route path="/Pokemon" element={<Pokemon />} />
            </Route>
          </Routes>
          </NightModeProvider>
        </Router>
        </>
  )
}

export default App;
