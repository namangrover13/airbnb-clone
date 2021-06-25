import Navbar from "./components/navbar";
import Banner from  './components/banner'
import Explore from "./components/explore/explore";
import Anywhere from "./components/anywhere/Anywhere";
import Inspired from "./components/Inspired";
import Host from "./components/host/Host"
import Experience from "./components/experiences/Experience";
function App() {
  return (
    //Import the components here
    <div className="App">
      <Navbar />
      <Banner />
      <Explore />
      <Anywhere />
      <Inspired />
      <Experience />
      <Host />
    </div>
  );
}

export default App;
