import React from 'react';

const Home = () => {
  return (
    <div>
      I'm the new home component
      <button onClick={() => console.log('Clicked!')}>Click</button>
    </div>
  );
};

// Export an object for use in Routes
export default { component: Home };
