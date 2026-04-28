import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <HowWeWork />
      <ServiceAreas />
      <FAQ />
    </>
  );
}
