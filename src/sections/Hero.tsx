import { motion } from 'framer-motion';
import { ChevronRight, Facebook, Instagram, Youtube, Linkedin, Github } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.png';

const Hero = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gaurav10g', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/gaurav10gg', label: 'GitHub' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-900/50 to-dark-900 pointer-events-none" 
           style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 20%, #0a0a0a 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-4 py-2 text-sm sm:text-base text-white/80 mb-4 font-mono"
            >
              Backend-focused full-stack developer
            </motion.p>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6"
            >
              <span className="text-white block mb-2">Hello I&apos;m</span>
              <span className="relative inline-block group cursor-pointer whitespace-nowrap">
                <span className="text-green-400 relative z-10 transition-colors duration-500 group-hover:text-dark-900 px-2">
                  gaurav G
                </span>
                <span className="absolute inset-0 bg-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/60 text-base lg:text-lg max-w-xl mb-8 mx-auto lg:mx-0"
            >
              I build reliable web products with clean backend architecture, sharp UI execution,
              and practical AI features. Based in India and currently studying at NIT Puducherry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                FastAPI
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                Node.js
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                React
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                AI workflows
              </span>
            </motion.div>

            {/* CTA & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              {/* View CV Button */}
              <a
                href="mailto:gauravgjee2025@gmail.com"
                className="group flex items-center gap-2 px-8 py-3 border border-green-400 text-green-400 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-green-400 hover:text-dark-900 transition-all duration-300"
              >
                <span>Contact Me</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/80 hover:border-green-400/40 hover:text-white transition-all duration-300"
              >
                View Projects
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="w-10 h-10 border border-green-400 rounded-full flex items-center justify-center text-green-400 hover:bg-green-400 hover:text-dark-900 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Rotating Border SVG */}
              <svg
                className="absolute -inset-4 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] animate-rotate-border"
                viewBox="0 0 500 500"
                fill="none"
              >
                <circle
                  cx="250"
                  cy="250"
                  r="248"
                  stroke="#00ff99"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="15 15 60 15"
                  fill="none"
                />
              </svg>

              {/* Profile Image Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[460px] lg:h-[460px] rounded-full overflow-hidden border-4 border-green-400/30">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-transparent" />
                <img
                  src={profilePhoto}
                  alt="Gaurav G"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-green-400/20 blur-3xl -z-10 scale-75" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
