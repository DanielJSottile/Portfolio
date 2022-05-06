import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ErrorPage({ error, resetErrorBoundary }) {
  return (
    <div className="not-found-container">
      <p className="error-404">App Error</p>
      <div className="penny-not-found" />
      <p className="error-message">{`${error.message}: Oops! Something went wrong with the application. Click the button below to go back while I figure out what's wrong.`}</p>
      <Link to="/home" onClick={resetErrorBoundary} className="go-back-btn">
        Go Back
      </Link>
    </div>
  );
}

ErrorPage.propTypes = {
  error: PropTypes.objectOf(PropTypes.string).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};
