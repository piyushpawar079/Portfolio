"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Sparkles, Code, Coffee, MapPin, Calendar } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  // Adjusted scroll ranges - fade starts much later and is more gradual
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600, 1000], [1, 1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing animation for the name
  const name = "Piyush Pawar";
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(prev => prev + name[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, name]);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity, 
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="py-20 md:py-28 px-4 md:px-8 max-w-7xl mx-auto relative z-10"
        style={{ y, opacity }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >

            {/* Enhanced greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <p className="text-lg text-muted-foreground font-medium">
                👋 Hello there! I'm
              </p>
            </motion.div>

            {/* Enhanced main heading with typing effect */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                {displayedName}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-primary"
                >
                  |
                </motion.span>
              </span>
            </motion.h1>

            {/* Enhanced role description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-4"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-2">
                Full Stack Developer
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>Thane, Maharashtra, India</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
            >
              I craft beautiful, responsive web applications with modern technologies. 
              Passionate about creating seamless user experiences and scalable solutions.
            </motion.p>

            {/* Enhanced action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button 
                size="lg" 
                asChild
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/#projects" className="flex items-center gap-2">
                  <Code className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  View My Work
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group backdrop-blur-sm"
              >
                <Link href="/#contact" className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Let's Talk
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full">
              {/* Animated background shapes */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/10 rounded-3xl transform rotate-6 scale-95 z-0"
                animate={{ rotate: [6, -2, 6] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-secondary/15 via-primary/10 to-accent/20 rounded-3xl transform -rotate-3 scale-105 z-0"
                animate={{ rotate: [-3, 4, -3] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              {/* Main image container */}
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden z-10 shadow-2xl border border-border/20"
                whileHover={{ 
                  scale: 1.02,
                  rotate: 1,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-20" />
                <Image
                  src="/Profile_Image.jpg"
                  alt="Your Name"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Floating badge */}
                <motion.div
                  className="absolute bottom-4 left-4 z-30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="bg-background/90 backdrop-blur-md rounded-full px-3 py-2 border border-border/50 shadow-lg">
                    <p className="text-xs font-medium text-foreground">
                      🚀 Building the future, one line at a time
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 z-20"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <Code className="h-8 w-8 text-primary" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 z-20"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
              </motion.div>
        </div>
      </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;