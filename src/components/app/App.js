import React, {Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import AboutPage from '../../routes/AboutPage/AboutPage';
import ProjectsPage from '../../routes/ProjectsPage/ProjectsPage';
import ContactPage from '../../routes/ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import Navigation from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <Fragment>
      <Route path='/' component={Navigation} />
      <main>
        <ErrorPage>
          <Switch>
            <Route
              exact path = {'/'}
              component = {ProjectsPage}/>
            <Route
              path = {'/about'}
              component = {AboutPage}/>
            <Route
              path = {'/contact'}
              component = {ContactPage}/>
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </ErrorPage>
      </main>
      <Route path='/' component={Footer} />
    </Fragment>
  );
}

export default App;
