import { Card, BrainIcon, DNAIcon, Button } from "pipeline-components";
import { GradientText, PeerHelpIcon } from "pipeline-components";
import { FC, JSX } from "react";

const TeamsSection: FC = (): JSX.Element => {
  return (
    <section className="relative z-0 flex w-screen flex-col items-center bg-white p-12 py-20 text-brand-neutral-600">
      <div className="z-0 flex flex-col items-center justify-center pb-12 text-brand-neutral-600">
        <div className="mt-1 text-center text-4xl font-bold text-black">
          Join Our Wonderful <GradientText>Team!</GradientText>
        </div>
        <p className="mt-4 w-full max-w-[40rem] text-center">
          Seeking motivated individuals for diverse roles in our team. Open to
          students, professionals, and volunteers eager to contribute to our
          success. Explore opportunities and embrace challenges.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-7">
        <Card
          title="Web/Graphics Designer"
          content="Join us if you love crafting visually
                 stunning websites and graphics.
                 Use your creative flair to design
                 captivating digital experiences that
                 leave a lasting impression."
          icon={<PeerHelpIcon />}
          button={
            <Button className="rounded-full font-poppins">Apply Now</Button>
          }
        />
        <Card
          title="Social Media"
          content="Be the voice of our brand across
                 social platforms! Join our team to
                 create engaging content, interact
                 with our audience, and drive
                 meaningful connections with our
                 community."
          icon={<DNAIcon />}
          button={
            <Button className="rounded-full font-poppins">Apply Now</Button>
          }
        />
        <Card
          title="Academics"
          content="Dive into the world of knowledge
               with us! you'll contribute your
               expertise in physics, chemistry,
               math, or biochemistry. Help us
                develop engaging academic
                resources and workshops."
          icon={<BrainIcon />}
          button={
            <Button className="rounded-full font-poppins">Apply Now</Button>
          }
        />
      </div>
    </section>
  );
};

export default TeamsSection;
