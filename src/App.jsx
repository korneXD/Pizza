import Products from "./components/Products";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center justify-start gap-2 p-2">
        <Banner />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
