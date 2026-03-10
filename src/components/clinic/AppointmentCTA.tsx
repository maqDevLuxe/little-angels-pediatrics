import { motion } from "framer-motion";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const AppointmentCTA = () => (
  <>
    <section id="appointment" className="section-padding gradient-accent relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="container-clinic relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <CalendarCheck className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Book a Priority Appointment
          </h2>
          <p className="font-body text-primary-foreground/80 max-w-xl mx-auto mb-8 leading-relaxed">
            Your child's health is our top priority. Schedule a visit with one of our board-certified specialists today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-body font-semibold bg-card text-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (123) 456-7890
            </a>
            <a
              href="mailto:appointments@littlestars.com"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-body font-semibold border-2 border-primary-foreground/30 text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-foreground section-padding">
      <div className="container-clinic">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full gradient-accent flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">LS</span>
              </div>
              <span className="font-heading font-bold text-lg text-primary-foreground">Little Stars</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
              Providing exceptional pediatric care with compassion, expertise, and dedication since 2001.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Specialists", "Services", "Parents"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="block font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Services</h4>
            <div className="space-y-2">
              {["Newborn Care", "Developmental Pediatrics", "Pediatric Cardiology", "Telemedicine"].map((s) => (
                <p key={s} className="font-body text-sm text-primary-foreground/60">{s}</p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary-foreground/60 mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-primary-foreground/60">123 Pediatric Way, Suite 200, Medical District, CA 90210</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <p className="font-body text-sm text-primary-foreground/60">(123) 456-7890</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <p className="font-body text-sm text-primary-foreground/60">info@littlestars.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 Little Stars Pediatric Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-primary-foreground/40">
            <span className="font-body text-xs">Made with</span>
            <Heart className="w-3 h-3 fill-rose text-rose" />
            <span className="font-body text-xs">for little ones</span>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default AppointmentCTA;
