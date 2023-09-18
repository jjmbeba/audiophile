import Image from "next/image";
import AddToCart from "./AddToCart";

type Props = {
  name: string;
  images: {
    desktop: string;
    mobile: string;
    tablet: string;
  };
  description: string;
  price: number;
  id: string;
  isNew: boolean;
};

const SpecificProductCard = ({
  id,
  name,
  images,
  description,
  isNew,
  price,
}: Props) => {
  return (
    <div className="mt-6 md:flex items-center gap-[4.5rem]">
      <div className="relative w-[20rem] md:w-[17.5625rem] h-[20rem] md:h-[30rem]">
        <Image
          className="rounded-[0.5rem] md:hidden"
          src={images.mobile}
          alt={name}
          fill
        />
        <Image
          className="rounded-[0.5rem] hidden md:block"
          src={images.tablet}
          alt={name}
          fill
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        {isNew && (
          <h3 className="mt-8 text-[0.875rem] md:text-[0.75rem] leading-normal tracking-[0.625rem] md:tracking-[0.53569rem] text-[#D87D4A]">
            NEW PRODUCT
          </h3>
        )}
        <h2 className="max-w-[17rem] text-[1.75rem] leading-normal tracking-[0.0625rem] uppercase font-bold">
          {name}
        </h2>
        <p className="md:max-w-[21.1875rem] text-[0.9375rem] leading-[1.5625rem] opacity-50">
          {description}
        </p>
        <p className="text-[1.125rem] leading-normal tracking-[0.08038rem] font-bold">
          ${price.toLocaleString("en-US")}
        </p>
        <AddToCart />
      </div>
    </div>
  );
};

export default SpecificProductCard;
