import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// Composing Components
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React functional component</h2>
      <h3>This is a h3 tag</h3>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);
