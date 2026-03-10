import { motion } from "framer-motion";
import { Video, Clock, Shield, Smartphone } from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Availability", desc: "Connect with a pediatrician anytime, day or night." },
  { icon: Shield, title: "HIPAA Compliant", desc: "Secure, encrypted video consultations for your privacy." },
  { icon: Smartphone, title: "Any Device", desc: "Join from your phone, tablet, or computer — no app needed." },
];

const Telemedicine = () => (
  <section className="section-padding gradient-section">
    <div className="container-clinic">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge-clinic mb-4 inline-flex">
            <Video className="w-3.5 h-3.5 mr-1.5" />
            Virtual Care
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Premium Telemedicine Access
          </h2>
          <p className="font-body text-muted-foreground mb-8 leading-relaxed">
            Get expert pediatric consultations from the comfort of your home.
            Our telemedicine platform connects you directly with our board-certified specialists.
          </p>
          <div className="space-y-5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-baby-blue-light flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground mb-0.5">{f.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <a href="#appointment" className="btn-primary-clinic mt-8 inline-flex">
            Start Virtual Visit
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=450&fit=crop"
            alt="Parent using telemedicine to consult with pediatrician"
            className="rounded-3xl w-full h-[400px] object-cover shadow-[var(--shadow-elevated)]"
            loading="lazy"
          />
          <motion.div
            className="absolute -top-4 -right-4 card-clinic p-4"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-heading text-xl font-bold text-foreground">5 min</p>
            <p className="font-body text-xs text-muted-foreground">Avg. Wait Time</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Telemedicine;
