import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop", alt: "Colorful pediatric waiting area" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop", alt: "Modern examination room" },
  { src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=400&h=300&fit=crop", alt: "Child-friendly clinic interior" },
];

const Environment = () => (
  <section className="section-padding bg-card">
    <div className="container-clinic">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge-yellow mb-4 inline-flex">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Premium Experience
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Child-Friendly, Premium Environment
          </h2>
          <p className="font-body text-muted-foreground mb-6 leading-relaxed">
            Our clinic is designed to make children feel at ease. With vibrant play areas,
            soothing examination rooms, and state-of-the-art medical equipment, we create
            an experience that's comforting for both children and parents.
          </p>
          <ul className="space-y-3">
            {["Interactive play zones in every waiting area", "Private & calming examination suites", "Child-safe, allergen-free interior design"].map((item) => (
              <li key={item} className="flex items-center gap-3 font-body text-sm text-foreground">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <img src={images[0].src} alt={images[0].alt} className="rounded-2xl w-full h-56 object-cover" loading="lazy" />
          </motion.div>
          {images.slice(1).map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 1) * 0.1 }}
            >
              <img src={img.src} alt={img.alt} className="rounded-2xl w-full h-40 object-cover" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Environment;
