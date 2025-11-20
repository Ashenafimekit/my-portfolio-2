import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Clean & Scalable Engineering",
    description:
      "I build systems using clean architecture principles, ensuring long-term maintainability, scalability, and reliable performance.",
  },
  {
    icon: Zap,
    title: "Performance-Oriented Development",
    description:
      "I prioritize efficient, optimized applications with smooth user experiences and strong attention to detail.",
  },
  {
    icon: Users,
    title: "Strong Collaboration",
    description:
      "I work effectively within cross-functional teams, ensuring clear communication and delivering solutions aligned with business goals.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I am a Software Developer with experience building real-world
            digital products, ranging from internal enterprise tools to
            client-focused web applications. I emphasize clean architecture,
            thoughtful design, and delivering high-quality engineering
            solutions.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mx-20">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              A developer focused on{" "}
              <span className="text-primary">quality, clarity,</span> and{" "}
              <span className="text-primary">impact</span>
            </h3>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              I specialize in building efficient, scalable applications and
              improving digital systems through clean engineering practices. My
              experience spans both frontend and backend development, enabling
              me to design solutions that are reliable, maintainable, and
              aligned with business needs.
            </p>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              Throughout my journey, I've contributed to enterprise
              applications, internal platforms, client websites, and personal
              projects — always with a focus on performance, usability, and
              long-term maintainability.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I continue to stay curious and grow by exploring new technologies,
              refining development workflows, and expanding my understanding of
              modern software engineering and system design.
            </p>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
