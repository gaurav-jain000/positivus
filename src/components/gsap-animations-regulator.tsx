import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function GSAPAnimationsRegulator() {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      //   console.log("ScrollTrigger registered:", gsap.plugins);
    }

    // Sections Animation
    const sections = gsap.utils.toArray<HTMLDivElement>("section");
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    });

    // H1 animation
    const splitHead = new SplitText("#splitHead", {
      type: "chars, words",
    });
    gsap.from(splitHead.chars, {
      opacity: 0,
      y: 12,
      stagger: 0.04,
      ease: "sine",
    });

    // Company logos animation
    gsap.from(gsap.utils.toArray<HTMLDivElement>(".company-logo"), {
      opacity: 0,
      y: 12,
      duration: 0.6,
      ease: "elastic.inOut",
      stagger: 0.05,
      random: true,
      scrollTrigger: {
        trigger: ".company-logo",
        start: "top 80%",
      },
    });

    // Services animation
    const servicesArr = gsap.utils.toArray<HTMLDivElement>(".service-item");
    servicesArr.forEach((service, s_index) => {
      gsap.from(service, {
        opacity: 0,
        scale: 0.6,
        yPercent: 10,
        transformOrigin: "bottom",
        delay: s_index * 0.05,
        duration: 1,
        stagger: 0.4,
        ease: "expo",
        random: true,
        scrollTrigger: {
          trigger: service,
          start: "top 80%",
          end: "top 40%",
        },
      });
    });

    const workingProcess = gsap.utils.toArray<HTMLDivElement>(
      ".working-process-item"
    );
    workingProcess.forEach((step) => {
      gsap.from(step, {
        opacity: 0,
        scale: 0.9,
        yPercent: 30,
        transformOrigin: "bottom",
        duration: 0.2,
        ease: "power2",
        random: true,
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          end: "top 40%",
        },
      });
    });

    const teamArr = gsap.utils.toArray<HTMLDivElement>(".team-member-item");
    teamArr.forEach((member, m_index) => {
      gsap.from(member, {
        opacity: 0,
        scale: 0.5,
        yPercent: 30,
        transformOrigin: "bottom",
        delay: m_index * 0.1,
        duration: 1,
        ease: "expo",
        random: true,
        scrollTrigger: {
          trigger: member,
          start: "top 80%",
          end: "top 40%",
        },
      });
    });

    const testimonialsArr = gsap.utils.toArray<HTMLDivElement>(
      ".testimonial-item > p"
    );
    testimonialsArr.forEach((testimonial, t_index) => {
      gsap.from(testimonial, {
        opacity: 0,
        scale: 0.5,
        yPercent: 30,
        transformOrigin: "30% 100%",
        delay: t_index * 0.1,
        duration: 1,
        ease: "expo",
        random: true,
        scrollTrigger: {
          trigger: testimonial,
          start: "top 80%",
          end: "top 40%",
        },
      });
    });
  }, []);
  return <></>;
}
