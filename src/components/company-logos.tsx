// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CompanyLogos() {
  // useGSAP(() => {
  //   if (typeof window !== "undefined") {
  //     gsap.registerPlugin(ScrollTrigger);
  //     // console.log("ScrollTrigger registered:", gsap.plugins);
  //   }

  //   // Company logos animation
  //   gsap.from(gsap.utils.toArray<HTMLDivElement>(".company-logo"), {
  //     opacity: 0,
  //     y: 12,
  //     duration: 0.6,
  //     ease: "elastic.inOut",
  //     stagger: 0.05,
  //     random: true,
  //     scrollTrigger: {
  //       trigger: ".company-logo",
  //       start: "top 80%",
  //     },
  //   });
  // }, []);
  return (
    <section className="maximus uni-padding-y flex items-center justify-between gap-8">
      {[
        "Company logo.webp",
        "Company logo-1.webp",
        "Company logo-2.webp",
        "Company logo-3.webp",
        "Company logo-4.webp",
        "Company logo-5.webp",
      ].map((logo) => (
        <div key={logo} className="h-12 company-logo">
          <img
            src={"/company-logos/" + encodeURI(logo)}
            alt={logo}
            className="w-auto h-full object-contain object-center grayscale hover:grayscale-0 duration-300"
          />
        </div>
      ))}
    </section>
  );
}
