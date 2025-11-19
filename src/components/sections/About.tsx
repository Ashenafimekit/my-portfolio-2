import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Clean & Maintainable Code",
    description:
      "I write scalable, well-structured code using best practices and modern frameworks like React, Next.js, NestJS, Express, PostgreSQL, MongoDB, and WordPress.",
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    description:
      "I focus on building fast and efficient applications with smooth user experiences.",
  },
  {
    icon: Users,
    title: "Collaborative Mindset",
    description:
      "I work effectively with cross-functional teams to deliver high-quality software solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
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
            Hi, I am Ashenafi Mekit, a Software Developer building full-stack
            applications using React, Express, Next.js, NestJS, PostgreSQL,
            MongoDB, and WordPress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 md:mx-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              I'm a <span className="text-primary">Developer</span> passionate
              about building real-world solutions
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I specialize in full-stack development using React, Express,
              Next.js, NestJS, PostgreSQL, MongoDB, and WordPress. My work
              ranges from personal projects like TravelEase to enterprise
              applications at Ethio Telecom.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I focus on clean architecture, scalable systems, and crafting
              user-friendly interfaces. Every project I take on is an
              opportunity to solve complex problems efficiently.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of work, I enjoy exploring new technologies, contributing
              to open-source projects, and continuously improving my skills in
              web development and system design.
            </p>
          </motion.div>

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
