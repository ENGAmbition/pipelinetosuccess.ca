import { FC, JSX } from "react";
import { GradientText } from "pipeline-components";

const TestimonialsSection: FC = (): JSX.Element => {
  return (
    <section className="text-brand-neutral-600 relative z-0 flex flex-col items-center bg-white py-20">
      <img
        src="/assets/page-effects/line-effect.svg"
        alt=""
        className="absolute left-0 top-0 -z-10 h-full"
      />
      <h3 className="">Testimonials</h3>
      <div className="mt-1 text-4xl font-bold text-black">
        Voices of{" "}
        <GradientText from="red" to="blue" direction="to-r">
          Success
        </GradientText>
      </div>
      <p className="mt-4 max-w-[40rem] text-center">
        Discover the powerful testimonials from our community, celebrating the
        transformative journey and success our programs inspire.
      </p>

      <div className="mx-32 mt-16 flex flex-col gap-16">
        <div className="flex w-3/5 gap-4">
          <div className="w-36 rounded-full">
            <img
              src="/assets/images/landing/profile-1.jpg"
              alt="Profile of User 1"
              className="w-full"
            />
          </div>
          <div className="from-brand-neutral-950 rounded-lg bg-gradient-to-r via-[#3988F7]  via-30% to-[#52CEE7] p-[0.5px]">
            <div className="relative left-[0.5px] top-[0.5px] rounded-lg bg-white p-4">
              <div className="">
                I had my first day yesterday at the clinic and it was absolutely
                phenomenal. In just a couple of hours I was able to learn some
                of the intricacies in communicating with patients. I just wanted
                to thank you again for this opportunity. It really means a lot
                to me.”
              </div>
              <div className="mt-4 text-right">
                <div className="text-brand-neutral-700 font-bold">Jacob</div>
                <div className="text-brand-neutral-200">02/01/2024</div>
              </div>
              <div className="-translate-x-1/ absolute -left-4 top-0 h-fit text-[7rem] leading-[0.5]">
                “
              </div>
            </div>
          </div>
        </div>

        <div className="ml-auto flex w-3/5 gap-4">
          <div className="from-brand-neutral-950 rounded-lg bg-gradient-to-l via-[#3988F7] via-30% to-[#52CEE7]  p-[0.5px]">
            <div className="relative right-[0.5px] top-[0.5px] rounded-lg bg-white p-4">
              <div className="">
                Our volunteers are fantastic; they're a huge help around the
                clinic, and we absolutely love having them as part of our team.
                Everything is going great with their support—they're truly
                awesome!"
              </div>
              <div className="mt-4 text-right">
                <div className="text-brand-neutral-700 font-bold">Jessica</div>
                <div className="text-brand-neutral-200">02/05/2024</div>
              </div>
              <div className="-translate-x-1/ absolute -left-4 top-0 h-fit text-[7rem] leading-[0.5]">
                “
              </div>
            </div>
          </div>
          <div className="w-36 rounded-full">
            <img
              src="/assets/images/landing/profile-2.jpg"
              alt="Profile of User 2"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
