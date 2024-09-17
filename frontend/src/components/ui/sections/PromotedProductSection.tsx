import React from "react";
import PromotedProductCard from "../../PromotedProductCard.tsx";

// Define the type for props (if any)
interface IProps {
  // Define your prop types here
  title: string;
}

// Functional component using TypeScript
const PromotedProductSection: React.FC<IProps> = ({ title }) => {
  return (
    <section className={"pt-16 px-5 flex flex-col lg:py-24"}>
      <div className={"max-w-[56.25rem] w-full m-auto lg:max-w-[75rem]"}>
        <div className={"flex flex-row items-baseline justify-between mb-10"}>
          <h2
            className={
              "font-helvetica text-2xl leading-6 uppercase font-bold text-black inline-block m-0"
            }
          >
            {title}
          </h2>
          <button
            className={
              "text-center bg-transparent inline-block text-xs font-normal h-auto leading-4 underline normal-case w-auto"
            }
          >
            <div
              className={
                "text-[rgb(129,129,129)] text-sm leading-[17px] [text-decoration-color:rgb(129,129,129)] capitalize"
              }
            >
              Shop {title}
            </div>
          </button>
        </div>
        <div
          className={
            "grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-4"
          }
        >
          <PromotedProductCard />
          <PromotedProductCard />
          <PromotedProductCard />
          <PromotedProductCard />
          <PromotedProductCard />
          <PromotedProductCard />
          <PromotedProductCard />
          <PromotedProductCard />
        </div>
      </div>
    </section>
  );
};

export default PromotedProductSection;
