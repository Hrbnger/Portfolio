import { Code2, Palette, Zap, Award, Users, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Next Js", level: 65, color: "primary" },
    { name: "Java", level: 60, color: "secondary" },
    { name: "React & TypeScript", level: 58, color: "accent" },
    { name: "JavaScript", level: 72, color: "primary" },
    { name: "Python", level: 86, color: "secondary" },
  ];

  const stats = [
    { icon: Award, value: "10+", label: "Projects Completed" },
    { icon: Users, value: "20+", label: "Happy Clients" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
    { icon: Zap, value: "3+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary text-glow-cyan mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto glow-cyan"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            {/* Left Column - Introduction */}
            <div className="space-y-6 animate-slide-in">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 glow-pink">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 glow-cyan">
                  <Palette className="h-8 w-8 text-secondary" />
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 glow-violet">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Creative Technologist & Designer
              </h3>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I’m a passionate IT student at Kabarak University, currently pursuing a Diploma in Information Technology (2024 – Present).
                My journey into tech began during my high school years at St. Patrick’s (2020 – 2023), where I first developed an interest in how technology shapes the way we live, learn, and connect.
                Since then, I’ve been driven by curiosity and creativity — always eager to explore how digital tools can solve real-world problems.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I specialize in web design, front-end development, and creative problem-solving,
                blending technical knowledge with a keen eye for design. 
                My goal is to craft digital experiences that are not only functional but also visually engaging and user-centered.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                When I'm not pushing pixels or writing code, you'll find me exploring new design trends, experimenting with 
                emerging technologies, and constantly learning to stay ahead in this ever-evolving digital landscape.
              </p>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-6 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl md:text-3xl font-bold text-accent mb-8">
                My Skills
              </h3>

              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${
                        skill.color === "primary"
                          ? "from-primary to-accent"
                          : skill.color === "secondary"
                          ? "from-secondary to-accent"
                          : "from-accent to-primary"
                      } transition-all duration-1000 ease-out glow-${skill.color === "primary" ? "pink" : skill.color === "secondary" ? "cyan" : "violet"}`}
                      style={{
                        width: `${skill.level}%`,
                        animation: "slide-in 1s ease-out",
                        animationDelay: `${index * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-slide-up">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-xl p-6 text-center transition-all duration-500 hover:scale-105 hover:glow-pink"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 group-hover:glow-pink transition-all duration-300">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-primary text-glow-pink mb-2">
                  {stat.value}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
