import BackgroundLineWave from "./BackgroundLineWave";
import { GradientText } from "pipeline-components";
import { FC, JSX } from "react";
import TrophySVG from "./TrophySVG";
import Image from "next/image";
import NetworkSVG from "./NetworkSVG";

const InitiativesSection: FC = (): JSX.Element => {
  return (
    <section className="bg-brand-neutral-50 relative z-0 flex w-screen flex-col items-center py-6 text-brand-neutral-600">
      <div className="mt-1 text-center text-4xl font-bold text-black">
        Expanding Horizons: Our <GradientText>Initiatives</GradientText>
      </div>
      <p className="mt-4 w-full max-w-[30rem] text-center">
        Explore our specialized initiatives that seamlessly connect academic
        learning with real-world application, preparing you for professional
        excellence.
      </p>

      <div className="mt-16 grid items-center justify-items-center gap-12 pb-4 md:flex-row md:pb-12 lg:grid-cols-2">
        <div className="w-[330px] rounded-lg bg-gradient-to-l from-brand-neutral-950 via-[#3988F7] via-30% to-[#52CEE7]  p-[0.8px] sm:w-[500px] ">
          <div className="bg-brand-neutral-50 relative left-[0.8px] top-[0.8px] flex flex-col items-start gap-y-2 rounded-lg p-8">
            <div className="flex flex-row items-center">
              <h1 className="pr-4 text-xl font-semibold lg:text-2xl">
                Pipeline Workshops
              </h1>
              <NetworkSVG />
            </div>

            <p className="text-md pt-2 text-brand-neutral-600 md:text-lg">
              Introductory Anki Workshop
            </p>
            <Image
              src="/assets/images/landing/initiative-workshop.png"
              className="pt-2"
              width={500}
              height={500}
              alt="Workshop Image"
            />
          </div>
        </div>

        <div className="w-[330px] rounded-lg bg-gradient-to-bl from-[#52CEE7] via-40% to-[#52CEE7]  p-[0.8px] sm:w-[500px]">
          <div className="bg-brand-neutral-50 relative bottom-[0.8px] right-[0.8px] flex flex-col items-center justify-start rounded-lg p-8">
            <TrophySVG />
            <h1 className="pr-4 pt-4 text-xl font-semibold md:text-2xl">
              Upcoming Initiatives
            </h1>
            <p className="text-md text-brand-neutral-400 mt-4 max-w-[20rem] text-center md:text-lg">
              We plan to host academic contests, to encourage scholarship in the
              basic sciences and recognize academic excellence at the University
              of Guelph. COMING WINTER 2024
            </p>
            <button className="text-md mt-12 rounded-lg bg-brand-neutral-600 px-6 py-4">
              Coming Winter 2024
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
