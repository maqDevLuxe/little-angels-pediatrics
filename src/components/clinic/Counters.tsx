import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Calendar, Award, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Families Served" },
  { icon: Calendar, value: 25, suffix: "+", label: "Years of Expertise" },
  { icon: Award, value: 40, suffix: "+", label: "Board-Certified Doctors" },
  { icon: Heart, value: 98, suffix: "%", label: "Patient Satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">
      {display.toLocaleString()}{suffix}
    </div>
  );
}

const Counters = () => (
  <section className="section-padding gradient-accent">
    <div className="container-clinic">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <s.icon className="w-8 h-8 text-primary-foreground/80 mx-auto mb-3" />
            <Counter value={s.value} suffix={s.suffix} />
            <p className="font-body text-sm text-primary-foreground/80 mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Counters;
