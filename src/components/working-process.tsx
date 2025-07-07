import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WorkingProcess() {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      // console.log("ScrollTrigger registered:", gsap.plugins);
    }

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
  }, []);
  return (
    <Accordion type="single" collapsible className="space-y-8">
      {[
        {
          title: "Consultation",
          desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
          title: "Research and Strategy Development",
          desc: "After the consultation, our team conducts in-depth market research and competitive analysis. We identify opportunities, audience insights, and trends to craft a clear, data-driven marketing strategy designed to meet your business objectives and maximize your brand's online presence.",
        },
        {
          title: "Implementation",
          desc: "Once the strategy is finalized, we move to implementation. Our team executes targeted campaigns, social media management, content creation, and advertising initiatives to bring your strategy to life while ensuring alignment with your goals and brand identity.",
        },
        {
          title: "Monitoring and Optimization",
          desc: "We closely track the performance of all active campaigns, analyzing engagement, reach, and conversion data. Regular insights allow us to identify what's working and what's not, so we can fine-tune tactics, improve outcomes, and maintain campaign effectiveness consistently.",
        },
        {
          title: "Reporting and Communication",
          desc: "Transparent, clear communication is essential. You'll receive detailed reports on key performance indicators, campaign results, and optimization efforts. Regular updates and strategy reviews ensure you're always informed, involved, and aligned with our ongoing work and marketing outcomes.",
        },
        {
          title: "Continual Improvement",
          desc: "Our work doesn't stop after launch. We consistently analyze new opportunities, market trends, and audience behaviors. Based on evolving data, we refine strategies, test fresh ideas, and introduce enhancements to keep your campaigns dynamic, relevant, and results-driven over time.",
        },
      ].map((step, s_index) => (
        <AccordionItem
          value={step.title}
          key={step.title}
          className="working-process-item border-b-0 bg-stone-100 rounded-4xl md:rounded-[45px] bottom-stroke data-[state=open]:bg-(--tertiary)! p-6 md:py-8 md:px-12 hover:bg-stone-200 divide-y divide-transparent data-[state=open]:divide-stone-950 duration-300"
        >
          <AccordionTrigger className=" theme-h3 items-center hover:no-underline cursor-pointer data-[state=closed]:py-0 duration-500">
            <div className="sm:text-[2em]">
              {(s_index + 1).toString().padStart(2, "0")}
            </div>
            <h3 className="grow max-sm:text-lg!">{step.title}</h3>
          </AccordionTrigger>
          <AccordionContent className="body-18 pt-6">
            {step.desc}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
