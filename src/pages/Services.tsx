import { motion } from "framer-motion";
import Navbar from "@/components/clinic/Navbar";
import AppointmentCTA from "@/components/clinic/AppointmentCTA";
import { Baby, Brain, Heart, Stethoscope, Eye, Bone, Microscope, Syringe, Pill, Activity, ShieldCheck, Video } from "lucide-react";

const allServices = [
  { icon: Stethoscope, title: "General Pediatrics", desc: "Comprehensive well-child visits, sick visits, immunizations, and preventive health screenings for children ages 0–18.", color: "bg-sage-light text-sage" },
  { icon: Baby, title: "Newborn & Neonatal Care", desc: "Expert care for newborns including metabolic screening, jaundice management, and NICU follow-up for premature infants.", color: "bg-baby-blue-light text-primary" },
  { icon: Brain, title: "Developmental & Behavioral Pediatrics", desc: "Comprehensive evaluation and management of ADHD, autism spectrum disorders, learning disabilities, and behavioral concerns.", color: "bg-warm-yellow-light text-accent" },
  { icon: Heart, title: "Pediatric Cardiology", desc: "Non-invasive cardiac evaluation including echocardiography, ECG, and ongoing management of congenital and acquired heart conditions.", color: "bg-rose-light text-rose" },
  { icon: Microscope, title: "Allergy & Immunology", desc: "Advanced allergy testing, food allergy management, immunotherapy, and comprehensive asthma care plans.", color: "bg-baby-blue-light text-primary" },
  { icon: Syringe, title: "Pediatric Endocrinology", desc: "Specialized care for growth disorders, Type 1 and Type 2 diabetes, thyroid conditions, and pubertal abnormalities.", color: "bg-warm-yellow-light text-accent" },
  { icon: Pill, title: "Gastroenterology", desc: "Diagnosis and treatment of digestive disorders including celiac disease, IBD, reflux, and food protein allergies.", color: "bg-sage-light text-sage" },
  { icon: Eye, title: "Pediatric Ophthalmology", desc: "Comprehensive eye exams, amblyopia treatment, strabismus management, and vision screening for all ages.", color: "bg-rose-light text-rose" },
  { icon: Bone, title: "Pediatric Orthopedics", desc: "Treatment of growth-related musculoskeletal issues, sports injuries, fracture care, and scoliosis monitoring.", color: "bg-baby-blue-light text-primary" },
  { icon: Activity, title: "Growth & Nutrition Counseling", desc: "Personalized growth tracking, nutritional assessments, and dietary guidance for children with special needs.", color: "bg-warm-yellow-light text-accent" },
  { icon: ShieldCheck, title: "Immunization Programs", desc: "Complete vaccination schedules, catch-up programs, travel immunizations, and flu vaccine clinics.", color: "bg-sage-light text-sage" },
  { icon: Video, title: "Telemedicine Consultations", desc: "Secure, HIPAA-compliant virtual visits available 24/7 for non-emergency consultations with our specialists.", color: "bg-rose-light text-rose" },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="gradient-hero pt-28 md:pt-36 pb-16">
      <div className="container-clinic text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="badge-clinic mb-4 inline-flex">Comprehensive Care</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Pediatric Services
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete spectrum of pediatric care — from routine wellness visits to advanced subspecialty consultations.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-clinic">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
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

    <AppointmentCTA />
  </div>
);

export default Services;
