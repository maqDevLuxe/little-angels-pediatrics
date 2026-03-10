import { motion } from "framer-motion";
import { TrendingUp, Ruler, Weight, Activity } from "lucide-react";

const metrics = [
  { icon: Ruler, label: "Height Tracking", value: "98%", sub: "Accuracy Rate", color: "text-primary bg-baby-blue-light" },
  { icon: Weight, label: "Weight Percentile", value: "50th", sub: "Healthy Median", color: "text-accent bg-warm-yellow-light" },
  { icon: Activity, label: "Milestone Checks", value: "24+", sub: "Per Year", color: "text-sage bg-sage-light" },
  { icon: TrendingUp, label: "Growth Charts", value: "100%", sub: "Digital Records", color: "text-rose bg-rose-light" },
];

const GrowthMetrics = () => (
  <section className="section-padding gradient-section">
    <div className="container-clinic">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="badge-clinic mb-4 inline-flex">Growth & Development</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Health & Growth Tracking
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          We monitor every milestone with precision, using digital growth charts and evidence-based developmental assessments.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
            className="card-clinic text-center"
          >
            <div className={`w-12 h-12 rounded-xl ${m.color} flex items-center justify-center mx-auto mb-4`}>
              <m.icon className="w-6 h-6" />
            </div>
            <p className="font-heading text-3xl font-bold text-foreground mb-1">{m.value}</p>
            <p className="font-body text-sm font-semibold text-foreground mb-0.5">{m.label}</p>
            <p className="font-body text-xs text-muted-foreground">{m.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GrowthMetrics;
