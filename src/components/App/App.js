import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.css';

const App = () => {
  const items = [
    {
      value: 'Купить продукты'
    },
    {
      value: 'Заправить машину'
    },
    {
      value: 'Постирать кроссовки'
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todos</h1>
      <InputItem />
      <ItemList items={items} />
      <Footer count={3} />
    </div>);
}

export default App;