import ProductCard from "@/src/components/ProductCard";
import ProductTitle from "@/src/components/ProductTitle";
import React from "react";
import TestImage from "@/public/shared/desktop/image-xx99-mark-two-headphones.jpg";
import { serverClient } from "../../_trpc/serverClient";


type Props = {};

const page = async (props: Props) => {

  const speakers = await serverClient.getSpeakers();

  return (
    <div>
      <ProductTitle title="speakers" />
      <div className="mt-8 md:mt-[7.5rem] flex flex-col gap-[7.5rem] md:gap-40">
        {
          speakers.map(({name,description,slug, image, id}) => (
            <ProductCard key={id} className="even:border even:border-black" title={name} description={description}slug={slug} images={image}/>
          ))
        }
      </div>
    </div>
  );
};

export default page;
