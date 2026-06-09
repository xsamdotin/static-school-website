import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Academics from "./components/Academics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Academics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
