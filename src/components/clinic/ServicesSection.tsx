import { motion } from "framer-motion";
import { Baby, Brain, Heart, Stethoscope, Eye, Bone } from "lucide-react";

const services = [
  { icon: Baby, title: "Newborn Care", desc: "Comprehensive neonatal assessments and NICU follow-up care.", color: "bg-baby-blue-light text-primary" },
  { icon: Brain, title: "Developmental Pediatrics", desc: "Behavioral screening, ADHD evaluation, and autism spectrum care.", color: "bg-warm-yellow-light text-accent" },
  { icon: Heart, title: "Pediatric Cardiology", desc: "Echocardiography, murmur assessment, and congenital heart care.", color: "bg-rose-light text-rose" },
  { icon: Stethoscope, title: "General Pediatrics", desc: "Well-child visits, immunizations, and preventive health checks.", color: "bg-sage-light text-sage" },
  { icon: Eye, title: "Pediatric Ophthalmology", desc: "Vision screening, lazy eye treatment, and eye health monitoring.", color: "bg-baby-blue-light text-primary" },
  { icon: Bone, title: "Pediatric Orthopedics", desc: "Growth-related bone issues, fractures, and sports injury care.", color: "bg-warm-yellow-light text-accent" },
];

const ServicesSection = () => (
  <section id="services" className="section-padding gradient-section">
    <div className="container-clinic">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="badge-clinic mb-4 inline-flex">Specialized Care</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Specialized Pediatric Services
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          From routine checkups to advanced subspecialty care, we provide a full spectrum of pediatric services under one roof.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-clinic group"
          >
            <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
