// App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, addMultiple, deleteMultiple } from './feature/addAppleSlice';
import { increasePrice, decreasePrice, increMultiple, decreMultiple } from './feature/priceUpSlice';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.addApple.value);
  const price = useSelector((state) => state.priceUP.value);

  const handleAddApple = () => {
    dispatch(increment());
    dispatch(increasePrice());
  };

  const handleRemoveApple = () => {
    if (counter > 0) {
      dispatch(decrement());
      dispatch(decreasePrice());
    }
  };

  const handleAddMultipleApples = (amount) => {
    dispatch(addMultiple(amount));
    dispatch(increMultiple(amount * 2.99));
  };

  const handleRemoveMultipleApples = (amount) => {
    if (counter >= amount) {
      dispatch(deleteMultiple(amount));
      dispatch(decreMultiple(amount * 2.99));
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h2>🍎 Pomme : {counter}</h2>
        <h2>Price: ${price.toFixed(2)}</h2>
      </div>
      <div className="bodyApp">
        <img src="https://www.plantes-et-sante.fr/images/istock-155375750.jpg" alt="Apple" />
      </div>
      <div className="boxButton">
        <button onClick={handleAddApple}>Ajouter</button>
        <button onClick={() => handleAddMultipleApples(10)}>Ajouter X10</button>
        <button onClick={handleRemoveApple}>Supprimer</button>
        <button onClick={() => handleRemoveMultipleApples(10)}>Supprimer x10</button>
      </div>
    </div>
  );
}
