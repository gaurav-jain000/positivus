import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "./ui/button";
export default function Team() {
  useGSAP(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      // console.log("ScrollTrigger registered:", gsap.plugins);
    }
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
  }, []);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
      {[
        {
          name: "John Smith",
          designation: "CEO and Founder",
          avatar_url:
            "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=120&h=120&fit=crop",
          desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
          linkedin_url: "/",
        },
        {
          name: "Jane Doe",
          designation: "Director of Operations",
          avatar_url:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=120&h=120&fit=crop",
          desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
          linkedin_url: "/",
        },
        {
          name: "Michael Brown",
          designation: "Senior SEO Specialist",
          avatar_url:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&h=120&fit=crop",
          desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
          linkedin_url: "/",
        },
        {
          name: "Emily Johnson",
          designation: "PPC Manager",
          avatar_url:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=120&h=120&fit=crop",
          desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
          linkedin_url: "/",
        },
        {
          name: "Brian Williams",
          designation: "Social Media Specialist",
          avatar_url:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=120&h=120&fit=crop",
          desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
          linkedin_url: "/",
        },
        {
          name: "Sarah Kim",
          designation: "Content Creator",
          avatar_url:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&h=120&fit=crop",
          desc: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
          linkedin_url: "/",
        },
      ]
        .slice(0, 6)
        .map((member) => (
          <div
            key={member.name}
            className="team-member-item p-8 flex flex-col gap-7 bottom-stroke bg-stone-50 rounded-4xl md:rounded-[45px] border border-current"
          >
            <div className="flex gap-4 items-end relative">
              <div className="aspect-square size-[100px] relative isolate">
                <div
                  className={`absolute top-1 left-1 size-full bg-current [clip-path:path("M84.631_48.9117C117.473_86.3213_87.1455_116.649_49.7359_83.8068C12.3263_116.649_-18.0016_86.3213_14.8408_48.9117C-18.0016_11.5021_12.3263_-18.8258_49.7359_14.0166C87.1455_-18.8258_117.473_11.5021_84.631_48.9117Z")]`}
                />
                <div
                  className={`[clip-path:path("M84.631_48.9117C117.473_86.3213_87.1455_116.649_49.7359_83.8068C12.3263_116.649_-18.0016_86.3213_14.8408_48.9117C-18.0016_11.5021_12.3263_-18.8258_49.7359_14.0166C87.1455_-18.8258_117.473_11.5021_84.631_48.9117Z")] size-full bg-(--tertiary) bg-blend-multiply brightness-125`}
                  style={{ backgroundImage: `url(${member.avatar_url})` }}
                >
                  {/* <img
                  src={member.avatar_url}
                  alt={member.name}
                  className={`object-center object-cover`}
                /> */}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="theme-h4 leading-[1.3em]">{member.name}</h3>
                <p className="body-18 leading-[1.3em]">{member.designation}</p>
              </div>
              <Button
                className="text-(--tertiary) rounded-full absolute right-0 top-0"
                size="icon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="4"
                    cy="4"
                    r="2"
                    fill="currentColor"
                    fill-opacity="0"
                  >
                    <animate
                      fill="freeze"
                      attributeName="fill-opacity"
                      dur="0.15s"
                      values="0;1"
                    />
                  </circle>
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                  >
                    <path
                      stroke-dasharray="12"
                      stroke-dashoffset="12"
                      d="M4 10v10"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.15s"
                        dur="0.2s"
                        values="12;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="12"
                      stroke-dashoffset="12"
                      d="M10 10v10"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.45s"
                        dur="0.2s"
                        values="12;0"
                      />
                    </path>
                    <path
                      stroke-dasharray="24"
                      stroke-dashoffset="24"
                      d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
                    >
                      <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.65s"
                        dur="0.2s"
                        values="24;0"
                      />
                    </path>
                  </g>
                </svg>
              </Button>
            </div>
            <div className="h-px bg-current" />
            <p className="line-clamp-4 body-18">{member.desc}</p>
          </div>
        ))}
    </div>
  );
}
