import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { PortfolioTeaser } from "@/components/portfolio-teaser";
import { Team } from "@/components/team";
import { Pricing } from "@/components/pricing";
import { FooterCta } from "@/components/footer-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <PortfolioTeaser />
      <Team />
      <Pricing />
      <FooterCta />
      <Footer />
    </main>
  );
}
