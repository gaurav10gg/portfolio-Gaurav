import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Higher Secondary Certificate (Class XII)',
      period: 'July 2022 – May 2024',
      grade: '9.4',
      gradeLabel: 'CGPA',
      school: 'Vivekananda School CBSE',
      location: 'Puducherry, India',
      description: 'PCM Stream - Honorary student',
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      period: 'Aug 2025 – April 2029',
      grade: 'Pursuing',
      gradeLabel: '',
      school: 'National Institute of Technology Puducherry',
      location: 'Puducherry, India',
      description: 'Computer Engineering',
    },
  ];

  return (
    <section id="education" className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <GraduationCap className="w-8 h-8 text-green-400" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white">Education</h2>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-dark-800/50 border border-white/10 
                            hover:border-green-400/50 transition-all duration-300 card-glow">
                {/* Grade Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 text-green-400">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-bold">{edu.grade}</span>
                  {edu.gradeLabel && (
                    <span className="text-xs text-white/50">{edu.gradeLabel}</span>
                  )}
                </div>

                {/* Content */}
                <div className="pt-8">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-white/50 text-sm mb-4">{edu.period}</p>
                  <p className="text-white/70 text-sm mb-2">{edu.school}</p>
                  <p className="text-white/50 text-xs">{edu.location}</p>
                  <p className="text-white/60 text-sm mt-4 pt-4 border-t border-white/10">
                    {edu.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
