import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

const StatItem = ({ value, label, suffix = '', delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-4 justify-center lg:justify-start"
    >
      <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
        {count}{suffix}
      </span>
      <p className="text-white/60 text-sm sm:text-base max-w-[120px] leading-tight">
        {label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { value: 19, label: 'Age', suffix: '', delay: 0 },
    { value: 1, label: 'Years of experience', suffix: '', delay: 0.1 },
    { value: 5, label: 'Projects worked on', suffix: '+', delay: 0.2 },
    { value: 3, label: 'Projects Deployed', suffix: '', delay: 0.3 },
  ];

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
