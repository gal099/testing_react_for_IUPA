import React from 'react';
import ReactDOM from 'react-dom';

function ArticleContainer(props) {
  return <article>{props.children}</article>
}

function Title(props) {
  return <h1>{props.children}</h1>
}

function Paragraph(props) {
  return <p>{props.children}</p>}

function EnNegrita(props) {
  return <strong>{props.children}</strong>
}

function DeColorRojo(props) {
  return <span style={{ color: 'red' }}>{props.children}</span>
}

function App() {
  return (
    <ArticleContainer>
      <Title>
        Hola <i>Mundo</i>!
      </Title>
      <Paragraph>
        Párrafo de mi articulo 
        <EnNegrita>
          <DeColorRojo> importante</DeColorRojo>
        </EnNegrita>!
      </Paragraph>
    </ArticleContainer>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);