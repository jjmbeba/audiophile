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
    <div className="mt-6 lg:mt-14 md:flex items-center gap-[4.5rem] lg:gap-[6.81rem]">
      <div className="overflow-x-hidden relative w-[20rem] md:w-[17.5625rem] lg:w-[33.75rem] h-[20rem] md:h-[30rem] lg:h-[35rem]">
        <Image
          className="rounded-[0.5rem] md:hidden"
          src={images.mobile}
          alt={name}
          fill
        />
        <Image
          className="rounded-[0.5rem] hidden md:block lg:hidden"
          src={images.tablet}
          alt={name}
          fill
        />
        <Image
          className="rounded-[0.5rem] hidden lg:block"
          src={images.desktop}
          alt={name}
          fill
        />
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        {isNew && (
          <h3 className="mt-8 md:mt-0 text-[0.875rem] md:text-[0.75rem] lg:text-[0.875rem] leading-normal tracking-[0.625rem] md:tracking-[0.53569rem] text-[#D87D4A]">
            NEW PRODUCT
          </h3>
        )}
        <h2 className="max-w-[17rem] text-[1.75rem] lg:text-[2.5rem] leading-normal lg:leading-[2.75rem] tracking-[0.0625rem] lg:tracking-[0.08931rem] uppercase font-bold">
          {name}
        </h2>
        <p className="md:max-w-[21.1875rem] lg:max-w-[30.8125rem] text-[0.9375rem] leading-[1.5625rem] opacity-50">
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
