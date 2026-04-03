import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Services from '../components/Services';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      <Skills />
      <Services />
      <Footer />
    </>
  );
}

export default Home;