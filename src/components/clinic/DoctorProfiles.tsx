import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Chief of Pediatrics",
    specialty: "Neonatal Medicine",
    education: "Harvard Medical School",
    experience: "22 years",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. James Chen",
    title: "Pediatric Cardiologist",
    specialty: "Congenital Heart Disease",
    education: "Johns Hopkins University",
    experience: "18 years",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Amara Okafor",
    title: "Developmental Pediatrician",
    specialty: "Autism & ADHD",
    education: "Stanford University",
    experience: "15 years",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&h=500&fit=crop&crop=face",
  },
  {
    name: "Dr. Emily Rodriguez",
    title: "Pediatric Allergist",
    specialty: "Immunology",
    education: "Yale School of Medicine",
    experience: "12 years",
    img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=500&fit=crop&crop=face",
  },
];

const DoctorProfiles = () => (
  <section className="section-padding gradient-section">
    <div className="container-clinic">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="badge-clinic mb-4 inline-flex">Our Team</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Meet Our Pediatric Specialists
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Board-certified experts with decades of combined experience in all areas of pediatric medicine.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
            className="card-clinic p-0 overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={doc.img}
                alt={doc.name}
                className="w-full h-64 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-primary-foreground px-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span className="font-body text-sm">{doc.education}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="w-4 h-4" />
                    <span className="font-body text-sm">{doc.experience} experience</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-body text-sm">{doc.specialty}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-foreground">{doc.name}</h3>
              <p className="font-body text-sm text-primary font-medium">{doc.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorProfiles;
