import HomeHeader from "@/src/components/HomeHeader";
import HomeBackground from "../components/HomeBackground";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <div>
        <HomeBackground />
        <Hero />
      </div>
      <Categories/>
      <Products/>
      <About/>
    </main>
  );
}
