import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Doctor } from './components/Doctor';
import { Services } from './components/Services';
import { Facilities } from './components/Facilities';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Highlights />
      <About />
      <Doctor />
      <Services />
      <Facilities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
