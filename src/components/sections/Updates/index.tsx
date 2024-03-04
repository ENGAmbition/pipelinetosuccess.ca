"use client";

import { Button, GradientText } from "pipeline-components";
import { FC, JSX } from "react";
import BackgroundLineWave from "./BackgroundLineWave";

const UpdatesSection: FC = (): JSX.Element => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-12 p-20">
      <BackgroundLineWave className="absolute left-0 top-0 -z-10" />

      {/**
       * Header
       */}
      <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-xs text-gray-500">Updates</h3>
        <h1 className="text-3xl font-semibold">
          Sign Up Now For <GradientText>Updates!</GradientText>
        </h1>
        <p className="max-w-[40rem] text-gray-500">
          Get the latest news, exclusive offers, and exciting announcements
          delivered straight to your inbox. Join our mailing list now!
        </p>
      </div>

      {/**
       * Input to enter email for signing up for updates
       */}
      <div className="flex h-auto w-full flex-row items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Please enter your email address"
          className="h-12 w-full max-w-72 rounded-md border border-gray-300 p-2 text-sm focus:outline-none"
        />
        <Button
          className="font-poppins h-12 w-full max-w-32 text-sm font-normal"
          onClick={() => {}}
        >
          Join Now
        </Button>
      </div>
    </section>
  );
};

export default UpdatesSection;
