import Image from "next/image";
import { Fahkwang, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Featured from "@/components/Featured";
import TopCreator from "@/components/TopCreator";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="md:mx-[120px] lg:[120px] mx-[10px]">
      <Navbar/>
      <Hero/>
      <Brands/>
      <About/>
      <Collections/>
      <Featured/>
      <TopCreator/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
