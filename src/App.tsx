import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { StarField } from "./components/StarField";

export default function App() {
  return (
    <div className="min-h-svh lg:min-h-screen flex flex-col relative overflow-x-hidden bg-zinc-950">
      {/* Unified Continuous Deep-Space Canvas (seamless across all sections) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Architectural Dot Grid */}
        <div className="absolute inset-0 bg-engineering-grid opacity-55" />

        {/* Continuous Interactive Starfield */}
        <div className="absolute inset-0">
          <StarField />
        </div>

        {/* Continuous Ambient Galaxy Glows */}
        <div
          className="absolute top-0 right-0 w-[550px] lg:w-[800px] h-[550px] lg:h-[700px] opacity-45"
          style={{
            background:
              "radial-gradient(circle at 100% 0%, rgba(56, 189, 248, 0.14) 0%, rgba(59, 130, 246, 0.04) 48%, transparent 72%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] lg:w-[750px] h-[500px] lg:h-[650px] opacity-40"
          style={{
            background:
              "radial-gradient(circle at 0% 100%, rgba(99, 102, 241, 0.15) 0%, rgba(56, 189, 248, 0.04) 50%, transparent 72%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[950px] h-[500px] lg:h-[700px] opacity-35"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.04) 45%, transparent 70%)",
          }}
        />
      </div>

      <Navbar />

      <main className="flex-1 flex flex-col relative z-10">
        <Hero />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}