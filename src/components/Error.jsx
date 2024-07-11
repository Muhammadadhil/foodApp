

import { useRouteError } from 'react-router-dom';
import React from 'react'

const Error = () => {

    const error=useRouteError();              //? useRouteError is a hook provided by react router dom 
    console.log('ERROR:',error);
    
  return (
      <div>
          <h1>oops..</h1>
          <h2>Something went wrong</h2>
          <h1>{error.status} {error.statusText}</h1>
          <h2>{error.data}</h2>
      </div>
  );
}

export default Error
