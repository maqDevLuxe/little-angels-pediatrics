import { motion } from "framer-motion";
import { ArrowRight, Shield, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative gradient-hero pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-baby-blue-light opacity-40 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-warm-yellow-pale opacity-50 blur-3xl" />

      <div className="container-clinic relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="badge-clinic mb-6">
              <Shield className="w-3.5 h-3.5 mr-1.5" />
              Board-Certified Pediatric Specialists
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Where Every Child Gets{" "}
              <span className="text-gradient">Expert Care</span>{" "}
              They Deserve
            </h1>

            <p className="font-body text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Trusted by over 10,000 families, our highly experienced pediatric specialists
              provide compassionate, evidence-based care for children from newborn to 18 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#appointment" className="btn-primary-clinic">
                Book Priority Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="#services" className="btn-secondary-clinic">
                Explore Services
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=100&h=100&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Doctor"
                    className="w-10 h-10 rounded-full border-2 border-card object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-warm-yellow text-warm-yellow" />
                  ))}
                </div>
                <p className="text-xs font-body text-muted-foreground">
                  Rated 4.9/5 by 2,500+ parents
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <img
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=700&h=500&fit=crop"
                alt="Experienced pediatric specialist examining a smiling child"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-sage animate-pulse" />
                  <span className="text-primary-foreground font-body text-sm font-medium">
                    Accepting New Patients
                  </span>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -left-6 card-clinic p-4 max-w-[200px]"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="font-heading text-2xl font-bold text-foreground">25+</p>
              <p className="font-body text-xs text-muted-foreground">Years of Pediatric Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
