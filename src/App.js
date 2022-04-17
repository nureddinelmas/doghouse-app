
import './App.css';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import Item from './components/Item';
import List from './components/List';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://nureddinelmas.github.io/jsonapi/mydata.json`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [])

  return (

    <Router>
      <Routes>
        <Route exact path='/' element={
          <Welcome items={items} />
        } />
        <Route exact path='/List' element={
          <List items={items} />
        } />
        <Route exact path='/items/:chipNumber' element={
          <Item items={items} />
        } />
      </Routes>
    </Router>
  );
}

export default App;
