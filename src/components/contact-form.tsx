import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import ThemeButton from "./theme-button";
import { Button } from "./ui/button";

export default function ContactForm() {
  return (
    <form action="" className="flex flex-col gap-6 md:gap-10">
      <RadioGroup className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="hi"
            id="hi"
            className="size-6 accent-(--tertiary)!"
          />
          <label htmlFor="hi">Say Hi</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem
            value="quote"
            id="quote"
            className="size-6 accent-(--tertiary)!"
          />
          <label htmlFor="quote">Get a Quote</label>
        </div>
      </RadioGroup>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name*</label>
        <Input
          id="name"
          type="text"
          placeholder="Loki Odinson"
          className=" border-stone-950 bg-stone-50 py-6 px-8 body-18 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email*</label>
        <Input
          id="email"
          type="email"
          placeholder="loki.odinson@asgard.com"
          className=" border-stone-950 bg-stone-50 py-6 px-8 body-18 rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message*</label>
        <Textarea
          className="h-44 border-stone-950 bg-stone-50 py-6 px-8 body-18 rounded-lg"
          id="message"
          placeholder="Hii Phineas, whatcha doin'?"
        />
      </div>
      <Button
        size="lg"
        className="py-3 px-5 lg:py-4 lg:px-9 size-auto rounded-lg bg-stone-950"
      >
        Send Message
      </Button>
    </form>
  );
}
