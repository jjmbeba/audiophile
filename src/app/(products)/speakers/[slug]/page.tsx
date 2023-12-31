import { serverClient } from "@/src/app/_trpc/serverClient";
import Gallery from "@/src/components/Gallery";
import GoBackButton from "@/src/components/GoBackButton";
import InTheBox from "@/src/components/InTheBox";
import Others from "@/src/components/Others";
import ProductFeatures from "@/src/components/ProductFeatures";
import SpecificProductCard from "@/src/components/SpecificProductCard";

type Props = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: Props) => {
  const product = await serverClient.getProductBySlug(params.slug);

  if (!product) return;

  return (
    <div className="px-6 md:px-10 lg:px-[10.31rem] pt-4 md:pt-8 lg:pt-[4.94rem] ">
      <GoBackButton />
      <div>
        <SpecificProductCard
          id={product.id}
          name={product.name}
          images={product.image}
          description={product.description}
          price={product.price}
          isNew={product.new}
        />
        <div className="lg:flex items-start gap-[6rem]">
          <ProductFeatures features={product.features} />
          <InTheBox includes={product.includes} />
        </div>
        <Gallery gallery={product.gallery} />
        <Others products={product.others} />
      </div>
    </div>
  );
};

export default page;
