import { motion } from "framer-motion";

const ClinicImage = () => (
  <section className="relative">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=500&fit=crop"
        alt="Modern pediatric clinic interior with state-of-the-art facilities"
        className="w-full h-64 md:h-96 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 to-transparent flex items-center">
        <div className="container-clinic">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground max-w-md">
            State-of-the-Art Pediatric Facility
          </h2>
          <p className="font-body text-primary-foreground/80 mt-2 max-w-sm">
            Designed for comfort, built for excellence.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default ClinicImage;
