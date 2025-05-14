"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Play } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { VideoModal } from "@/components/ui/video-modal";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/utils";

interface Beat {
  id: string;
  title: string;
  bpm: number;
  key: string;
  tags: string[];
  embedCode: string;
  videoId: string;
  thumbnail: string;
  buyLink: string;
  price: string;
}

interface BeatsSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  beats: Beat[];
}

export function BeatsSection({ data, beats }: BeatsSectionProps) {
  const [selectedBeat, setSelectedBeat] = useState<Beat | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(beats.flatMap((beat) => beat.tags))
  ).sort();

  // Filter beats by selected tag
  const filteredBeats = selectedTag
    ? beats.filter((beat) => beat.tags.includes(selectedTag))
    : beats;

  const openModal = (beat: Beat) => {
    setSelectedBeat(beat);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  return (
    <section id="beats" className="py-20 bg-background">
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

        {/* Beats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBeats.map((beat) => (
            <div
              key={beat.id}
              className={cn(
                "group bg-card rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl",
                "border border-border hover:border-primary/20"
              )}
            >
              {/* Thumbnail with Play Button Overlay */}
              <div 
                className="relative aspect-video cursor-pointer overflow-hidden"
                onClick={() => openModal(beat)}
              >
                <Image
                  src={beat.thumbnail}
                  alt={beat.title}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105 duration-500"
                  width={640}
                  height={360}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="rounded-full bg-primary/90 p-3 transform scale-75 group-hover:scale-100 transition-all">
                    <Play className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Beat Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{beat.title}</h3>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">BPM: {beat.bpm}</p>
                    <p className="text-sm text-muted-foreground">Key: {beat.key}</p>
                  </div>
                  <p className="text-lg font-semibold">{beat.price}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {beat.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    className="flex-1"
                    onClick={() => openModal(beat)}
                  >
                    Preview
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex gap-1"
                    onClick={() => window.open(beat.buyLink, "_blank")}
                  >
                    <span>Buy</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedBeat && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedBeat.title}
          videoId={selectedBeat.videoId}
          description={`${selectedBeat.key} • ${selectedBeat.bpm} BPM`}
        />
      )}
    </section>
  );
}