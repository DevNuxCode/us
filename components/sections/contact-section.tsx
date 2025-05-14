"use client";

import { useState } from "react";
import { 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Send 
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    socials: {
      instagram: string;
      youtube: string;
      tiktok: string;
    };
  };
}

export function ContactSection({ data }: ContactSectionProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-md border border-border">
            <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="mr-2">Sending</span>
                    <span className="animate-spin h-4 w-4 border-2 border-current rounded-full border-t-transparent" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    <span className="mr-2">Send Message</span>
                    <Send className="h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p className="text-muted-foreground">{data.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a 
                    href={`mailto:${data.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {data.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a 
                    href={`tel:${data.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {data.phone}
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Connect With Us</h4>
                <div className="flex space-x-5">
                  <a 
                    href={data.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-primary text-foreground hover:text-primary-foreground p-3 rounded-full transition-colors border border-border"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href={data.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-primary text-foreground hover:text-primary-foreground p-3 rounded-full transition-colors border border-border"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a 
                    href={data.socials.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card hover:bg-primary text-foreground hover:text-primary-foreground p-3 rounded-full transition-colors border border-border"
                    aria-label="TikTok"
                  >
                    <FaTiktok className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}