import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jessica Thompson",
    role: "Mother of 3",
    text: "Dr. Mitchell and her team have been our family's pediatricians for over 8 years. The level of care and attention they provide is unmatched. My children actually look forward to their visits!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Michael & Sandra Lee",
    role: "Parents of twins",
    text: "When our twins were born prematurely, the neonatal team at Little Stars was incredible. Their expertise and compassion helped our babies thrive. We're forever grateful.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "First-time mom",
    text: "The telemedicine feature has been a lifesaver! Being able to consult with a specialist at midnight when my daughter had a fever gave me such peace of mind.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
];

const Testimonials = () => (
  <section className="section-padding bg-card">
    <div className="container-clinic">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="badge-yellow mb-4 inline-flex">Testimonials</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Reassured Parent Testimonials
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-clinic relative"
          >
            <Quote className="w-8 h-8 text-baby-blue-light absolute top-6 right-6" />
            <div className="flex items-center gap-1 mb-4">
              {[...Array(t.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-warm-yellow text-warm-yellow" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="font-body font-semibold text-sm text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
