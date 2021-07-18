import React from 'react';
import ReactDOM from 'react-dom';

// componente Title usa el objeto `props`
// y una propiedad definida dentro que se llama `value`
function Title(props) {
  return <h1>{props.value}</h1>
}

function App() {
  //Uso del componente Title con el valor "Hola Mundo!"
  return (
    <>  
      <Title value="Hola Mundo!" />
      <Title value="Hello World!" />
    </>   
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);