import { HeroSection } from '@/components/sections/hero-section';
import { BeatsSection } from '@/components/sections/beats-section';
import { VideoclipsSection } from '@/components/sections/videoclips-section';
import { ProductionsSection } from '@/components/sections/productions-section';
import { ContactSection } from '@/components/sections/contact-section';

// Import JSON data
import sectionsData from '@/data/sections.json';
import beatsData from '@/data/beats.json';
import videoclipsData from '@/data/videoclips.json';
import productionsData from '@/data/productions.json';

export default function Home() {
  return (
    <>
      <HeroSection data={sectionsData.hero} />
      
      <BeatsSection 
        data={sectionsData.beats} 
        beats={beatsData} 
      />
      
      <VideoclipsSection 
        data={sectionsData.videoclips} 
        videoclips={videoclipsData} 
      />
      
      <ProductionsSection 
        data={sectionsData.productions} 
        productions={productionsData} 
      />
      
      <ContactSection data={sectionsData.contact} />
    </>
  );
}