import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'DevShowcase',
      description: 'A full-stack developer project discovery platform with JWT auth, upvotes, and comments. Built with React, Node.js, Express, PostgreSQL, and Prisma.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: [
        { name: 'React', icon: '⚛️' },
        { name: 'Node', icon: '🟢' },
        { name: 'Express', icon: '🚂' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Prisma', icon: '🔷' },
      ],
      liveUrl: 'https://devshowcase-demo.vercel.app',
      githubUrl: 'https://github.com/gaurav10gg/devshowcase-frontend',
      hasRead: true,
    },
    {
      title: 'AI-Powered LinkedIn Job Matcher',
      description: 'Automated job discovery using resume parsing, NLP, and TF-IDF ranking. Scrapes LinkedIn for relevant job postings based on your skills.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      tech: [
        { name: 'FastAPI', icon: '⚡' },
        { name: 'Python', icon: '🐍' },
        { name: 'Playwright', icon: '🎭' },
        { name: 'NLP', icon: '🤖' },
        { name: 'Ollama', icon: '🦙' },
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/gaurav10gg/AI-Powered-LinkedIn-Job-Matcher',
      hasRead: true,
    },
    {
      title: 'AI Personal Agent',
      description: 'On-device task automation system with ReAct-style agent loop. Interprets natural language commands and executes real-world tasks through tool-based architecture.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tech: [
        { name: 'Python', icon: '🐍' },
        { name: 'FastAPI', icon: '⚡' },
        { name: 'LLM', icon: '🧠' },
        { name: 'SQLite', icon: '📁' },
        { name: 'AsyncIO', icon: '⚙️' },
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/gaurav10gg',
      hasRead: false,
    },
    {
      title: 'Project Dreaserous',
      description: 'Interactive FAQ system with Node.js + SQLite backend. Features real-time FAQ insertion and automated email support.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
      tech: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'SQLite', icon: '📁' },
        { name: 'HTML', icon: '📄' },
        { name: 'CSS', icon: '🎨' },
      ],
      liveUrl: null,
      githubUrl: 'https://github.com/gaurav10gg/Project-Dreaserous',
      hasRead: false,
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-white text-center mb-4"
        >
          A small selection of <span className="text-green-400">recent projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-dark-800/50 rounded-2xl overflow-hidden border border-white/10 
                            hover:border-green-400/30 transition-all duration-500 shadow-card">
                {/* Project Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-dark-700 
                                 border border-white/10 text-white/70"
                      >
                        <span>{t.icon}</span>
                        <span>{t.name}</span>
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-green-400 hover:text-green-300 
                                   transition-colors text-sm font-medium"
                        >
                          <span>Check Live Site</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-green-400 hover:text-green-300 
                                   transition-colors text-sm font-medium"
                        >
                          <span>Github</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    {project.hasRead && (
                      <button className="p-2 rounded-full border border-white/20 hover:border-green-400 
                                       hover:bg-green-400/10 transition-all">
                        <BookOpen className="w-4 h-4 text-green-400" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                              pointer-events-none bg-gradient-to-t from-green-400/5 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
