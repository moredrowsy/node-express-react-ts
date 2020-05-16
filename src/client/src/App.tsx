import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
import Project from './components/Project';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          <a href='/'>Home</a>, <a href='/about'>About</a>,{' '}
          <a href='/project/1'>Project 1</a>, <a href='/nomatches'>Error</a>
        </div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              <Home title='React Typescript Template' />
            </Route>
            <Route path='/about' exact>
              <About title='About' />
            </Route>
            <Route path='/project/:id'>
              <Project title={'Path Regex Matching Example'} />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
