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
