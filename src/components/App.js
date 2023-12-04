import React, { useState } from 'react';
import './../css/App.css';
import { Header } from './Header';
import { MainContent } from './MainContent';

function App() {
  const storedCartItem = JSON.parse(localStorage.getItem('product'));
  const [cartItem, setCartItem] = useState(storedCartItem === null ? [] : [storedCartItem]);

  return (
    <div className="App">
      <Header cartItem={cartItem} setCartItem={setCartItem} />
      <MainContent setCartItem={setCartItem} />
    </div>
  );
}

export default App;
