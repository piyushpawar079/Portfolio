"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Award, Star, Code, Database, Server, Wrench, Brain, TestTube, Filter, X } from "lucide-react";
import { skills } from "@/data/skills"; // Assuming you have a skills data file

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const filteredCategories = selectedCategory 
    ? { [selectedCategory]: categories[selectedCategory] }
    : categories;

  // Enhanced skill proficiency levels
  const getSkillLevel = (skillName: string) => {
    const levels: Record<string, { level: string; percentage: number; color: string; years: number }> = {
      'React': { level: 'Expert', percentage: 95, color: 'text-blue-500', years: 4 },
      'TypeScript': { level: 'Advanced', percentage: 90, color: 'text-blue-600', years: 3 },
      'Next.js': { level: 'Expert', percentage: 92, color: 'text-gray-700', years: 3 },
      'JavaScript': { level: 'Expert', percentage: 95, color: 'text-yellow-500', years: 5 },
      'Node.js': { level: 'Advanced', percentage: 85, color: 'text-green-500', years: 3 },
      'Python': { level: 'Advanced', percentage: 88, color: 'text-green-600', years: 4 },
      'MongoDB': { level: 'Advanced', percentage: 82, color: 'text-green-500', years: 2 },
      'PostgreSQL': { level: 'Intermediate', percentage: 75, color: 'text-blue-600', years: 2 },
      'Docker': { level: 'Intermediate', percentage: 70, color: 'text-blue-500', years: 2 },
      'default': { level: 'Proficient', percentage: 80, color: 'text-slate-600', years: 1 }
    };
    return levels[skillName] || levels.default;
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      'Frontend': <Code className="h-5 w-5" />,
      'Backend': <Server className="h-5 w-5" />,
      'Database': <Database className="h-5 w-5" />,
      'DevOps & Tools': <Wrench className="h-5 w-5" />,
      'AI/ML': <Brain className="h-5 w-5" />,
      'Testing': <TestTube className="h-5 w-5" />,
      'default': <Zap className="h-5 w-5" />
    };
    return icons[category] || icons.default;
  };

  const getCategoryGradient = (category: string) => {
    const gradients: Record<string, string> = {
      'Frontend': 'from-blue-500/20 to-cyan-500/20',
      'Backend': 'from-green-500/20 to-emerald-500/20',
      'Database': 'from-purple-500/20 to-pink-500/20',
      'DevOps & Tools': 'from-orange-500/20 to-red-500/20',
      'AI/ML': 'from-indigo-500/20 to-purple-500/20',
      'Testing': 'from-teal-500/20 to-cyan-500/20',
      'default': 'from-slate-500/20 to-gray-500/20'
    };
    return gradients[category] || gradients.default;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Frontend': 'border-blue-500/50 text-blue-600',
      'Backend': 'border-green-500/50 text-green-600',
      'Database': 'border-purple-500/50 text-purple-600',
      'DevOps & Tools': 'border-orange-500/50 text-orange-600',
      'AI/ML': 'border-indigo-500/50 text-indigo-600',
      'Testing': 'border-teal-500/50 text-teal-600',
      'default': 'border-slate-500/50 text-slate-600'
    };
    return colors[category] || colors.default;
  };

  const totalSkills = skills.length;
  const totalCategories = Object.keys(categories).length;
  const averageExperience = 3.2; // You can calculate this dynamically

  return (
    <section id="skills" className="py-20 scroll-mt-16 relative overflow-hidden  dark:bg-black">
      {/* Subtle background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400/5 rounded-full blur-2xl" />
      </div>

      <motion.div 
        className="px-4 md:px-8 max-w-7xl mx-auto relative z-10"
        style={{ y }}
      >
        {/* Enhanced section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl mb-6"
          >
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Technical Expertise
          </motion.h2>
        </motion.div>

        {/* Enhanced skills display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            {Object.entries(filteredCategories).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="relative"
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryGradient(category)} border border-gray-200 dark:border-gray-700`}>
                    {getCategoryIcon(category)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-1">
                      {category}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      {categorySkills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Enhanced skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                  {categorySkills.map((skill, index) => {
                    const skillLevel = getSkillLevel(skill.name);
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.05 + index * 0.02
                        }}
                        whileHover={{ 
                          y: -4,
                          transition: { duration: 0.2 } 
                        }}
                        onHoverStart={() => setHoveredSkill(skill.name)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="group cursor-pointer"
                      >
                        <Card className="overflow-hidden h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300 relative shadow-sm hover:shadow-md">
                          {/* Subtle background on hover */}
                          <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <CardContent className="p-4 text-center flex flex-col items-center justify-center relative z-10 h-full">
                            {/* Skill icon */}
                            <div className="relative h-12 w-12 mb-3">
                              <div className="relative h-full w-full bg-gray-50 dark:bg-slate-700 rounded-lg border border-gray-200 dark:border-slate-600 group-hover:border-blue-300 dark:group-hover:border-blue-600 transition-colors duration-300 flex items-center justify-center">
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="w-6 h-6 object-contain"
                                />
                              </div>
                            </div>

                            {/* Skill name */}
                            <h4 className="text-sm font-medium mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-slate-700 dark:text-slate-200">
                              {skill.name}
                            </h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16 p-8 rounded-2xl bg-blue-50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
            <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">
            Continuous Learning
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 max-w-xl mx-auto">
            I stay current with the latest technologies and best practices to deliver 
            cutting-edge solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "AI/ML Integration",
              "Computer Vision",
              "AI x Web Development",
            ].map((tech) => (
              <Badge 
                key={tech}
                variant="outline" 
                className="bg-white dark:bg-slate-700 border-blue-200 dark:border-slate-600 text-blue-700 dark:text-blue-300"
              >
                <Star className="h-3 w-3 mr-1" />
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
export default Skills;