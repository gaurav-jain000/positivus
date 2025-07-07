import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function GSAPAnimationsRegulator() {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      // console.log("ScrollTrigger registered:", gsap.plugins);
    }
  }, []);
  return <></>;
}
