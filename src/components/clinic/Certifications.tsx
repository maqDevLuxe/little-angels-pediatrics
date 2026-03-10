import { motion } from "framer-motion";
import { Award, ShieldCheck, GraduationCap, BadgeCheck } from "lucide-react";

const certs = [
  { icon: ShieldCheck, title: "JCAHO Accredited", desc: "Gold Seal of Approval" },
  { icon: Award, title: "AAP Member Clinic", desc: "American Academy of Pediatrics" },
  { icon: GraduationCap, title: "Teaching Hospital", desc: "Affiliated with top universities" },
  { icon: BadgeCheck, title: "PCMH Recognized", desc: "Patient-Centered Medical Home" },
];

const Certifications = () => (
  <section className="section-padding bg-card">
    <div className="container-clinic">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="badge-yellow mb-4 inline-flex">Trusted & Accredited</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Hospital & Board Certifications
        </h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-clinic text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-baby-blue-light flex items-center justify-center mx-auto mb-4">
              <c.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
