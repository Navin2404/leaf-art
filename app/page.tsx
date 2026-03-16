import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import OurWorks from "./components/OurWorks";
import ReachUs from "./components/ReachUs";
import Footer from "./components/Footer";
import Artists from "./components/Artists";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <OurWorks />
        <Artists />
        <ReachUs />
        <WhatsAppButton />
      </main>
      <Footer />
    </>
  );
}