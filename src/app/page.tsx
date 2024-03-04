import {
  HeroSection,
  ProgramsSection,
  AboutSection,
  InitiativesSection,
  TestimonialsSection,
  TeamsSection,
  UpdatesSection,
  FooterSection,
} from "@/components/sections";

//! I took out max-w-[90rem] out of main ClassName in order to fill up the background color
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-fit flex-col">
      <HeroSection />
      <ProgramsSection />
      <AboutSection />
      <InitiativesSection />
      <TestimonialsSection />
      <TeamsSection />
      <UpdatesSection />
      <FooterSection />
    </main>
  );
}
