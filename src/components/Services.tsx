import { Palette, Code, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Creative Design",
      description:
        "Crafting intuitive and visually stunning user interfaces that captivate and engage. From wireframes to high-fidelity prototypes.",
      color: "primary",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building responsive, performant web applications with modern frameworks. Clean code, scalable architecture, pixel-perfect execution.",
      color: "accent",
    },
    {
      icon: Smartphone,
      title: "Mobile Design",
      description:
        "Designing beautiful mobile experiences optimized for touch. Native feel, smooth animations, and delightful interactions.",
      color: "secondary",
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-glow-pink mb-4">
            What I'm Offering
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto glow-pink"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-secondary/0 group-hover:from-primary/10 group-hover:via-accent/10 group-hover:to-secondary/10 transition-all duration-500"></div>

              <CardContent className="p-8 relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-block p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:glow-pink transition-all duration-500 group-hover:scale-110">
                  <service.icon className={`h-10 w-10 text-${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
