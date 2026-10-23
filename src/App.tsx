import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { ModernBackground } from "./components/ModernBackground";

// Note: history.scrollRestoration is set inline in index.html (before React mounts).
export default function App() {
  return (
    <div className="min-h-svh flex flex-col relative overflow-x-clip bg-zinc-950">
      {/* Continuous Deep Space Galaxy Canvas */}
      <ModernBackground />

      <Navbar />

      <main className="flex-1 flex flex-col relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>

      <Footer />
    </div>
  );
}
