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
    <>
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
    </>
  );
}
