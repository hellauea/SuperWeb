import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { Smartphone, Bell, Zap, Users, Fingerprint, TrendingUp } from "lucide-react";

const appBenefits = [
  {
    icon: Zap,
    title: "Faster Than Websites",
    description: "Apps load instantly and work offline. No waiting for pages to load.",
  },
  {
    icon: Smartphone,
    title: "Always on Customer's Phone",
    description: "Your brand icon sits right on their home screen, 24/7 visibility.",
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Send offers, updates, and reminders directly to customers. Instant engagement.",
  },
  {
    icon: Users,
    title: "Higher Engagement",
    description: "App users spend 4x more time than website visitors. Better conversions.",
  },
  {
    icon: Fingerprint,
    title: "Professional Brand Image",
    description: "Having an app positions your business as modern and customer-focused.",
  },
  {
    icon: TrendingUp,
    title: "Repeat Customers",
    description: "Easy reordering, loyalty programs, and personalized experiences.",
  },
];

const useCases = [
  {
    title: "Gym & Fitness",
    description: "Class schedules, membership management, workout tracking, payment integration.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Schools & Coaching",
    description: "Attendance, fee payment, assignments, parent communication, results.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Retail & Services",
    description: "Product catalog, orders, appointments, customer loyalty, push offers.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

const WhyAppsSection = () => {
  return (
    <SectionWrapper id="why-apps" className="bg-card/20">
      <SectionHeading
        title="Why Businesses Are Moving to Mobile Apps"
        subtitle="Websites are essential, but apps take customer engagement to the next level. Here's why businesses are investing in mobile apps:"
      />

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {appBenefits.map((benefit, index) => (
          <GlassCard key={benefit.title} delay={index * 0.1}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Use Cases */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="heading-md text-center mb-8">Apps for Every Business Type</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative p-8 rounded-2xl border border-border/50 bg-gradient-to-br ${useCase.gradient} backdrop-blur-sm overflow-hidden group`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-transparent" />
              
              <h4 className="text-xl font-semibold text-foreground mb-3 relative z-10">
                {useCase.title}
              </h4>
              <p className="text-muted-foreground relative z-10">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default WhyAppsSection;
