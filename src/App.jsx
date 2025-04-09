import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import articles from './data/articles';

function App() {

  return (
    <>
      <div>
        <ul>
          {articles.map((article, index) => <li key={index}>{article}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
