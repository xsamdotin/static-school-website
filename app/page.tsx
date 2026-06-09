import Hero from "./components/Hero";
import DirectorMessage from "./components/DirectorMessage";
import NoticeBoard from "./components/NoticeBoard";
import Stats from "./components/Stats";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";
import CoreValues from "./components/CoreValues";

export default function Home() {
  return (
    <>
      <Hero />
      <DirectorMessage />
      <NoticeBoard />
      <Stats />
      <WhoWeAre />
      <WhyChooseUs />
      <CoreValues />
    </>
  );
}
