import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import articles from './data/articles';

function App() {

  const [articlesArr, setArticlesArr] = useState(articles);
  const [newArticle, setNewArticle] = useState('');

  const addArticle = event => {
    event.preventDefault();
    const newArticlesArr = [...articlesArr, newArticle];
    setArticlesArr(newArticlesArr);
    setNewArticle('');
  }

  return (
    <>
      <div>
        <form onSubmit={addArticle}>
          <ul>
            {articlesArr.map((article, index) =>
              <li key={index}>
                {article}
              </li>)}
          </ul>
          <input type="text"
            value={newArticle}
            onChange={event => setNewArticle(event.target.value)} />
          <button>aggiungi</button>
        </form>
      </div>
    </>
  )
}

export default App
