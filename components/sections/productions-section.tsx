import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Production {
  id: string;
  title: string;
  artist: string;
  image: string;
  year: number;
  description: string;
  tracks: number;
  highlights: string[];
}

interface ProductionsSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  productions: Production[];
}

export function ProductionsSection({ data, productions }: ProductionsSectionProps) {
  return (
    <section id="productions" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          centered={true}
        />

        <div className="space-y-16 mt-12">
          {productions.map((production, index) => (
            <div 
              key={production.id}
              className={cn(
                "flex flex-col md:flex-row gap-8 items-center",
                index % 2 === 1 && "md:flex-row-reverse"
              )}
            >
              {/* Album Artwork */}
              <div className="flex-shrink-0 w-full md:w-2/5">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
                  <Image
                    src={production.image}
                    alt={production.title}
                    className="object-cover h-full w-full"
                    width={500}
                    height={500}
                  />
                </div>
              </div>

              {/* Album Info */}
              <div className="w-full md:w-3/5">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{production.title}</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  {production.artist} • {production.year} • {production.tracks} Tracks
                </p>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {production.description}
                </p>

                {/* Highlights/Achievements */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {production.highlights.map((highlight, i) => (
                    <Badge key={i} variant="outline" className="px-3 py-1 text-sm">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}