import '@fontsource-variable/nunito-sans';
import Nav from "./components/Nav";
import ShoeDetails from "./components/ShoeDetails";
import Card from './components/Card';
import { SHOE_LIST } from './Constant';

function App() {
  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      {/* <Nav />
      <ShoeDetails /> */}
      <Card item={SHOE_LIST[0]} />
    </div>
  );
}

export default App;
