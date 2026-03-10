import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
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
];

const Blog = () => (
  <section className="section-padding bg-card">
    <div className="container-clinic">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="badge-clinic mb-4 inline-flex">Health Resources</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Parenting & Child Health Blog
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-clinic p-0 overflow-hidden group cursor-pointer"
          >
            <div className="overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="badge-yellow text-xs">{p.category}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                  <Clock className="w-3 h-3" />
                  {p.date}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{p.excerpt}</p>
              <span className="inline-flex items-center text-sm font-body font-semibold text-primary group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
