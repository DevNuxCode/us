"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { VideoModal } from "@/components/ui/video-modal";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

interface Videoclip {
  id: string;
  title: string;
  artist: string;
  tags: string[];
  embedCode: string;
  videoId: string;
  thumbnail: string;
  year: number;
  description: string;
}

interface VideoclipsSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  videoclips: Videoclip[];
}

export function VideoclipsSection({ data, videoclips }: VideoclipsSectionProps) {
  const [selectedClip, setSelectedClip] = useState<Videoclip | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(videoclips.flatMap((clip) => clip.tags))
  ).sort();

  // Filter videoclips by selected tag
  const filteredClips = selectedTag
    ? videoclips.filter((clip) => clip.tags.includes(selectedTag))
    : videoclips;

  const openModal = (clip: Videoclip) => {
    setSelectedClip(clip);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <section id="videoclips" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          centered={true}
        />

        {/* Tags Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {allTags.map((tag) => (
            <Tag
              key={tag}
              active={selectedTag === tag}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>

        {/* Videoclips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClips.map((clip) => (
            <div
              key={clip.id}
              className={cn(
                "group bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                "border border-border cursor-pointer"
              )}
              onClick={() => openModal(clip)}
            >
              {/* Thumbnail with Play Button Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={clip.thumbnail}
                  alt={clip.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  width={640}
                  height={360}
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="rounded-full bg-primary/90 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Play className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5">
                <div className="flex justify-between mb-1">
                  <h3 className="text-xl font-bold line-clamp-1">{clip.title}</h3>
                  <span className="text-sm text-muted-foreground">{clip.year}</span>
                </div>
                <p className="text-muted-foreground mb-3">By {clip.artist}</p>
                <p className="text-sm line-clamp-2 mb-4">{clip.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {clip.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedClip && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedClip.title}
          videoId={selectedClip.videoId}
          description={`By ${selectedClip.artist} • ${selectedClip.year}`}
        />
      )}
    </section>
  );
}