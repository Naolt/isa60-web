import OurHistory from "@/components/About/OurHistory";
import OurTeam from "@/components/About/OurTeam";
import WhereWeWork from "@/components/About/WhereWeWork";
import WhoWeAre from "@/components/About/WhoWeAre";

export default function AboutPage() {
  return (
    <div>
      <WhoWeAre />
      <WhereWeWork />
      <OurHistory />
      <OurTeam />
    </div>
  );
}
