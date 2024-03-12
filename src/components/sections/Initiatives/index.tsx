import BackgroundLineWave from "./BackgroundLineWave";
import { GradientText } from "pipeline-components";
import { FC, JSX } from "react";
import TrophySVG from "./TrophySVG";
import Image from "next/image";

const InitiativesSection: FC = (): JSX.Element => {
  const LeftCard = () => (
    <>
      {/**
       * Gradient Border
       */}
      <div className="w-full max-w-[500px] rounded-lg bg-gradient-to-l from-brand-neutral-950 via-[#3988F7] via-30%  to-[#52CEE7]">
        {/**
         * Actual content inside the card.
         */}
        <div className="bg-brand-neutral-50 relative left-[0.8px] top-[0.8px] flex flex-col items-start rounded-lg p-8">
          <h1 className="pr-4 text-xl font-semibold">Pipeline Workshops</h1>
          <p className="text-md pt-2 text-brand-neutral-600">
            Introductory Anki Workshop
          </p>
          <Image
            src="/images/initiatives/workshop.png"
            className="pt-2"
            width={300}
            height={200}
            alt="Workshop Image"
          />
        </div>
      </div>
    </>
  );

  const RightCard = () => (
    <>
      {/**
       * Gradient Border
       */}
      <div className="w-full max-w-[500px] rounded-lg bg-gradient-to-bl from-[#52CEE7] via-40% to-[#52CEE7]">
        {/**
         * Actual content inside the card.
         */}
        <div className="bg-brand-neutral-50 relative bottom-[0.8px] right-[0.8px] flex flex-col items-center justify-start rounded-lg p-8">
          <TrophySVG />

          <h1 className="pr-4 pt-4 text-xl font-semibold">
            Upcoming Initiatives
          </h1>
          <p className="text-brand-neutral-400 mt-4 max-w-[20rem] text-center">
            We plan to host academic contests, to encourage scholarship in the
            basic sciences and recognize academic excellence at the University
            of Guelph. COMING WINTER 2024
          </p>
          <button className="bg-brand-neutral-400 text-md mt-12 rounded-lg px-6 py-4">
            Coming Winter 2024
          </button>
        </div>
      </div>
    </>
  );

  return (
    <section className="bg-brand-neutral-50 relative z-0 w-full px-12 py-12">
      <BackgroundLineWave className="absolute right-0 top-0 -z-10" />

      <div className="z-0 flex w-full flex-col items-center gap-4 py-20">
        <h1 className="text-center text-4xl font-bold text-black">
          Expanding Horizons: Our <GradientText>Initiatives</GradientText>
        </h1>
        <p className="w-full max-w-[40rem] text-center text-brand-neutral-600">
          Explore our specialized initiatives that seamlessly connect academic
          learning with real-world application, preparing you for professional
          excellence.
        </p>
      </div>

      <div className="flex flex-row items-start justify-around">
        <LeftCard />
        <RightCard />
      </div>
    </section>
  );
};

export default InitiativesSection;
