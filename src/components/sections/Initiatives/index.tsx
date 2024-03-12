import { GradientText } from "pipeline-components";
import { FC, JSX } from "react";

const InitiativesSection: FC = (): JSX.Element => {
  return (
    <section className="bg-brand-neutral-50 relative z-0 py-12">
      <div className="z-0 flex flex-col items-center py-20 text-brand-neutral-600">
        <div className="mt-1 text-4xl font-bold text-black">
          Expanding Horizons: Our <GradientText>Initiatives</GradientText>
        </div>
        <p className="mt-4 max-w-[40rem] text-center">
          Explore our specialized initiatives that seamlessly connect academic
          learning with real-world application, preparing you for professional
          excellence.
        </p>
      </div>

      <div className="flex flex-row items-start justify-around py-12 pb-16">
        <div className="w-[500px] rounded-lg bg-gradient-to-l from-brand-neutral-950 via-[#3988F7] via-30%  to-[#52CEE7] p-[0.8px] ">
          <div className="bg-brand-neutral-50 relative left-[0.8px] top-[0.8px] flex flex-col items-start rounded-lg p-8">
            <div className="flex flex-row items-center">
              <h1 className="pr-4 text-xl font-semibold">Pipeline Workshops</h1>
              <img src="/assets/svgs/initiative-network.svg" />
            </div>

            <p className="text-md pt-2 text-brand-neutral-600">
              Introductory Anki Workshop
            </p>
            <img
              src="/assets/images/landing/initiative-workshop.png"
              className="pt-2"
            />
          </div>
        </div>
        <div className="w-[500px] rounded-lg bg-gradient-to-bl from-[#52CEE7] via-40%  to-[#52CEE7] p-[0.8px]">
          <div className="bg-brand-neutral-50 relative bottom-[0.8px] right-[0.8px] flex flex-col items-center justify-start rounded-lg p-8">
            <img src="/assets/svgs/initiative-trophy.svg" width="40px" />
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
      </div>
    </section>
  );
};

export default InitiativesSection;
