import React from 'react';

const withSpinner = Component => props => {
  return props.isPending ? <h1>Loading...</h1> : <Component {...props} />;
};

export default withSpinner;
