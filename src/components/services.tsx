import { Button } from "./ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      // console.log("ScrollTrigger registered:", gsap.plugins);
    }
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
  }, []);
  return (
    <div className="grid sm:grid-cols-2 gap-7 xl:gap-10">
      {[
        {
          title: `Search Engine\nOptimization`,
          illustration:
            "/illustrations/tokyo-magnifier-web-search-with-elements 2.webp",
          url: "/",
        },
        {
          title: `Pay-per-click\nAdvertising`,
          illustration:
            "/illustrations/tokyo-selecting-a-value-in-the-browser-window 1.webp",
          url: "/",
        },
        {
          title: `Social Media\nMarketing`,
          illustration:
            "/illustrations/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.webp",

          url: "/",
        },
        {
          title: `Email Marketing`,
          illustration:
            "/illustrations/tokyo-sending-messages-from-one-place-to-another 1.webp",

          url: "/",
        },
        {
          title: `Content Creation`,
          illustration:
            "/illustrations/tokyo-many-browser-windows-with-different-information 1.webp",

          url: "/",
        },
        {
          title: `Analytics &\nTracking`,
          illustration:
            "/illustrations/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.webp",
          url: "/",
        },
      ].map((service, s_index) => {
        const themeRegulator = [
          {
            bg_class: "bg-stone-100",
            text_highlighting: "text-stone-950",
          },
          {
            bg_class: "bg-(--tertiary)",
            text_highlighting: "text-stone-950",
          },
          {
            bg_class: "bg-stone-950",
            text_highlighting: "text-stone-50",
          },
        ];
        return (
          <div
            key={service.title}
            className={`service-item grid lg:grid-cols-2 sm:gap-4 xl:gap-8 justify-between border border-stone-950 p-8 xl:p-12 rounded-4xl md:rounded-[45px] bottom-stroke ${themeRegulator[s_index % themeRegulator.length].bg_class}`}
          >
            <div className="flex flex-col gap-2 items-start justify-between">
              <h3
                className={`theme-h3 ${themeRegulator[s_index % themeRegulator.length].text_highlighting}`}
              >
                {service.title}
              </h3>
              <Button
                className={`max-lg:hidden size-auto body-20 hover:bg-transparent hover:text-stone-700 ${themeRegulator[s_index % themeRegulator.length].text_highlighting}`}
                size="icon"
                variant="ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  className="size-[2.4em]! bg-stone-700 p-0.5 rounded-full text-stone-50"
                  viewBox="0 0 21 21"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.5 13.5v-7h-7m7 0l-8 8"
                    stroke-width="1"
                  />
                </svg>
                Learn more
              </Button>
            </div>
            <div className="rounded-xl grid grid-cols-3 lg:grid-cols-1 lg:place-items-center">
              <div className="lg:hidden grid items-end">
                <Button
                  className={`size-auto w-fit body-20 hover:bg-transparent hover:text-stone-700 ${themeRegulator[s_index % themeRegulator.length].text_highlighting}`}
                  size="icon"
                  variant="ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    className="size-[2.4em]! bg-stone-700 p-0.5 rounded-full text-stone-50"
                    viewBox="0 0 21 21"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.5 13.5v-7h-7m7 0l-8 8"
                      stroke-width="1"
                    />
                  </svg>
                </Button>
              </div>
              <img
                src={encodeURI(service.illustration)}
                alt={service.illustration}
                width={420}
                className="w-full max-lg:col-span-2 aspect-square object-center object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
