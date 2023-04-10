import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  function ShowCartHandler(){setCartIsShown(true)}
  function HideCartHandler(){setCartIsShown(false)}
  return (
    <CartProvider>
    
      {cartIsShown && <div>Cart....</div>}
      <Header onShowCart={ ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
