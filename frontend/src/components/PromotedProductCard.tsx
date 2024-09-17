import React from "react";
import { Link } from "react-router-dom";

// // Define the type for props (if any)
// interface IProps {
//   // Define your prop types here
// }

// Functional component using TypeScript
const PromotedProductCard: React.FC =
  // <IProps>
  () => {
    return (
      <Link
        to="/"
        className={
          "font-helvetica font-medium text-[.9rem] text-inherit cursor-pointer"
        }
      >
        <figure className={"flex flex-col h-full w-full m-0 bg-white"}>
          <div className={"min-h-[9.375rem] h-[12.1875rem]"}>
            <img
              alt="Air Foamposite One 'Royal' 2024"
              data-testid="gridItemImage"
              data-qa="ProductItemThumbnail"
              loading="lazy"
              width={750}
              height={195}
              decoding="async"
              data-nimg={1}
              className="w-full max-w-full max-h-full object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              srcSet="https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=200 200w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=220 220w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=240 240w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=300 300w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=360 360w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=375 375w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=400 400w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=440 440w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=500 500w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=600 600w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=640 640w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=750 750w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=828 828w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=1080 1080w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=1200 1200w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=1920 1920w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=2048 2048w, https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=3840 3840w"
              src="https://cdn.flightclub.com/TEMPLATE/434422/1.jpg?w=3840"
              style={{ color: "transparent" }}
            />
          </div>
          <figcaption className={"flex flex-col justify-start pt-0 px-5 pb-9"}>
            <div className={"flex flex-col flex-grow"}>
              <div
                className={
                  "font-helvetica font-medium text-xs text-secondary_grey mb-1.5"
                }
              >
                Nike
              </div>
              <h2
                className={
                  "h-9 font-helvetica text-black font-medium text-[0.9rem] uppercase hyphens-auto leading-[1.15rem] m-0 overflow-hidden"
                }
              >
                Air Foamposite One 'Royal' 2024
              </h2>
            </div>
          </figcaption>
        </figure>
      </Link>
    );
  };

export default PromotedProductCard;
