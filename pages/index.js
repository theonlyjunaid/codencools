import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="text-5xl">
        Welcome to Next App
      </div>
      <Footer/>
    </>
  );
}
