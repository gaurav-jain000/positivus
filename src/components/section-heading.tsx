// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

interface Props {
  className?: string;
  heading: string;
  description: string;
}

export default function SectionHeading({
  className,
  heading,
  description,
}: Props) {
  // useGSAP(() => {
  //   if (typeof window !== "undefined") {
  //     gsap.registerPlugin(ScrollTrigger, SplitText);
  //     // console.log("ScrollTrigger registered:", gsap.plugins);
  //   }

  //   // Sections Animation
  //   const sections = gsap.utils.toArray<HTMLDivElement>(".section-head");
  //   sections.forEach((section) => {
  //     gsap.from(section, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 0.5,
  //       ease: "power2.out",
  //     });
  //   });
  // }, []);
  return (
    <div
      className={`section-head flex max-md:flex-col items-center gap-4 md:gap-10 uni-padding-b ${className}`}
    >
      <h2 className="theme-h2 px-2 bg-(--tertiary) rounded-lg text-center">
        {heading}
      </h2>
      <p className="body-18 w-3/5 max-md:text-center">{description}</p>
    </div>
  );
}
