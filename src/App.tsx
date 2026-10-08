import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-svh lg:min-h-screen flex flex-col relative overflow-x-hidden bg-zinc-950">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <Hero />
        <Projects />
        <Skills />
      </main>

      <Footer />
    </div>
  );
}