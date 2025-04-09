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
  };

  const deleteArticle = (indexDelete) => {
    const newArticleList = articlesArr.filter((article, index) => indexDelete !== index);
    setArticlesArr(newArticleList);
  }

  return (
    <>
      <h1>LISTA DEGLI ARTICOLI DA CUCINA DA COMPRARE</h1>
      <div className='container'>
        <form onSubmit={addArticle}>
          <div className='container-background'>
            <div className="container-list">
              <ul>
                {articlesArr.map((article, index) =>
                  <li key={index}>
                    <h2>{article}</h2>
                    <div type="button" onClick={() => deleteArticle(index)}>
                      <i className="fa-solid fa-trash"></i>
                      <span>delete</span>
                    </div>
                  </li>)}
              </ul>
            </div>
          </div>
          <hr />

          <div className='container-input'>
            <input type="text"
              value={newArticle}
              onChange={event => setNewArticle(event.target.value)} />
            <button>aggiungi</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
