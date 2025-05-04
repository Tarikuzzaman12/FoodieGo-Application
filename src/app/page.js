import AboutUs from "@/components/AboutUs";
import AreaCards from "@/components/AreaCards";
import Article from "@/components/Article";

import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
   
   <HeroSection></HeroSection>
   <AreaCards></AreaCards>
   <AboutUs></AboutUs>
   <Article></Article>
   
   </div>
  );
}
