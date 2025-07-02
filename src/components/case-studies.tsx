import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function CaseStudies() {
  return (
    <Carousel opts={{ loop: true }} className="mask-l-from-90% mask-r-from-90%">
      <CarouselContent className="-ms-8">
        {[
          {
            desc: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
            url: "/learn-html",
          },
          {
            desc: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
            url: "/learn-css",
          },
          {
            desc: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
            url: "/learn-js",
          },
          {
            desc: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
            url: "/learn-ts",
          },
          {
            desc: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
            url: "/learn-tailwind",
          },
          {
            desc: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
            url: "/learn-react",
          },
        ].map((study) => (
          <CarouselItem key={study.url} className="ps-8 basis-1/3">
            <div className="flex flex-col gap-4 p-2">
              <p className="body-16 grow line-clamp-4 text-stone-50">
                {study.desc}
              </p>
              <a href={study.url} className="text-(--tertiary)">
                Learn more
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-2 justify-center mt-8">
        <CarouselPrevious className="static translate-0 size-auto p-2 bg-(--tertiary) text-white border-0 text-xl rounded-lg duration-300" />
        <CarouselNext className="static translate-0 size-auto p-2 bg-(--tertiary) text-white border-0 text-xl rounded-lg duration-300" />
      </div>
    </Carousel>
  );
}
