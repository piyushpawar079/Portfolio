"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ["home", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", id: "home" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-9 pt-3  ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      {/* Gradient overlay for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-50" />
      
      <div className="container mx-auto px-4 relative items-center text-center">
        <div className="pt-2 h-16 items-center text-center justify-between">

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center items-center text-center  px-[40%] ">
            {navItems.map((item) => (
              <Link href={item.href} key={item.name}>
                <Button 
                  variant="ghost" 
                  className={"relative text-base font-medium transition-all duration-300 hover:bg-primary/10 group text-muted-foreground hover:text-foreground"}
                >
                  {item.name}
                  {/* Active indicator */}
                  <span className={"absolute bottom-0 left-1/2 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-2 -translate-x-1/2"} />
                </Button>
              </Link>
            ))}
            <div className="ml-2">
              <ModeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="relative overflow-hidden transition-all duration-300 hover:bg-primary/10"
            >
              <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? "max-h-64 opacity-100 py-4" 
            : "max-h-0 opacity-0 py-0"
        }`}>
          <div className="px-2 bg-background/95 backdrop-blur-xl rounded-lg border border-border/50 shadow-lg">
            <nav className="flex flex-col space-y-1 py-2">
              {navItems.map((item, index) => (
                <Link
                  href={item.href}
                  key={item.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`transform transition-all duration-300 delay-${index * 50}`}
                  style={{ 
                    transform: isMobileMenuOpen 
                      ? "translateY(0) opacity(1)" 
                      : "translateY(-10px) opacity(0)" 
                  }}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-base font-medium transition-all duration-300 hover:bg-primary/10 hover:translate-x-1 ${
                      activeSection === item.id 
                        ? "text-primary bg-primary/5 border-l-2 border-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;