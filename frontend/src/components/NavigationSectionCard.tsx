import React from "react";
import { Link } from "react-router-dom";

// // Define the type for props (if any)
// interface IProps {
//     // Define your prop types here
// }

// Functional component using TypeScript
const NavigationSectionCard: React.FC =
  // <IProps>
  () => {
    return (
      <div
        className={
          "flex flex-col items-center justify-between mb-2 w-full h-auto min48em:m-0"
        }
      >
        <Link to={"/"} className={"w-full"}>
          <div
            className={"relative h-52 min60em:h-[10.5rem] min80em:h-[19rem]"}
          >
            <img
              alt="Shop Men"
              data-testid="image"
              loading="lazy"
              width={240}
              height={303}
              decoding="async"
              data-nimg={1}
              className="w-full max-w-full max-h-full object-contain"
              sizes="(min-width: 768px) 500px, 100vw"
              srcSet="https://cms-cdn.flightclub.com/879c42c3c9db-c24a-ee11-0f59-022ecd86.png?w=640 640w, https://cms-cdn.flightclub.com/879c42c3c9db-c24a-ee11-0f59-022ecd86.png?w=750 750w, https://cms-cdn.flightclub.com/879c42c3c9db-c24a-ee11-0f59-022ecd86.png?w=828 828w, https://cms-cdn.flightclub.com/879c42c3c9db-c24a-ee11-0f59-022ecd86.png?w=1080 1080w, https://cms-cdn.flightclub.com/879c42c3c9db-c24a-ee11-0f59-022ecd86.png?w=1200 1200w, https://cms-cdn.flightclub.com/879c42c3c9db-c24a-ee11-0f59-022ecd86.png?w=1920 1920w, https://cms-cdn.flightclub.com/879c42c3c9db-c24a-ee11-0f59-022ecd86.png?w=2048 2048w, https://cms-cdn.flightclub.com/879c42c3c9db-c24a-ee11-0f59-022ecd86.png?w=3840 3840w"
              src="https://cms-cdn.flightclub.com/879c42c3c9db-c24a-ee11-0f59-022ecd86.png?w=3840"
              style={{ color: "transparent" }}
            />
          </div>
        </Link>
        <Link
          to={"/"}
          className={
            "font-helvetica font-medium text-black text-sm leading-[1.2857rem] pt-2 text-center no-underline cursor-pointer min60em:pt-9"
          }
        >
          Shop Men
        </Link>
      </div>
    );
  };

export default NavigationSectionCard;
