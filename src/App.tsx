import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export function App() {
  return (
  
    <div className="min-h-dvh bg-zinc-950 text-zinc-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300 relative overflow-x-hidden">
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

export default App;