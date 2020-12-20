import React, { useEffect, useState } from 'react';
import css from './App.module.css';
import Header from './Header';
import Main from './Main';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "./data.json";
    fetch(url)
    .then((response) => {return response.json()})
    .then((data) => setData(data));
  }, [])
  
  return (
    <div className={css.container}>
      <Header />
      {console.log(data)}
      <Main data={data}/>
      <footer style={{textAlign: 'center'}}>Copyright © 2020 Anran Du | Up-to-date Dec 2020</footer>
    </div>
  );
}

export default App;
