import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import { ModernBackground } from "./components/ModernBackground";

export default function App() {
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <div className="min-h-svh lg:min-h-screen flex flex-col relative overflow-x-hidden bg-zinc-950">
      {/* Continuous Deep Space Galaxy Canvas */}
      <ModernBackground />

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