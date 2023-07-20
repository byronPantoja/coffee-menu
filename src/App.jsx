import CafeMenu from "./features/menu/CafeMenu";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function App() {
  return (
    <div className="bg-black mx-auto p-10">
      <Header />
      <main>
        <CafeMenu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
