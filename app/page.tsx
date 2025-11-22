import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HorizontalScroll from '@/components/HorizontalScroll';
import AboutSection from '@/components/AboutSection';
// import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ProjectsScrollSection from '@/components/ProjectsScrollSection';
import FuturisticSection from '@/components/FuturisticSection';
import ToolsSkillsSection from '@/components/ToolsSkillsSection';

export default function Home() {
  return (
    <div className=" dark:bg-black">
      <Navbar />
      <HeroSection />
      <FuturisticSection />
      <ToolsSkillsSection />
      <HorizontalScroll />
      <AboutSection />
      <ProjectsScrollSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
