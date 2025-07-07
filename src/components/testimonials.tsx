import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { ThemeStarIcon } from "./icons/icons";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  {
    desc: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "Maya Thornton",
    designation: "Marketing Director, Harbor & Co.",
  },
  {
    desc: "Working with Positivus has been a game-changer for our marketing strategy. Since partnering with them, we've experienced noticeable growth in both website engagement and qualified leads. Their proactive team consistently delivers impressive results and always keeps us informed.",
    name: "Elias Griffin",
    designation: "Head of Digital Strategy, Northbound Ventures",
  },
  {
    desc: "Positivus brought clarity and focus to our digital presence. They listened to our goals and created a strategy that exceeded our expectations. The team is attentive, insightful, and genuinely invested in our success. We're extremely happy with the steady improvements we've seen.",
    name: "Priya Deshmukh",
    designation: "Brand Manager, Lumen Creative",
  },
  {
    desc: "Choosing Positivus has been one of the smartest decisions we've made for our online growth. Their team is reliable, knowledgeable, and consistently delivers outstanding service. We've seen an increase in traffic, stronger engagement, and better lead conversions since starting with them.",
    name: "Caleb Moreno",
    designation: "CEO, Wavefront Media",
  },
  {
    desc: "The Positivus team has been incredible to work with. They provide valuable insights, creative strategies, and reliable support. Our website traffic and online visibility have improved dramatically. We recommend them to any business looking for a dependable digital partner.",
    name: "Alina Novak",
    designation: "Growth Marketing Lead, Aurora Labs",
  },
  //   {
  //     desc: "From the start, Positivus demonstrated a clear understanding of our brand and audience. Their creative campaigns and optimization strategies have made a significant difference in our online performance. We value their expertise, clear communication, and consistent support.",
  //     name: "Drew Callahan",
  //     designation: "Co-Founder, Echo Digital",
  //   },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  // useGSAP(() => {
  //   if (typeof window !== "undefined") {
  //     gsap.registerPlugin(ScrollTrigger);
  //     console.log("ScrollTrigger registered:", gsap.plugins);
  //   }
  //   const testimonialsArr = gsap.utils.toArray<HTMLDivElement>(
  //     ".testimonial-item > p"
  //   );
  //   testimonialsArr.forEach((testimonial, t_index) => {
  //     gsap.from(testimonial, {
  //       opacity: 0,
  //       scale: 0.5,
  //       yPercent: 30,
  //       transformOrigin: "30% 100%",
  //       delay: t_index * 0.1,
  //       duration: 1,
  //       ease: "expo",
  //       random: true,
  //       scrollTrigger: {
  //         trigger: testimonial,
  //         start: "top 80%",
  //         end: "top 40%",
  //       },
  //     });
  //   });
  // }, []);
  useEffect(() => {
    if (!api) return;
    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap);
    });
  }, [api]);
  return (
    <Carousel
      opts={{ loop: true }}
      setApi={setApi}
      className="mask-l-from-95% mask-r-from-95%"
    >
      <CarouselContent className="-ms-8 items-stretch">
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.name}
            className="ps-8 basis-full md:basis-1/2"
          >
            <div className="testimonial-item flex flex-col gap-4 px-5 h-full">
              <p className="body-18 grow text-stone-50 border border-(--tertiary) rounded-4xl lg:rounded-[45px] p-8 md:p-12 relative">
                &quot;{testimonial.desc}&quot;
                <div className="size-10 border-b border-s border-inherit bg-stone-900 absolute left-1/5 -translate-x-1/2 translate-y-1/2 bottom-0 -rotate-45"></div>
              </p>
              <div className="flex flex-col items-start w-4/5 ms-auto pt-10">
                <h3 className="theme-h4 text-(--tertiary)">
                  {testimonial.name}
                </h3>
                <h4 className="body-18 text-stone-50">
                  {testimonial.designation}
                </h4>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-2 justify-evenly mt-8">
        <CarouselPrevious className="static translate-0 size-auto p-2 bg-inherit text-white border-0 text-2xl rounded-lg duration-300" />
        <div className="flex items-center gap-4 text-xs">
          {testimonials.map((item, i) => (
            <div className="" key={"star-" + i}>
              <ThemeStarIcon
                className={`duration-500 ${i === current ? "text-(--tertiary)!" : "text-stone-50!"}`}
              />
            </div>
          ))}
        </div>
        <CarouselNext className="static translate-0 size-auto p-2 bg-inherit text-white border-0 text-2xl rounded-lg duration-300" />
      </div>
    </Carousel>
  );
}
