import BackgroundLineWave from "./BackgroundLineWave";
import { GradientText } from "pipeline-components";
import { FC, JSX } from "react";
import TrophySVG from "./TrophySVG";
import Image from "next/image";

const InitiativesSection: FC = (): JSX.Element => {
  return (
    <section className="relative z-0 bg-brand-neutral-50 py-6">
      <div className="z-0 flex flex-col items-center py-20 text-brand-neutral-600">
        <div className="mt-1 text-center text-lg font-bold text-black lg:text-4xl">
          Expanding Horizons: Our <GradientText>Initiatives</GradientText>
        </div>
        <p className="md:text-md mt-4 max-w-[23rem] text-center text-xs md:max-w-[40rem]">
          Explore our specialized initiatives that seamlessly connect academic
          learning with real-world application, preparing you for professional
          excellence.
        </p>
      </div>

      <div className="grid items-center justify-items-center gap-12 pb-4 md:grid-cols-2 md:flex-row md:pb-12">
        <div className="w-[330px] rounded-lg bg-gradient-to-l from-brand-neutral-950 via-[#3988F7] via-30% to-[#52CEE7]  p-[0.8px] md:w-[500px] ">
          <div className="relative left-[0.8px] top-[0.8px] flex flex-col items-start gap-y-2 rounded-lg bg-brand-neutral-50 p-8">
            <div className="flex flex-row items-center">
              <h1 className="pr-4 text-xl font-semibold lg:text-2xl">
                Pipeline Workshops
              </h1>
              <img src="/assets/svgs/initiative-network.svg" />
            </div>

            <p className="text-md pt-2 text-brand-neutral-600 md:text-lg">
              Introductory Anki Workshop
            </p>
            <img
              src="/assets/images/landing/initiative-workshop.png"
              className="pt-2"
            />
          </div>
        </div>
        <div className="w-[330px] rounded-lg bg-gradient-to-bl from-[#52CEE7] via-40% to-[#52CEE7]  p-[0.8px] md:w-[500px]">
          <div className="relative bottom-[0.8px] right-[0.8px] flex flex-col items-center justify-start rounded-lg bg-brand-neutral-50 p-8">
            <img src="/assets/svgs/initiative-trophy.svg" width="40px" />
            <h1 className="pr-4 pt-4 text-xl font-semibold md:text-2xl">
              Upcoming Initiatives
            </h1>
            <p className="text-md mt-4 max-w-[20rem] text-center text-brand-neutral-400 md:text-lg">
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
