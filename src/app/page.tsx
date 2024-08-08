/* eslint-disable @next/next/no-img-element */
import About from "@/components/Home/AboutSection";
import Achievement from "@/components/Home/Achievement";
import Hero from "@/components/Home/HeroSection";
import Impact from "@/components/Home/Impact";
import Mission from "@/components/Home/Mission";
import NewAbout from "@/components/Home/NewAboutSection";
import NewHero from "@/components/Home/NewHeroSection";
import Services from "@/components/Home/Services";
import Stories from "@/components/Home/Stories";
import Partners from "@/components/Home/partners";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewAbout />
      <Mission />
      <Impact />
      <Stories />
      <Achievement />
      <Services />
      <Partners />
    </div>
  );
}
