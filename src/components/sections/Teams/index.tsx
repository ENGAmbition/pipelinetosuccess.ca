import Card from "pipeline-components";
import { BrainIcon, DNAIcon, PeerHelpIcon } from "pipeline-components";
import { GradientText } from "pipeline-components";
import { FC, JSX } from "react";

const TeamsSection: FC = (): JSX.Element => {
  return (
  <section>
    <div className="z-0 flex flex-col items-center py-20 text-brand-neutral-600">
      <div className="mt-1 text-4xl font-bold text-black">
        Join Our Wonderful <GradientText>Team!</GradientText>
      </div>
      <p className="mt-4 max-w-[40rem] text-center">
        Seeking motivated individuals for diverse roles in our team. Open to students,
        professionals, and volunteers eager to contribute to our success. Explore
        opportunities and embrace challenges.
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
        icon={<PeerHelpIcon/>}
        buttonText="Apply Now"
      />
      <Card
        title="Social Media"
        content="Be the voice of our brand across
                 social platforms! Join our team to
                 create engaging content, interact
                 with our audience, and drive
                 meaningful connections with our
                 community."
        icon={<DNAIcon/>}
        buttonText="Apply Now"
      />
      <Card
      title="Academics"
      content="Dive into the world of knowledge
               with us! you'll contribute your
               expertise in physics, chemistry,
               math, or biochemistry."
      icon={<BrainIcon/>}
      buttonText="Apply Now"
    />
    </div>
  </section>
  );
};

export default TeamsSection;
