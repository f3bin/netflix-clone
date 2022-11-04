
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/Navbar/NavBar';
import RowPost from './components/RowPost/RowPost';
import {Action ,Originals, Comedy, Horror , Romantic} from "./urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Originals} title="Netflix Originals" isSmall  />
      <RowPost url={Action} title= "Action"  isSmall/>
      <RowPost url={Comedy} title= "Comedy"  isSmall/>
      <RowPost url={Horror} title= "Horror"  isSmall/>
      <RowPost url={Romantic} title= "Romantic"  isSmall/>
    </div>
  );
}

export default App;
