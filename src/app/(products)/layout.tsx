import About from "@/src/components/About";
import Categories from "@/src/components/Categories";
import Header from "@/src/components/Header";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="bg-black">
        <Header />
      </div>
      {children}
      <Categories className="pt-[10.75rem]" />
      <About />
    </section>
  );
}
