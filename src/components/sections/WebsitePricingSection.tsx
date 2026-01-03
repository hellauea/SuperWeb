import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import AnimatedButton from "../ui/AnimatedButton";
import { Check, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919606664929";

const websitePlans = [
  {
    name: "Basic Website",
    price: "₹3,499",
    badge: null,
    description: "Perfect for small businesses starting their online journey.",
    features: [
      "Responsive design",
      "Up to 5 pages",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO",
      "1 revision round",
    ],
  },
  {
    name: "Premium Website",
    price: "₹4,999",
    badge: "MOST CHOSEN",
    description: "Best value for businesses serious about their online presence.",
    features: [
      "Everything in Basic +",
      "Up to 10 pages",
      "Advanced animations",
      "Performance optimization",
      "Advanced SEO",
      "Google Analytics",
      "Priority support",
      "2 revision rounds",
    ],
  },
  {
    name: "Custom / WordPress",
    price: "Let's Talk",
    badge: null,
    description: "For businesses needing CMS, e-commerce, or custom features.",
    features: [
      "Custom functionality",
      "CMS integration",
      "E-commerce ready",
      "Blog system",
      "Custom features",
      "Ongoing support",
    ],
  },
];

const WebsitePricingSection = () => {
  return (
    <SectionWrapper id="website-pricing" className="bg-card/20">
      <SectionHeading
        title="Website Pricing"
        subtitle="Professional websites that fit your budget. Simple, transparent pricing."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {websitePlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`relative h-full p-8 rounded-2xl border backdrop-blur-sm overflow-hidden group ${
              plan.badge
                ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30"
                : "bg-card/50 border-border/50"
            }`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-1 -right-1">
                <div className="flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-xl animate-glow">
                  <Star className="w-3 h-3 fill-current" />
                  {plan.badge}
                </div>
              </div>
            )}

            {/* Glow for featured plan */}
            {plan.badge && (
              <div className="absolute inset-0 rounded-2xl glow-primary-subtle" />
            )}

            {/* Plan name */}
            <h3 className="relative z-10 text-xl font-semibold text-foreground mb-2">{plan.name}</h3>

            {/* Price */}
            <div className="relative z-10 mb-4">
              <span className={`text-4xl font-bold ${plan.badge ? "gradient-text" : "text-foreground"}`}>
                {plan.price}
              </span>
            </div>

            {/* Description */}
            <p className="relative z-10 text-muted-foreground text-sm mb-6">{plan.description}</p>

            {/* Features */}
            <ul className="relative z-10 space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.badge ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="relative z-10 mt-auto">
              <AnimatedButton
                href={`${WHATSAPP_URL}?text=Hi! I'm interested in the ${plan.name} (${plan.price})`}
                external
                variant={plan.badge ? "primary" : "secondary"}
                className="w-full justify-center"
              >
                {plan.price === "Let's Talk" ? "Contact Us" : "Get Started"}
              </AnimatedButton>
            </div>

            {/* Glow effect */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full filter blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default WebsitePricingSection;
