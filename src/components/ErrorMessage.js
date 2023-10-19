
import React from 'react';
import "./Error.css";

const ErrorMessage = () => {

  
  return (
    <div className='text-center error'>
    <p>😔</p>
    <p className='text-capitalize'>No definitions found</p>
    <p>Sorry pal, we couldn't find definitions for the word your were looking for. 
        You can try the search again at a later time or head to the web instead.
    </p>
  </div>
  )
}

export default ErrorMessage