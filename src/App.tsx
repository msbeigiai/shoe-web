import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import '@fontsource-variable/nunito-sans';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkMode')
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, [])

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    if (window.document.documentElement.classList.contains("dark")) {
      localStorage.setItem('isDarkMode', 'true');
    } else localStorage.setItem('isDarkMode', 'false');
  }


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
      <div className='fixed bottom-4 right-4'>
        <button onClick={toggleDarkMode}
          className=" shadow-lg bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night">
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
