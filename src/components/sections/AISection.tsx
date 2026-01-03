import { motion } from "framer-motion";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import AnimatedButton from "../ui/AnimatedButton";
import { Bot, Brain, Sparkles, LineChart, MessageSquare, Workflow, Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919606664929";

const aiFeatures = [
  { icon: MessageSquare, title: "AI Chatbot", description: "24/7 customer support that never sleeps" },
  { icon: Brain, title: "Smart Forms", description: "Intelligent lead qualification" },
  { icon: Workflow, title: "Automation", description: "Reduce manual work by 80%" },
  { icon: LineChart, title: "Analytics", description: "Data-driven insights for growth" },
];

const aiPlans = [
  {
    name: "AI Integration",
    price: "₹9,999",
    description: "Add AI capabilities to your existing website or app.",
    features: [
      "AI chatbot integration",
      "Smart enquiry forms",
      "Basic automation",
      "Lead capture & scoring",
      "Basic analytics dashboard",
    ],
  },
  {
    name: "Advanced AI Systems",
    price: "₹14,999",
    description: "Complete AI-powered business transformation.",
    features: [
      "Custom AI models",
      "Advanced workflow automation",
      "API integrations (CRM, tools)",
      "Predictive analytics",
      "Ongoing optimization",
      "Priority support",
    ],
    featured: true,
  },
];

const AISection = () => {
  return (
    <SectionWrapper id="ai">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"
          animate={{
            x: [0, 100, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-[80px]"
          animate={{
            x: [0, -80, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10">
        <SectionHeading
          title="Turn Your Website or App Into a Smart System"
          subtitle="Leverage AI to automate customer service, capture leads, and make data-driven decisions. The future of business is intelligent."
          gradient
        />

        {/* AI Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-card/30 border border-border/30 backdrop-blur-sm"
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* AI Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {aiPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm overflow-hidden group ${
                plan.featured
                  ? "bg-gradient-to-br from-purple-500/10 to-primary/10 border-primary/30"
                  : "bg-card/50 border-border/50"
              }`}
            >
              {/* Animated border for featured */}
              {plan.featured && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              )}

              {/* Icon */}
              <motion.div
                className="relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {plan.featured ? (
                  <Sparkles className="w-7 h-7 text-primary" />
                ) : (
                  <Bot className="w-7 h-7 text-primary" />
                )}
              </motion.div>

              {/* Plan name */}
              <h3 className="relative z-10 text-xl font-semibold text-foreground mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="relative z-10 mb-4">
                <span className="text-4xl font-bold gradient-text">{plan.price}</span>
              </div>

              {/* Description */}
              <p className="relative z-10 text-muted-foreground mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="relative z-10 space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="relative z-10">
                <AnimatedButton
                  href={`${WHATSAPP_URL}?text=Hi! I'm interested in ${plan.name} (${plan.price})`}
                  external
                  variant={plan.featured ? "primary" : "secondary"}
                  className="w-full justify-center"
                >
                  Get AI Power
                </AnimatedButton>
              </div>

              {/* Glow effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full filter blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AISection;
