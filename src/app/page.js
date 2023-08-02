import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import WhyChoose from '@/components/WhyChoose';
import Robot from '@/components/Robot';
import Support from '@/components/Support';
import Workflow from '@/components/Workflow';
import { COLORS, SPACING } from '@/constants/style';
import Talk from '@/components/Talk';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className={`bg-grey min-h-screen w-full`}>
      <div className={`mx-auto max-w-[80%]`}>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Support />
      <Workflow />
      <WhyChoose />
      <Robot />
      <Talk />
      <Footer />
    </div>
  );
}
