import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { AIUpgrade } from "@/components/AIUpgrade";
import { ProductShowcase } from "@/components/ProductShowcase";
import { AIQuestions } from "@/components/AIQuestions";
import { HowItWorks } from "@/components/HowItWorks";
import { Security } from "@/components/Security";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <AIUpgrade />
        <ProductShowcase />
        <AIQuestions />
        <HowItWorks />
        <Security />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
