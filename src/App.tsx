import { BiMoon } from "react-icons/bi";
import { BiSun } from "react-icons/bi";
import '@fontsource-variable/nunito-sans';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Nav from "./components/Nav";
import NewArrivalSection from './components/NewArrivalSection';
import ShoeDetails from "./components/ShoeDetails";
import Sidebar from './components/Sidebar';
import { ItemType, SHOE_LIST } from './Constant';


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState<ItemType>(SHOE_LIST[2]);

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
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickShoppingButton={() => setIsSidebarOpen(true)} />
      <ShoeDetails shoe={currentShoe} />
      <NewArrivalSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}>
        <Cart cartItems={[]} />
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
