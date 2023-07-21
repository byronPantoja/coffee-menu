import Menu from "../features/menu/Menu";
import Footer from "./Footer";
import Header from "./Header";

function Home() {
  return (
    <div className="bg-black mx-auto p-10">
      <Header />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
