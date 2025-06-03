import Link from "next/link";
import { Github, Linkedin, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/piyushpawar079",
      icon: Github,
      label: "GitHub",
      hoverColor: "hover:text-purple-400 hover:bg-purple-500/10"
    },
    {
      href: "https://www.linkedin.com/in/piyush-pawar-bb9082297/",
      icon: Linkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400 hover:bg-blue-500/10"
    },
    {
      href: "https://x.com/Piyush_Pawar079",
      icon: X,
      label: "X",
      hoverColor: "hover:text-sky-400 hover:bg-sky-500/10"
    }
  ];

  return (
    <footer className="relative border-t bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-0 w-16 h-16 bg-accent/5 rounded-full blur-xl animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-10 py-12 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Enhanced branding section */}
          <div className="text-center lg:text-left space-y-4">
            <div className="space-y-2">
              <p className="text-lg font-semibold text-foreground">
                Full Stack Developer
              </p>
              <p className="text-sm text-muted-foreground max-w-md">
                Crafting digital experiences with modern technologies and creative solutions
              </p>
            </div>
          </div>

          {/* Enhanced social links */}
          <div className="flex flex-col items-center space-y-4">
            <p className="text-sm font-medium text-muted-foreground">Connect with me</p>
            <div className="flex items-center space-x-2">
              {socialLinks.map(({ href, icon: Icon, label, hoverColor }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "group relative rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg",
                    hoverColor
                  )}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>        
      </div>
    </footer>
  );
};

export default Footer;