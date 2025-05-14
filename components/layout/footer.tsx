import Link from "next/link";
import { Instagram, Youtube, ExternalLink } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card text-card-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <h3 className="text-lg font-bold mb-4">UNDERSTUDIOS</h3>
            <p className="text-muted-foreground mb-4">
              Where talent meets technology to create timeless music. Professional music production studio offering premium beats, videoclips, and full productions.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link 
                href="https://instagram.com/understudios" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="https://youtube.com/understudios" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link 
                href="https://tiktok.com/@understudios" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#beats" className="text-muted-foreground hover:text-primary transition-colors">
                  Beats
                </Link>
              </li>
              <li>
                <Link href="#videoclips" className="text-muted-foreground hover:text-primary transition-colors">
                  Videoclips
                </Link>
              </li>
              <li>
                <Link href="#productions" className="text-muted-foreground hover:text-primary transition-colors">
                  Productions
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Beat Production</li>
              <li className="text-muted-foreground">Music Mixing</li>
              <li className="text-muted-foreground">Mastering</li>
              <li className="text-muted-foreground">Video Production</li>
              <li className="text-muted-foreground">Studio Sessions</li>
            </ul>
          </div>
          
          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">123 Music Avenue</li>
              <li className="text-muted-foreground">Los Angeles, CA 90001</li>
              <li className="text-muted-foreground">info@understudios.com</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} UNDERSTUDIOS. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}