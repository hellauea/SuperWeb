import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import GlassCard from "../ui/GlassCard";
import { Globe, Search, Clock, Shield, Phone, TrendingUp, X, Check } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Online Presence",
    description: "Your business works even while you sleep. Customers can find you anytime, anywhere.",
  },
  {
    icon: Shield,
    title: "Builds Trust & Credibility",
    description: "A professional website makes your business look established and trustworthy.",
  },
  {
    icon: Search,
    title: "Shows Up on Google",
    description: "Customers searching for your services can actually find you online.",
  },
  {
    icon: Phone,
    title: "Easy Contact Options",
    description: "One-tap WhatsApp, call buttons, and Google Maps integration.",
  },
  {
    icon: TrendingUp,
    title: "Converts Visitors to Customers",
    description: "Strategic design that guides visitors to take action and contact you.",
  },
  {
    icon: Globe,
    title: "Reach Beyond Local",
    description: "Expand your customer base beyond your physical location.",
  },
];

const comparison = [
  { aspect: "Customer Reach", with: "Unlimited, 24/7", without: "Limited to walk-ins" },
  { aspect: "Credibility", with: "Professional & Trusted", without: "Questionable" },
  { aspect: "Google Visibility", with: "Easily Found", without: "Invisible" },
  { aspect: "Lead Generation", with: "Automated", without: "Manual Only" },
  { aspect: "Business Growth", with: "Scalable", without: "Stagnant" },
];

const WhyWebsiteSection = () => {
  return (
    <SectionWrapper id="why-website">
      <SectionHeading
        title="Why Your Business Needs a Website"
        subtitle="In today's digital world, not having a website is like having a shop with no signboard. Here's what you're missing:"
      />

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {benefits.map((benefit, index) => (
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

      {/* Comparison Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h3 className="heading-md text-center mb-8">With Website vs Without Website</h3>
        
        <div className="bg-card/30 rounded-2xl border border-border/50 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-card/50 border-b border-border/50">
            <div className="p-4 text-muted-foreground font-medium">Aspect</div>
            <div className="p-4 text-center font-semibold text-primary flex items-center justify-center gap-2">
              <Check className="w-5 h-5" /> With Website
            </div>
            <div className="p-4 text-center font-semibold text-muted-foreground flex items-center justify-center gap-2">
              <X className="w-5 h-5" /> Without
            </div>
          </div>

          {/* Rows */}
          {comparison.map((row, index) => (
            <motion.div
              key={row.aspect}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-3 border-b border-border/30 last:border-b-0"
            >
              <div className="p-4 text-foreground">{row.aspect}</div>
              <div className="p-4 text-center text-primary bg-primary/5">{row.with}</div>
              <div className="p-4 text-center text-muted-foreground">{row.without}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default WhyWebsiteSection;
