import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col relative overflow-x-hidden">
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