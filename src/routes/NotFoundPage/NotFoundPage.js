import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
  return (
    <Fragment>
      <div>
        <h2>404: Not Found!</h2>
        <p>Oops!  You probably went to a page that does not exist.  Please head back!</p>
        <Link to='/'>Back</Link>
      </div>
    </Fragment>
  );
}

export default NotFoundPage;
