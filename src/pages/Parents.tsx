import { motion } from "framer-motion";
import Navbar from "@/components/clinic/Navbar";
import AppointmentCTA from "@/components/clinic/AppointmentCTA";
import { ArrowRight, Clock, BookOpen, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const resources = [
  {
    title: "Building Healthy Eating Habits in Toddlers",
    excerpt: "Expert tips on introducing nutritious foods and managing picky eating behaviors from our pediatric nutritionist.",
    category: "Nutrition",
    date: "Mar 5, 2026",
    img: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=250&fit=crop",
  },
  {
    title: "Understanding Your Child's Sleep Cycles",
    excerpt: "How to establish healthy sleep routines at every age, backed by the latest pediatric sleep research.",
    category: "Sleep Health",
    date: "Feb 28, 2026",
    img: "https://images.unsplash.com/photo-1566004100477-7b3e6fdbbc29?w=400&h=250&fit=crop",
  },
  {
    title: "Vaccination Schedule: What Parents Need to Know",
    excerpt: "A comprehensive guide to the recommended childhood immunization schedule and common questions answered.",
    category: "Immunization",
    date: "Feb 20, 2026",
    img: "https://images.unsplash.com/photo-1632053001332-2f0e5df4e9dd?w=400&h=250&fit=crop",
  },
  {
    title: "Managing Screen Time for Growing Minds",
    excerpt: "Evidence-based guidelines on healthy screen habits and digital wellness for every age group.",
    category: "Development",
    date: "Feb 15, 2026",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop",
  },
];

const faqs = [
  { q: "When should I bring my newborn in for the first visit?", a: "We recommend scheduling your baby's first visit within 3–5 days after birth. This allows us to check weight, feeding, jaundice levels, and answer any early questions you may have." },
  { q: "What vaccines does my child need?", a: "We follow the CDC and AAP recommended immunization schedule. At each well-child visit, we'll review which vaccines are due and provide detailed information about each one." },
  { q: "Do you offer telemedicine appointments?", a: "Yes! Our premium telemedicine platform is available 24/7 for non-emergency consultations. You can connect with our board-certified specialists from any device." },
  { q: "How do I know if my child's development is on track?", a: "We perform comprehensive developmental screenings at every well-child visit using standardized assessment tools. If concerns arise, our developmental pediatrician can conduct in-depth evaluations." },
  { q: "What should I do in a medical emergency?", a: "For life-threatening emergencies, always call 911. For urgent but non-life-threatening concerns, call our 24-hour nurse line for immediate guidance." },
];

const Parents = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="gradient-hero pt-28 md:pt-36 pb-16">
        <div className="container-clinic text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge-yellow mb-4 inline-flex">For Parents</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Resources & Support for Parents
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guidance, health articles, and answers to your most common questions — all in one place.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Resources */}
      <section className="section-padding">
        <div className="container-clinic">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Health Articles</h2>
            </div>
            <p className="font-body text-muted-foreground">Expert-written articles to help you navigate parenthood with confidence.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((r, i) => (
              <motion.article
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-clinic p-0 overflow-hidden group cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img src={r.img} alt={r.title} className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge-yellow text-xs">{r.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-body"><Clock className="w-3 h-3" />{r.date}</span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{r.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-clinic max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
            </div>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background rounded-2xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-body font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-5 pb-5"
                  >
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </div>
  );
};

export default Parents;
