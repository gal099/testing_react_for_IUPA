import React from 'react';
import ReactDOM from 'react-dom';

// nuevo componente Title
function Title() {
  return <h1>Hola!</h1>
}

function App() {
  //Uso del componente Title
  return <Title />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);