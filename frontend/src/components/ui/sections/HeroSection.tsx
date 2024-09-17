import React from "react";
import useIsDesktop from "../../../hooks/isDesktop.ts";

const desktopBackground =
  "http://localhost:5000/public/images/HeroImageDesktop.png";
const mobileBackground =
  "http://localhost:5000/public/images/HeroImageMobile.png";

// // Define the type for props (if any)
// interface IProps {
//   // Define your prop types here
// }

// Functional component using TypeScript
const HeroSection: React.FC =
  // <IProps>
  () => {
    const isDesktop = useIsDesktop(768);

    return (
      <section className="relative flex items-end justify-center h-[90vh] lg:h-screen sm:justify-start">
        <div className={"block absolute inset-0"}>
          <img
            alt="Air Foamposite One 'Royal' 2024 Hero Picture"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            sizes="100vw"
            srcSet={`${isDesktop ? desktopBackground : mobileBackground}?w=640 640w, ${isDesktop ? desktopBackground : mobileBackground}?w=750 750w, ${isDesktop ? desktopBackground : mobileBackground}?w=828 828w, ${isDesktop ? desktopBackground : mobileBackground}?w=1080 1080w, ${isDesktop ? desktopBackground : mobileBackground}?w=1200 1200w, ${isDesktop ? desktopBackground : mobileBackground}?w=1920 1920w, ${isDesktop ? desktopBackground : mobileBackground}?w=2048 2048w, ${isDesktop ? desktopBackground : mobileBackground}?w=3840 3840w`}
            src={`${isDesktop ? desktopBackground : mobileBackground}?w=3840`}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
            }}
            className={"h-full object-cover"}
          />
        </div>

        <div className="max-w-[940px] inset-0 absolute w-full h-full flex items-center mx-auto justify-start lg:max-w-[1800px] px-[50px]">
          <div
            className={
              "z-[900] lg:p-0 lg:max-w-[38rem] text-left md:text-center lg:text-left"
            }
          >
            <h1
              className={
                "text-4xl lg:text-5xl text-white font-bold uppercase font-helvetica"
              }
            >
              Air Foamposite One 'Royal' 2024
            </h1>
            <h2
              className={
                "max-w-max font-helvetica text-[16px] font-medium text-white cursor-pointer mt-5 underline capitalize hover:text-primary_grey"
              }
            >
              Shop Now
            </h2>
          </div>
        </div>
      </section>
    );
  };

export default HeroSection;
