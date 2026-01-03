import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import AnimatedButton from "../ui/AnimatedButton";
import { Check, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919606664929";

const appPlans = [
  {
    name: "Basic App",
    price: "₹20,000",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    badge: null,
    description: "Perfect for businesses that want customers to reach them faster.",
    features: [
      "Android app",
      "5–7 screens",
      "Business info pages",
      "Call, WhatsApp & contact integration",
      "Gallery",
      "Google Maps",
      "Enquiry form",
      "Clean, fast UI",
    ],
  },
  {
    name: "Advanced App",
    price: "₹25,000",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    badge: null,
    description: "Ideal for growing businesses that want engagement and control.",
    features: [
      "Everything in Basic +",
      "Login / Signup",
      "Backend (Firebase / Supabase)",
      "Push notifications",
      "Admin-controlled content",
      "Improved UI & performance",
      "Scalable structure",
    ],
  },
  {
    name: "Basic AI App",
    price: "₹30,000",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    badge: null,
    description: "Your app that talks to customers even when you're offline.",
    features: [
      "Everything in Advanced +",
      "AI chatbot",
      "Smart enquiry handling",
      "Automated replies",
      "Lead capture",
      "Basic analytics",
    ],
  },
  {
    name: "Advanced AI App",
    price: "₹40,000",
    color: "from-primary/20 to-red-600/20",
    borderColor: "border-primary/50",
    badge: "BEST FOR SCALING",
    description: "Not just an app — a complete intelligent business system.",
    features: [
      "Custom AI workflows",
      "Business logic automation",
      "AI dashboards",
      "API integrations (CRM, tools)",
      "Advanced analytics",
      "Optimization-ready architecture",
    ],
  },
];

const AppPricingSection = () => {
  return (
    <SectionWrapper id="app-pricing" className="bg-card/20">
      <SectionHeading
        title="App Development Pricing"
        subtitle="Transparent pricing for every business size. No hidden costs, no surprises."
        gradient
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {appPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`relative h-full p-6 rounded-2xl bg-gradient-to-br ${plan.color} border ${plan.borderColor} backdrop-blur-sm overflow-hidden group`}
          >
            {/* Badge */}
            {plan.badge && (
              <div className="absolute -top-1 -right-1">
                <div className="flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-xl">
                  <Star className="w-3 h-3 fill-current" />
                  {plan.badge}
                </div>
              </div>
            )}

            {/* Plan name */}
            <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>

            {/* Price */}
            <div className="mb-4">
              <span className="text-3xl font-bold gradient-text">{plan.price}</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto">
              <AnimatedButton
                href={`${WHATSAPP_URL}?text=Hi! I'm interested in the ${plan.name} (${plan.price})`}
                external
                variant={plan.badge ? "primary" : "secondary"}
                className="w-full justify-center py-3"
              >
                Get Started
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

export default AppPricingSection;
