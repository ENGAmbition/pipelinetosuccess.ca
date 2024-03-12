import { FC, JSX } from "react";
import { GradientText } from "pipeline-components";
import BackgroundLineWave from "./BackgroundLineWave";
import Image from "next/image";

const TestimonialsSection: FC = (): JSX.Element => {
  return (
    <section className="relative z-0 flex h-fit w-full flex-col items-center bg-white py-20 text-brand-neutral-600">
      <BackgroundLineWave className="absolute left-0 top-0 -z-10" />

      <h3 className="">Testimonials</h3>
      <div className="mt-1 text-4xl font-bold text-black">
        Voices of <GradientText>Success</GradientText>
      </div>
      <p className="mt-4 max-w-[40rem] text-center">
        Discover the powerful testimonials from our community, celebrating the
        transformative journey and success our programs inspire.
      </p>

      <div className="mx-32 mt-16 flex flex-col gap-16">
        <div className="flex w-3/5 gap-4">
          <div className="w-36 rounded-full">
            <Image
              src="/images/testimonials/profile-1.jpg"
              alt="Profile of User 1"
              className="w-full"
              width={100}
              height={100}
            />
          </div>
          <div className="rounded-lg bg-gradient-to-r from-brand-neutral-950 via-[#3988F7]  via-30% to-[#52CEE7] p-[0.5px]">
            <div className="relative left-[0.5px] top-[0.5px] rounded-lg bg-white p-4">
              <div className="">
                I had my first day yesterday at the clinic and it was absolutely
                phenomenal. In just a couple of hours I was able to learn some
                of the intricacies in communicating with patients. I just wanted
                to thank you again for this opportunity. It really means a lot
                to me.”
              </div>
              <div className="mt-4 text-right">
                <div className="font-bold text-brand-neutral-700">Jacob</div>
                <div className="text-brand-neutral-200">02/01/2024</div>
              </div>
              <div className="-translate-x-1/ absolute -left-4 top-0 h-fit text-[7rem] leading-[0.5]">
                <GradientText>“</GradientText>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-auto flex w-3/5 gap-4">
          <div className="rounded-lg bg-gradient-to-l from-brand-neutral-950 via-[#3988F7] via-30% to-[#52CEE7]  p-[0.5px]">
            <div className="relative right-[0.5px] top-[0.5px] rounded-lg bg-white p-4">
              <div className="">
                Our volunteers are fantastic; they're a huge help around the
                clinic, and we absolutely love having them as part of our team.
                Everything is going great with their support—they're truly
                awesome!"
              </div>
              <div className="mt-4 text-right">
                <div className="font-bold text-brand-neutral-700">Jessica</div>
                <div className="text-brand-neutral-200">02/05/2024</div>
              </div>
              <div className="-translate-x-1/ absolute -left-4 top-0 h-fit text-[7rem] leading-[0.5]">
                <GradientText>“</GradientText>
              </div>
            </div>
          </div>
          <div className="w-36 rounded-full">
            <Image
              src="/images/testimonials/profile-2.jpg"
              alt="Profile of User 2"
              className="w-full"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
