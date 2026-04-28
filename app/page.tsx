import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import HowWeWork from "@/components/sections/HowWeWork";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Rask og pålitelig rørlegger i Østfold",
  description:
    "Sertifiserte rørleggere med rask respons i Fredrikstad, Sarpsborg, Moss, Halden og hele Østfold. Akuttvakt 24/7, fast pris der det er mulig. Ring 476 00 444.",
  path: "/",
});

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
