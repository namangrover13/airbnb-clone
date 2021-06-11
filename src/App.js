import Navbar from "./components/navbar";
import Banner from  './components/banner'
import Explore from "./components/explore/explore";
import Anywhere from "./components/anywhere/Anywhere";
function App() {
  return (
    //Import the components here
    <div className="App">
      <Navbar />
      <Banner />
      <Explore />
      <Anywhere />
    </div>
  );
}

export default App;
