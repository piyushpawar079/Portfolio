"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Globe, ArrowRight, Star, Eye, GitFork, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Tech stack colors for better visual appeal
  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      // 'React': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      // 'Next.js': 'bg-black/10 text-gray-700 border-gray-500/20',
      // 'TypeScript': 'bg-blue-600/10 text-blue-700 border-blue-600/20',
      // 'JavaScript': 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20',
      // 'Python': 'bg-green-500/10 text-green-700 border-green-500/20',
      // 'Node.js': 'bg-green-600/10 text-green-800 border-green-600/20',
      // 'MongoDB': 'bg-green-700/10 text-green-800 border-green-700/20',
      // 'PostgreSQL': 'bg-blue-700/10 text-blue-800 border-blue-700/20',
      // 'Tailwind': 'bg-cyan-500/10 text-cyan-700 border-cyan-500/20',
      'default': 'bg-primary/10 text-primary border-primary/20'
    };
    return colors[tech] || colors.default;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full group"
    >
      <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-br from-background via-background to-muted/20 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm" />
        <div className="absolute inset-[1px] bg-background rounded-lg" />
        
        {/* Enhanced image section */}
        <div className="relative h-48 w-full overflow-hidden group/image z-10">
          {/* Shimmer loading effect */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
          )}
          
          {/* Image overlay with enhanced effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-all duration-500 z-20" />
          
          {/* Interactive overlay */}
          <motion.div 
            className="absolute inset-0 bg-primary/20 flex items-center justify-center z-30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-3">
              <Link href={`/projects/${project.slug}`} target="_blank">
                <Button 
                  className="backdrop-blur-md bg-background/90 text-foreground border border-border/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
                  size="sm"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </Link>
              {project.liveUrl && (
                <Button 
                  size="sm"
                  className="backdrop-blur-md bg-primary/90 hover:bg-primary transition-all duration-300 shadow-lg"
                  asChild
                >
                  <Link href={project.liveUrl} target="_blank">
                    <Globe className="h-4 w-4 mr-2" />
                    Live Link
                  </Link>
                </Button>
              )}
            </div>
          </motion.div>

          {/* Project image */}
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-all duration-700 ease-out ${
              isHovered ? 'scale-110 brightness-110' : 'scale-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 z-30">
              <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-0 shadow-lg">
                <Sparkles className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Enhanced content section */}
        <CardContent className="p-6 flex-1 flex flex-col relative z-10">
          {/* Title with gradient effect */}
          <div className="mb-3">
            <h3 className="text-xl font-bold mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Enhanced description */}
          <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
            {project.description}
          </p>
          
          {/* Enhanced tech stack with colors */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 4).map((tech, techIndex) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1 + techIndex * 0.05,
                  duration: 0.3 
                }}
              >
                <Badge 
                  variant="outline" 
                  className={`font-medium text-xs border transition-all duration-300 hover:scale-105 ${getTechColor(tech)}`}
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {project.techStack.length > 4 && (
              <Badge 
                variant="outline" 
                className="font-medium text-xs border-dashed opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                +{project.techStack.length - 4} more
              </Badge>
            )}
          </div>
          
          {/* Enhanced action buttons */}
          <div className="flex gap-3 mt-auto">
            {project.githubUrl && (
              <Button 
                size="sm" 
                variant="outline" 
                asChild
                className="hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-600 transition-all duration-300 group/btn"
              >
                <Link href={project.githubUrl} target="_blank" className="gap-2">
                  <Github className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Code
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button 
                size="sm" 
                asChild
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-md hover:shadow-lg group/btn"
              >
                <Link href={project.liveUrl} target="_blank" className="gap-2">
                  <Globe className="h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Live Link
                </Link>
              </Button>
            )}
            <Button 
              size="sm" 
              variant="ghost" 
              asChild 
              className="ml-auto hover:bg-primary/10 hover:text-primary transition-all duration-300 group/btn"
            >
              <Link href={`/projects/${project.slug}`} className="gap-1" target="_blank">
                Details
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        </CardContent>

        {/* Subtle corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </motion.div>
  );
};

export default ProjectCard;