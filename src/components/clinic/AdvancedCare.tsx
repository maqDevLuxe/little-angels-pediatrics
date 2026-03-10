import { motion } from "framer-motion";
import { Microscope, Syringe, Pill } from "lucide-react";

const specialties = [
  {
    icon: Microscope,
    title: "Pediatric Allergy & Immunology",
    desc: "Advanced allergy testing, immunotherapy, and asthma management for children with complex immune conditions.",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop",
  },
  {
    icon: Syringe,
    title: "Pediatric Endocrinology",
    desc: "Expert management of growth disorders, diabetes, thyroid conditions, and hormonal imbalances in children.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
  },
  {
    icon: Pill,
    title: "Pediatric Gastroenterology",
    desc: "Diagnosis and treatment of digestive disorders, food allergies, celiac disease, and inflammatory bowel conditions.",
    img: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=400&h=250&fit=crop",
  },
];

const AdvancedCare = () => (
  <section className="section-padding bg-card">
    <div className="container-clinic">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="badge-yellow mb-4 inline-flex">Advanced Subspecialties</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Advanced Specialist Care
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Our subspecialty teams bring decades of focused expertise to manage the most complex pediatric conditions.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {specialties.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="card-clinic overflow-hidden p-0 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <div className="w-10 h-10 rounded-xl bg-card/90 backdrop-blur flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvancedCare;
