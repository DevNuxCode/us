import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    backgroundImage: string;
  };
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text animate-in fade-in slide-in-from-bottom-5 duration-1000">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-6 text-gray-200 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            {data.subtitle}
          </p>
          <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300">
            {data.description}
          </p>
          <div className="flex justify-center gap-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            <Button 
              size="lg" 
              className="rounded-full px-8"
              asChild
            >
              <Link href="#beats">{data.cta}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <Link href="#beats" scroll={false}>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <ChevronDown className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
}