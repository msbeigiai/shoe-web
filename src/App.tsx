import '@fontsource-variable/nunito-sans';
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";
import NewArrivalSection from './components/NewArrivalSection';
import { SHOE_LIST } from './Constant';

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav />
      <ShoeDetails />
      <NewArrivalSection items={SHOE_LIST} />
    </div>
  );
}

export default App;
