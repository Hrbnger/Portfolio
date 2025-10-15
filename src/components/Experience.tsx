import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
   {
      year: "2024 - Present",
      role: "Cisco Networking",
      company: "Cisco.",
      description:
        "Leading mobile design initiatives for iOS and Android applications. Spearheading design system development and cross-platform consistency.",
    },
    {
      year: "2023 - 2024",
      role: "Beginner developer",
      company: "Cisco.",
      description:
        "Built interactive web experiences combining creative design with modern development practices. Specialized in React and Three.js implementations.",
    },
    {
      year: "2020 - 2023",
      role: "UI/UX Designer",
      company: "Adobe",
      description:
        "Designed user-centric interfaces for multiple SaaS products. Conducted user research and usability testing to drive design decisions.",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden bg-card/30">
      {/* Starfield Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground rounded-full animate-glow-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary text-glow-cyan mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto glow-cyan"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary md:-ml-px"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-20 animate-slide-in ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start md:items-center">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-background glow-pink z-10"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    } bg-card border-2 border-border hover:border-accent/50 rounded-xl p-6 md:p-8 transition-all duration-500 hover:glow-violet group`}
                  >
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 mb-4 group-hover:glow-pink transition-all duration-300">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>

                    {/* Year */}
                    <p className="text-sm font-semibold text-primary mb-2">
                      {exp.year}
                    </p>

                    {/* Role */}
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <p className="text-secondary font-medium mb-3">
                      {exp.company}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
