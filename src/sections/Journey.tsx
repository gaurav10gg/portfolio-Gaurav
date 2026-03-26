import { motion } from 'framer-motion';

const Journey = () => {
  const journeyData = [
    {
      year: '2025',
      title: 'Current',
      description: 'First year CSE student at NIT Puducherry. Building DevShowcase platform with 150+ beta users. Started Development Internship at Brand Labs Ventures LLP working with FastAPI and data pipelines.',
      images: [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      ],
      highlights: [
        'Started B.Tech at NIT Puducherry',
        'Built DevShowcase platform',
        'Development Intern at Brand Labs',
        'Learning AI/ML and NLP',
      ],
    },
    {
      year: '2024',
      title: 'High School Graduate',
      description: 'Completed Class XII with 9.4 CGPA from Vivekananda School CBSE. Discovered passion for programming and built first full-stack projects.',
      images: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop',
      ],
      highlights: [
        'Scored 9.4 CGPA in Class XII',
        'PCM with Computer Science',
        'Built first web projects',
        'Started competitive programming',
      ],
    },
    {
      year: 'Early 2024',
      title: 'JEE Preparation',
      description: 'Intense preparation for JEE Mains and Advanced. Balanced academics with self-learning programming through online resources.',
      images: [
        'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
      ],
      highlights: [
        'JEE Mains & Advanced prep',
        'Self-taught programming',
        'Built small Python projects',
        'Learned DSA fundamentals',
      ],
    },
    {
      year: '2023',
      title: 'Discovery Phase',
      description: 'Explored various fields of technology. Started learning Python and web development basics. Participated in coding competitions.',
      images: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      ],
      highlights: [
        'Started learning Python',
        'First HTML/CSS projects',
        'Participated in coding contests',
        'Explored tech career paths',
      ],
    },
  ];

  return (
    <section id="journey" className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            My journey report
          </h2>
          <p className="text-white/60 max-w-lg">
            I&apos;ve had the opportunity to develop software across a variety of settings — 
            from small side-projects to production applications. Here&apos;s my timeline of growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-0.5 timeline-line" />

          {/* Journey Items */}
          <div className="space-y-12 lg:space-y-20">
            {journeyData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-12 lg:pl-24"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 lg:left-6 top-2 w-4 h-4 rounded-full bg-dark-900 border-2 border-green-400 
                              flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>

                {/* Year Label - Desktop */}
                <div className="hidden lg:block absolute left-24 top-0">
                  <h3 className="text-4xl xl:text-5xl font-bold text-white/20 sticky top-40">
                    {item.year}
                  </h3>
                </div>

                {/* Content */}
                <div className="lg:ml-48">
                  {/* Year - Mobile */}
                  <h3 className="lg:hidden text-2xl font-bold text-white/60 mb-4">
                    {item.year}
                  </h3>

                  <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6 space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                        <span className="text-green-400">✓</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Images */}
                  <div className="grid grid-cols-2 gap-4">
                    {item.images.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-lg overflow-hidden shadow-lg"
                        style={{
                          boxShadow: '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04)',
                        }}
                      >
                        <img
                          src={img}
                          alt={`Journey ${item.year}`}
                          className="w-full h-32 lg:h-44 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
