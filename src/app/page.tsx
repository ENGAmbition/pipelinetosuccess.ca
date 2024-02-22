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
    <main className="flex min-h-screen w-screen flex-col">
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
