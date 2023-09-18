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
  const product = await serverClient.getHeadphoneBySlug(params.slug);

  if (!product) return;
  
  return (
    <div className="px-6 md:px-10 pt-4 md:pt-8">
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
        <ProductFeatures features={product.features}/>
        <InTheBox includes={product.includes}/>
        <Gallery gallery={product.gallery}/>
        <Others products={product.others}/>
      </div>
    </div>
  );
};

export default page;
