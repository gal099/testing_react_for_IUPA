import React from 'react';
import ReactDOM from 'react-dom';
import ArticleContainer from './components/ArticleContainer';
import { Title } from './components/Title';
import Paragraph from './components/Paragraph';
import EnNegrita from './components/EnNegrita';
import DeColorRojo from './components/DeColorRojo';

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