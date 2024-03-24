import { Button } from "pipeline-components"
import { GradientText } from "pipeline-components";
import { FC, JSX } from "react";

const ProgramsSection: FC = (): JSX.Element => {
  return (
  <section className="bg-brand-neutral-50 relative z-0 py-6">
    <div className="z-0 flex flex-col items-center py-20 text-brand-neutral-600">
      <div className="mt-1 text-4xl font-bold text-black">
        Explore Our <GradientText>Programs!</GradientText>
      </div>
      <p className="mt-4 max-w-[40rem] text-center">
        Discover the possibilities within our exclusive PIPELINE programs, each tailored to
        bridge the gap between academic theory and professional practice.
      </p>
    </div>
    
    <div className="flex-col">

      <div className="flex justify-center">
        <img src="/images/Programs/MCAT.png" className="w-[489px]"/>
        <div className="flex-initial">
          <h1 className="text-xl font-bold text-black">
            MCAT Mastery Sessions at Guelph
          </h1>
          <p className="mt-2 max-w-[40rem] text-brand-neutral-600">
            Begin MCAT prep early at MCAT@Guelph! Our current leads are content
            experts or high achievers on the MCAT (90+ percentile, including a
            top scorer). Each session costs only $2. Check our <GradientText>schedule</GradientText> for
            Upcoming sessions.
          </p>
          <Button className="font-brand-neutral text-black">
            Apply Now
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <img src="/images/Programs/Line.png"/>
      </div>

      <div className="flex mt-10 justify-center">
      <img src="/images/Programs/Clinical Experience.png" className="w-[489px]"/>
        <div className="flex-initial">
          <h1 className="text-xl font-bold text-black">
            Pipeline to Clinical Experience
          </h1>
          <p className="mt-2 max-w-[40rem] text-brand-neutral-600">
            We connect students to volunteer opportunities in local healthcare
            clinics in Guelph. Volunteers get training and experience with
            entry-level clinical tasks, and learn about the day-to-day
            operation of a healthcare clinic.
          </p>
          <Button className="font-brand-neutral text-black">
            Apply Now
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <img src="/images/Programs/Line.png"/>
      </div>

      <div className="flex mt-10 justify-center">
      <img src="/images/Programs/Pipeline Research.png" className="w-[489px]"/>
        <div className="flex-initial">
          <h1 className="text-xl font-bold text-black">
            Pipeline to Research
          </h1>
          <p className="mt-2 max-w-[40rem] text-brand-neutral-600">
            We link first and second year students to research opportunities in
            various departments, aiming to provide early research experience
            and exposure in their university career.
          </p>
          <Button className="font-brand-neutral text-black">
            Apply Now
          </Button>
        </div>
      </div>

    </div>
  </section>
  );
};

export default ProgramsSection;
