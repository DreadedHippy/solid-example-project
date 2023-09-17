import { createSignal, type Component } from 'solid-js';
import { A, Route, Routes } from '@solidjs/router';
import banner from './assets/banner-img.jpg'

import logo from './logo.svg';
import styles from './App.module.css';
import Card from './components/Card';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { useCartContext } from './context/CartContext';

const App: Component = () => {
  const [darkTheme, setDarkTheme] = createSignal(false);
  const {items} = useCartContext();

  const quantity = () => {
    return items.reduce((acc, current) => {
      return acc + current.quantity
    }, 0)
  }

  const toggleTheme = () => {
    setDarkTheme(!darkTheme())
  }


  return (
    <div class='container m-auto'>
      <header
        class='my-4 p-2 text-xl flex items-center gap-4'
        classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
      >
        <span
          class='material-symbols-outlined cursor-pointer'
          onclick={toggleTheme}
        >
          light_mode
        </span>

        <h1>SolidJS Example app</h1>
        
        <A href="/">Home</A>
        <A href="/cart">Cart ({quantity()})</A>
      </header>
      
      <img class="rounded-md" src={banner} alt="site banner" />

      <Routes>
        <Route path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/product/:id" component={Product}></Route>
      </Routes>
    </div>
  );
};


export default App;
