import Image from "next/image";
import { Button } from "pipeline-components";
import { GradientText } from "pipeline-components";
import { FC, JSX } from "react";

const ProgramsSection: FC = (): JSX.Element => {
  return (
    <section className="bg-brand-neutral-50 flex w-screen flex-col p-12">
      {/**
       *
       * Header
       *
       */}
      <div className="z-0 flex w-full flex-col items-center gap-4 py-12 text-brand-neutral-600">
        <div className="text-4xl font-bold text-black">
          Explore Our <GradientText>Programs!</GradientText>
        </div>
        <p className="max-w-[40rem] text-center">
          Discover the possibilities within our exclusive PIPELINE programs,
          each tailored to bridge the gap between academic theory and
          professional practice.
        </p>
      </div>

      {/**
       *
       * Programs
       *
       */}
      <div className="flex w-full flex-col justify-center gap-10">
        {/**
         *
         * MCAT Mastery Sessions at Guelph
         *
         */}
        <div className="grid w-full grid-cols-1 gap-2 p-4 sm:grid-cols-2">
          <Image
            src="/images/Programs/MCAT.png"
            width={489}
            height={300}
            alt="MCAT Image"
            className="mt-1 w-3/4 sm:w-full"
          />
          <div className="flex w-full max-w-[40rem] flex-initial flex-col gap-1">
            <h1 className="text-xl font-bold text-black">
              MCAT Mastery Sessions at Guelph
            </h1>
            <p className="text-sm text-brand-neutral-600">
              Begin MCAT prep early at MCAT@Guelph! Our current leads are
              content experts or high achievers on the MCAT (90+ percentile,
              including a top scorer). Each session costs only $2. Check our{" "}
              <GradientText>schedule</GradientText> for Upcoming sessions.
            </p>
            <Button className="font-brand-neutral mt-2 w-fit">Apply Now</Button>
          </div>
        </div>

        <hr className="border-brand-neutral-100 border-t-2" />

        {/**
         *
         * Pipeline to Clinical Experience
         *
         */}
        <div className="grid w-full grid-cols-1 gap-2 p-4 sm:grid-cols-2">
          <Image
            src="/images/Programs/Clinical Experience.png"
            width={489}
            height={300}
            alt="Clinical Experience Image"
            /* The image has some whitespace at the top. We'll use -mt-2 to offset it. */
            className="-mt-2 w-3/4 sm:w-full"
          />

          <div className="flex w-full max-w-[40rem] flex-initial flex-col gap-1">
            <h1 className="text-xl font-bold text-black">
              Pipeline to Clinical Experience
            </h1>
            <p className="text-sm text-brand-neutral-600">
              We connect students to volunteer opportunities in local healthcare
              clinics in Guelph. Volunteers get training and experience with
              entry-level clinical tasks, and learn about the day-to-day
              operation of a healthcare clinic.
            </p>
            <Button className="font-brand-neutral mt-2 w-fit">Apply Now</Button>
          </div>
        </div>

        <hr className="border-brand-neutral-100 border-t-2" />

        {/**
         *
         * Pipeline to Research
         *
         */}
        <div className="grid w-full grid-cols-1 gap-2 p-4 sm:grid-cols-2">
          <Image
            src="/images/Programs/Pipeline Research.png"
            width={489}
            height={300}
            alt="Pipeline Research Image"
            /* The image has some whitespace at the top. We'll use -mt-2 to offset it. */
            className="-mt-2 w-3/4 sm:w-full"
          />

          <div className="flex w-full max-w-[40rem] flex-initial flex-col gap-1">
            <h1 className="text-xl font-bold text-black">
              Pipeline to Research
            </h1>
            <p className="text-sm text-brand-neutral-600">
              We link first and second year students to research opportunities
              in various departments, aiming to provide early research
              experience and exposure in their university career.
            </p>
            <Button className="font-brand-neutral mt-2 w-fit">Apply Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
