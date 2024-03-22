import '@fontsource-variable/nunito-sans';
import { useState } from 'react';
import Cart from './components/Cart';
import Nav from "./components/Nav";
import NewArrivalSection from './components/NewArrivalSection';
import ShoeDetails from "./components/ShoeDetails";
import Sidebar from './components/Sidebar';
import { SHOE_LIST } from './Constant';


const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe,
    qty: 1,
    size: 44
  }
});

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingButton={() => setIsSidebarOpen(true)} />
      <ShoeDetails />
      <NewArrivalSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}>
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
    </div>
  );
}

export default App;
