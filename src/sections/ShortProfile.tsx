import { useState } from 'react';
import { motion } from 'framer-motion';

const ShortProfile = () => {
  const [copied, setCopied] = useState(false);
  const techStack = [
    { name: 'ReactJS', opacity: true },
    { name: 'Express', opacity: true },
    { name: 'TypeScript', opacity: true },
    { name: 'FastAPI', opacity: true },
    { name: 'Node.js', opacity: true },
    { name: 'PostgreSQL', opacity: true },
    { name: 'MongoDB', opacity: true },
    { name: 'Python', opacity: true },
  ];

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText('gauravgjee2025@gmail.com');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-bold text-white text-center mb-12"
        >
          Short Profile
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Large Card - Developer Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl bg-dark-800/50 
                       border border-white/10 hover:border-green-400/30 transition-all duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent" />
            <div className="relative h-full min-h-[300px] lg:min-h-[400px] p-6 lg:p-8 flex flex-col justify-end">
              <div className="absolute top-0 right-0 w-2/3 h-full opacity-60">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                  alt="Developer workspace"
                  className="w-full h-full object-cover rounded-r-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-800 via-dark-800/80 to-transparent" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                Full-stack builder focused on backend quality, product clarity, and useful AI features
              </h3>
            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl bg-dark-800/50 border border-white/10 
                       hover:border-green-400/30 transition-all duration-300 p-6 group"
          >
            <h3 className="text-lg lg:text-xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
              Fluent in English , Tamil and Hindi
            </h3>
            <p className="text-white/50 text-sm mt-2">Communication</p>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl bg-dark-800/50 border border-white/10 
                       hover:border-green-400/30 transition-all duration-300 p-6 group"
          >
            <p className="text-white/50 text-sm mb-2">My primary tech stack</p>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
              FastAPI, Node.js, React
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 6).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-lg bg-white/10 text-white/80"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Software Architect Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-3xl bg-dark-800/50 border border-white/10 
                       hover:border-green-400/30 transition-all duration-300 p-6 group"
          >
            <div className="absolute top-4 right-4">
              <svg className="w-12 h-12 text-white/20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
              Backend Developer
            </h3>
            <p className="text-white/50 text-sm mt-2">API Design & Database Architecture</p>
          </motion.div>

          {/* Inside Scoop Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-dark-800/50 border border-white/10 
                       hover:border-green-400/30 transition-all duration-300 p-6 group"
          >
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,255,153,0.3)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            <p className="text-white/50 text-sm mb-2 relative z-10">The Inside Scoop</p>
            <h3 className="text-lg lg:text-xl font-bold text-white relative z-10 group-hover:translate-x-2 transition-transform duration-300">
              First-year CSE student building practical products, shipping fast, and improving with every release
            </h3>
          </motion.div>

          {/* Contact CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/20 to-cyan-500/20 
                       border border-white/10 hover:border-green-400/30 transition-all duration-300 p-6"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-500/10 to-cyan-500/10" />
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white mb-4">
                Want to build something together?
              </h3>
              <button
                onClick={handleCopyEmail}
                className="w-full py-3 px-4 bg-dark-900/80 border border-white/20 rounded-lg 
                               text-white text-sm font-medium hover:bg-green-400 hover:text-dark-900 
                               hover:border-green-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {copied ? 'Email copied' : 'Copy my email address'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShortProfile;
