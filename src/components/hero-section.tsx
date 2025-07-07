import { MarketingIllustration } from "./illustrations/illustrations";
import ThemeButton from "./theme-button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function HeroSection() {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      // console.log("ScrollTrigger registered:", gsap.plugins);
    }
    // H1 animation
    const splitHead = new SplitText("#splitHead", {
      type: "chars, words",
    });

    const splitPara = new SplitText("#splitPara", {
      type: "lines, words",
    });

    const tl = gsap.timeline();
    tl.from(splitHead.chars, {
      opacity: 0,
      y: 12,
      stagger: 0.02,
      ease: "sine",
    });
    gsap.from(splitPara.lines, {
      opacity: 0,
      y: 20,
      stagger: 0.04,
      ease: "sine",
    });
  }, []);
  return (
    <section className="maximus uni-padding-y">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-10 xl:gap-40">
        <div className="flex flex-col gap-4 md:gap-4 lg:gap-9 md:items-start">
          <h1 id="splitHead" className="theme-h1 leading-[1.3em] text-balance">
            Navigating the digital landscape for success
          </h1>
          <div className="grid place-items-center md:hidden">
            <MarketingIllustration sizeFactor={0.7} />
          </div>
          <p id="splitPara" className="body-20">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <ThemeButton> Book a consulation </ThemeButton>
        </div>
        <div className="grid place-items-center">
          <MarketingIllustration className="max-md:hidden" sizeFactor={0.9} />
        </div>
      </div>
    </section>
  );
}
