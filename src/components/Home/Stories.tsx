import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const stories = [
  {
    place: "Weliso, Ethiopia",
    story:
      "Following an ISA60 training, four families publicly forgave each other in front of their congregation, demonstrating the transformative power of the program.",
  },
  {
    place: "Kibre Mengist (Adola), Ethiopia",
    story:
      "After participating in AGIR training, a church in Kibre Mengist successfully delivered the training content for ten consecutive Sundays, ensuring a wider reach within their congregation.",
  },
  {
    place: "Arbaminch Sinodos, Ethiopia",
    story:
      "The Arbaminch Sinodos actively delivers ISA60 training programs in various churches and awards certificates upon completion, demonstrating their commitment to spreading the message.",
  },
  {
    place: "Hawassa, Ethiopia",
    story:
      "A church in Hawassa was so impressed with the ISA60 training that they invited the team back to deliver it again, sponsoring eight volunteers to participate. This initiative highlights the positive impact and desire for further growth within the community.",
  },
  {
    place: "Arsi Negele, Ethiopia",
    story:
      "Following ISA60 training in Arsi Negele, 20 church members began faithfully tithing. Additionally, two staff members from the ILLame organization were inspired to tithe after the training, showcasing the program's influence beyond individual participants.",
  },
  {
    place: "Dubai, United Arab Emirates",
    story:
      "An Eritrean woman living in Dubai participated in an online ISA60 training program. The program not only addressed her personal struggles with ethnic hatred but also empowered her to translate the AGIR materials into the Tigray language for free. This act of service, coupled with her plans to organize training sessions in Eritrea and Mekelle, exemplifies the program's far-reaching impact.",
  },
  {
    place: "Ethiopia (Council Office)",
    story:
      "Recognizing the value of ISA60's training on overcoming impotence, the Ethiopian Council Office granted permission for the organization to promote their program on a TV channel free of charge for three months. This significant media exposure demonstrates the growing recognition and support for ISA60's work.",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={stories} direction="right" speed="slow" />
    </div>
  );
}

function Stories() {
  return (
    <div className="p-10 flex flex-col justify-center lg:p-40 items-center gap-10 bg-gray-50">
      {/* text section section */}
      <div className="flex flex-col gap-6 justify-center items-center py-6 ">
        <span className="uppercase tracking-[8px] text-lg text-primary text-center sm:text-start">
          Stories
        </span>
        <h1 className="text-3xl font-bold uppercase text-black text-center">
          Transformational Stories
        </h1>
      </div>
      {/* image section */}
      <div className="flex gap-6 flex-wrap items-center justify-center">
        {/* achievment 1 */}
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
}

export default Stories;
