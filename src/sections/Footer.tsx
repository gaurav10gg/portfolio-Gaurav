import { motion } from 'framer-motion';
import { Send, Facebook, Instagram, Youtube, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com/in/gaurav10g', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/gaurav10gg', label: 'GitHub' },
  ];

  return (
    <footer id="contact" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-green-400/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Let's Talk Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-green-400">Talk</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
            What led you here? What are you looking for? I would love to hear from you 
            over a virtual coffee chat!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:gauravgjee2025@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 
                       bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg
                       text-white font-semibold overflow-hidden btn-shine"
            >
              <span className="relative z-10">Let&apos;s get in touch</span>
              <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <motion.a
            href="#personal"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 
                     border border-green-400 text-green-400 rounded-full
                     hover:bg-green-400 hover:text-dark-900 transition-all duration-300"
          >
            <span>Peer through my Personal Life</span>
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          {/* Name */}
          <p className="text-white/80 font-medium">Gaurav G</p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 border border-green-400 rounded-full flex items-center justify-center 
                         text-green-400 hover:bg-green-400 hover:text-dark-900 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/40 text-sm mt-12"
        >
          © {new Date().getFullYear()} Gaurav G. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
