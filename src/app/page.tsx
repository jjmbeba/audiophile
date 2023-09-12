import Header from "@/src/components/Header";
import HomeBackground from "../components/HomeBackground";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Products from "../components/Products";
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <Header />
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
