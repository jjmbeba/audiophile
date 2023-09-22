import ProductCard from "@/src/components/ProductCard";
import ProductTitle from "@/src/components/ProductTitle";
import { serverClient } from "../../_trpc/serverClient";

type Props = {};

const page = async (props: Props) => {
  const earphones = await serverClient.getEarphones();

  return (
    <div>
      <ProductTitle title="earphones" />
      <div className="mt-8 md:mt-[7.5rem] flex flex-col gap-[7.5rem] md:gap-40">
        {earphones.map(({ name, description, slug, image, id }) => (
          <ProductCard
            key={id}
            className="even:border even:border-black"
            title={name}
            description={description}
            images={image}
            slug={slug}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
