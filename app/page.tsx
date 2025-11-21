import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HorizontalScroll from '@/components/HorizontalScroll';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProjectsScrollSection from '@/components/ProjectsScrollSection';

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />
      <HeroSection />
      <HorizontalScroll />
      <AboutSection />
      <ProjectsScrollSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
