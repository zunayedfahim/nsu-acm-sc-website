import About from "./sections/About";
import Hero from "./sections/Hero";
import ACMEvents from "./sections/ACMEvents";
import Activities from "./sections/Activities";
import Executive from "./sections/Executive";
import JoinNow from "./sections/JoinNow";
import Gallery from "./sections/Gallery";
import Vectors from "./sections/Vectors";

export default function Home() {
  return (
    <main className="w-full text-white bg-[#1B1F44] font-quantico relative">
      {/* <Vectors /> */}

      {/* Navbar */}
      <nav
        id="top"
        className="text-center h-[8.9375rem] flex justify-center items-center border-b-[0.5px] border-b-white/10 border-b-"
      >
        Navbar
      </nav>

      {/* Home Page */}
      <section className="px-[10%]">
        <Hero />
        <About />
        <ACMEvents />
        <Activities />
        <Executive />
      </section>
      <JoinNow />
      <Gallery />

      {/* footer */}
      <div className="h-[35.9375rem] flex items-center justify-center">
        Footer
      </div>
    </main>
  );
}
