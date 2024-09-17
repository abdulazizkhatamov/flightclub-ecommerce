import React from "react";
import NavigationSectionCard from "../../NavigationSectionCard.tsx";

// Define the type for props (if any)
interface IProps {
  // Define your prop types here
  title: string;
}

// Functional component using TypeScript
const NavigationSection: React.FC<IProps> = ({ title }) => {
  return (
    <section
      className={
        "px-5 pt-15 pb-0 flex flex-col mx-auto max-w-[58.75rem] min80em:max-w-[75rem] min60em:pt-[9.375rem] min60em:px-0 min60em:pb-0"
      }
    >
      <h2
        className={
          "font-helvetica text-[1.5rem] leading-7 uppercase font-bold text-black mb-10"
        }
      >
        {title}
      </h2>
      <div
        className={
          "flex flex-row justify-between w-full gap-5 grid-cols-2 min48em::grid min48em::grid-cols-4 min48em::gap-5"
        }
      >
        <NavigationSectionCard />
        <NavigationSectionCard />
        <NavigationSectionCard />
      </div>
    </section>
  );
};

export default NavigationSection;
