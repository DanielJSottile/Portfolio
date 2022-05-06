import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import NotFoundPage from '../../routes/NotFoundPage';
import AboutPage from '../../routes/AboutPage';
import ProjectsPage from '../../routes/ProjectsPage';
import ContactPage from '../../routes/ContactPage';
import Navigation from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <ErrorBoundary
          FallbackComponent={ErrorPage}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}
        >
          <Routes>
            <Route exact path="/" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>

      <Footer />
    </>
  );
}
