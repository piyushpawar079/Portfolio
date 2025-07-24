'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Github, Globe, ExternalLink, Calendar, Users, Zap, Play, Pause } from 'lucide-react';
import Image from 'next/image';
import TechBadge from '@/components/tech-badge';
import { useState, useRef } from 'react';
import { Project } from '@/types/project';

export default function ProjectPageClient({ project }: { project: Project}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);


  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-10 px-10 ">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5" />
        <div className="relative container mx-auto px-4 py-12">

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-700 to-slate-600 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Link href={project.liveUrl} target="_blank" className="gap-2">
                      <Globe className="h-5 w-5" />
                      Live Link
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
                
                {project.githubUrl && (
                  <Button size="lg" asChild className="border-2 transition-all duration-300">
                    <Link href={project.githubUrl} target="_blank" className="gap-2 text-primary">
                      <Github className="h-5 w-5" />
                      Source Code
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>

              {/* Tech Stack */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <div key={tech} className="group">
                      <TechBadge name={tech} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20 scale-110" />
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="aspect-video relative">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Demo Video Section - Only show if demoVideo exists */}
          {project.demoVideo && (
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Project Demo</h2>
                <p className="text-slate-600 dark:text-slate-400">Watch the project in action</p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 scale-105" />
                <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="relative aspect-video">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      onEnded={handleVideoEnded}
                      poster={project.image}
                    >
                      <source src={project.demoVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Controls Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={toggleVideo}
                        size="lg"
                        className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300"
                      >
                        {isPlaying ? (
                          <Pause className="h-6 w-6" />
                        ) : (
                          <Play className="h-6 w-6 ml-1" />
                        )}
                      </Button>
                    </div>
                    
                    {/* Play/Pause Button - Always visible when paused */}
                    {!isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                          onClick={toggleVideo}
                          size="lg"
                          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 shadow-2xl"
                        >
                          <Play className="h-8 w-8 ml-1" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Overview */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Project Deep Dive</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 lg:p-12">
              <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                {project.content.map((paragraph, i) => (
                  <p key={i} className="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          {project.additionalImages && (
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Project Gallery</h2>
                <p className="text-slate-600 dark:text-slate-400">Explore different aspects and features of the project</p>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.additionalImages.map((img, i) => (
                  <div key={i} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110" />
                    <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                      <div className="aspect-video relative">
                        <Image 
                          src={img}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in this project?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Feel free to explore the live demo or check out the source code to see how it was built.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {project.liveUrl && (
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
                >
                  <Link href={project.liveUrl} target="_blank" className="gap-2">
                    <Globe className="h-5 w-5" />
                    Live Link
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border-white/30 text-primary backdrop-blur-sm transition-all duration-300"
                >
                  <Link href={project.githubUrl} target="_blank" className="gap-2">
                    <Github className="h-5 w-5" />
                    View Source
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}