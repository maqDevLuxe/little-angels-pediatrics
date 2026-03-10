import { motion } from "framer-motion";
import Navbar from "@/components/clinic/Navbar";
import AppointmentCTA from "@/components/clinic/AppointmentCTA";
import { GraduationCap, Award, MapPin, BookOpen, ArrowRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Chief of Pediatrics",
    specialty: "Neonatal Medicine",
    education: "Harvard Medical School",
    experience: "22 years",
    bio: "Dr. Mitchell is a nationally recognized neonatologist who has published over 50 research papers and led groundbreaking studies in premature infant care.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&h=600&fit=crop&crop=face",
    certifications: ["Board Certified — Neonatal-Perinatal Medicine", "Fellow — AAP"],
  },
  {
    name: "Dr. James Chen",
    title: "Pediatric Cardiologist",
    specialty: "Congenital Heart Disease",
    education: "Johns Hopkins University",
    experience: "18 years",
    bio: "Dr. Chen specializes in complex congenital heart conditions and has performed over 3,000 echocardiographic evaluations in children.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=600&fit=crop&crop=face",
    certifications: ["Board Certified — Pediatric Cardiology", "Fellow — ACC"],
  },
  {
    name: "Dr. Amara Okafor",
    title: "Developmental Pediatrician",
    specialty: "Autism & ADHD",
    education: "Stanford University",
    experience: "15 years",
    bio: "Dr. Okafor is a leading expert in neurodevelopmental disorders, pioneering integrative approaches to autism spectrum and ADHD management.",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=500&h=600&fit=crop&crop=face",
    certifications: ["Board Certified — Developmental-Behavioral Pediatrics", "Fellow — SDBP"],
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Pediatric Allergist",
    specialty: "Immunology",
    education: "Yale School of Medicine",
    experience: "12 years",
    bio: "Dr. Rodriguez brings cutting-edge immunotherapy treatments and has helped hundreds of children overcome severe allergies and asthma.",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&h=600&fit=crop&crop=face",
    certifications: ["Board Certified — Allergy & Immunology", "Fellow — ACAAI"],
  },
];

const Specialists = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="gradient-hero pt-28 md:pt-36 pb-16">
      <div className="container-clinic text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="badge-clinic mb-4 inline-flex">Our Specialists</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            World-Class Pediatric Experts
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of board-certified specialists brings decades of combined experience across every pediatric subspecialty.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-clinic space-y-16">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <img
                src={doc.img}
                alt={doc.name}
                className="rounded-3xl w-full h-[400px] object-cover object-top shadow-[var(--shadow-elevated)]"
                loading="lazy"
              />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <span className="badge-yellow mb-3 inline-flex">{doc.specialty}</span>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-1">{doc.name}</h2>
              <p className="font-body text-primary font-semibold mb-4">{doc.title}</p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{doc.bio}</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{doc.education}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{doc.experience} of experience</span>
                </div>
                {doc.certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-body text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
              <a href="#appointment" className="btn-primary-clinic text-sm">
                Book with {doc.name.split(" ")[0]}. {doc.name.split(" ").slice(1).join(" ")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <AppointmentCTA />
  </div>
);

export default Specialists;
