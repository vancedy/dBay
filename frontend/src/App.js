import React, {useState} from 'react';
import './App.css';
import { Navigation } from './components/navigation';
import {Search} from './components/search';
import Items  from './components/items';

function App() {
  const [items, setItems] = useState([
    {
      name: 'used bandana',
      id: 1,
      price: 400,
      description: 'a used bandana worn by an ape in 5th century bc'
    },
    {
      name: 'used apron',
      id: 2,
      price: 40,
      description: 'a used apron worn by an ape in 5th century bc'
    },
    {
      name: 'used hat',
      id: 3,
      price: 400,
      description: 'a used hat worn by an ape in 5th century bc'
    },
    {
      name: 'used mitten',
      id: 4,
      price: 420,
      description: 'a used mitten worn by an ape in 5th century bc'
    },
    {
      name: 'used jeans',
      id: 5,
      price: 420,
      description: 'a used jeans worn by an ape in 5th century bc'
    }
  ])



  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <Search></Search>
        <Items items={items}/>

       
      </header>
    </div>
  );
}

export default App;
