"use client";

import { useState, useEffect } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  videoId: string;
  description?: string;
}

export function VideoModal({ 
  isOpen, 
  onClose, 
  title, 
  videoId,
  description
}: VideoModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-background">
        <DialogHeader className="p-6 pb-2">
          <div className="flex justify-between items-start">
            <div>
              <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
              {description && (
                <DialogDescription className="mt-1 text-sm text-muted-foreground">
                  {description}
                </DialogDescription>
              )}
            </div>
            <DialogClose className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-secondary">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="relative pt-[56.25%] w-full">
          <iframe 
            className="absolute top-0 left-0 w-full h-full border-0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}