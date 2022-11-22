
import Navbar from "./components/navbar";
import Products from "./components/data1";
import Freshfood  from "./components/freshfood";
import Collections from "./components/collections";
import Products2 from "./components/data2";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Freshfood/>
      <Products/>
      <Collections/>
      <Products2/>
      <Footer/>
    </div>
  );
}

export default App;
