import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import ProjectsPage from './components/ProjectsPage';
import Pokemon from './components/Pokemon';
import Layout from './components/Layout';
import './App.css';
import DarkModeButton from './redux/darkModeButton';
import store from './redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <DarkModeButton />
    <Router>
        <Routes >
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path = "/ProjectsPage" element={<ProjectsPage />}/>
            <Route path ="/Pokemon" element ={<Pokemon />}/>
        </Route>
        </Routes>
    </Router>
    </Provider>
  )
}

export default App;
