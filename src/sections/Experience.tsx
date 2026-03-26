import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Developer',
      description: 'Building RESTful APIs with FastAPI and Node.js. Integrated file handling systems, data pipelines, and third-party services for seamless full-stack workflows.',
      icon: '/exp1.svg',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Full-Stack Developer',
      description: 'Developed complete web applications using React, Express.js, and PostgreSQL. Implemented JWT authentication, role-based access control, and responsive UI.',
      icon: '/exp2.svg',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'AI/ML Enthusiast',
      description: 'Built NLP-based tools and automation pipelines. Implemented resume parsing, TF-IDF ranking, and LLM-powered agents for intelligent task automation.',
      icon: '/exp3.svg',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'Development Intern',
      description: 'At Brand Labs Ventures LLP - Developed backend APIs, data ingestion pipelines, and automation workflows in a fast-paced startup environment.',
      icon: '/exp4.svg',
      color: 'from-orange-500/20 to-yellow-500/20',
    },
  ];

  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-white text-center mb-12"
        >
          My <span className="text-green-400">Experience</span>
        </motion.h2>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  exp: {
    title: string;
    description: string;
    icon: string;
    color: string;
  };
  index: number;
}

const ExperienceCard = ({ exp, index }: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 153, 0.15), transparent 50%)`
            : 'none',
        }}
      />

      {/* Card */}
      <div className="relative h-full p-1 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 
                    group-hover:from-green-400/30 group-hover:to-green-400/10 transition-all duration-500">
        <div className="relative h-full rounded-3xl bg-dark-800/90 backdrop-blur-xl p-6 lg:p-8 
                      border border-white/10 group-hover:border-green-400/30 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-6">
            {/* Icon */}
            <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${exp.color} 
                          flex items-center justify-center flex-shrink-0`}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-dark-700 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {exp.title}
              </h3>
              <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
