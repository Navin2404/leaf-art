import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import OurWorks from "./components/OurWorks";
import ReachUs from "./components/ReachUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <OurWorks />
        <ReachUs />
      </main>
      <Footer />
    </>
  );
}