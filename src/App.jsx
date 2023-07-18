import CafeMenu from "./components/CafeMenu";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function App() {
  return (
    <div className="bg-black mx-auto p-10">
      <Header />
      <CafeMenu />
      <Footer />
    </div>
  );
}

export default App;
