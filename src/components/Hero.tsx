import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profilePhoto from "public/dark.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = ["Mobile Developer", "Mobile Designer", "Creative Technologist"];
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timer = setTimeout(() => {
      const currentFullRole = roles[roleIndex];

      if (!isDeleting && charIndex < currentFullRole.length) {
        setCurrentRole(currentFullRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentFullRole.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentFullRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Profile Photo with Neon Glow */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow-pulse"></div>
            <img
              src={profilePhoto}
              alt="Victor Kuto"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/50 shadow-2xl glow-pink"
            />
          </div>

          {/* Greeting Text */}
          <div className="space-y-4">
            <h2 className="text-lg md:text-xl text-secondary text-glow-cyan animate-slide-up">
              Hello! I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary text-glow-pink animate-neon-flicker">
              Victor Kuto
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-accent font-light animate-slide-up min-h-[2.5rem] flex items-center justify-center" style={{ animationDelay: "0.2s" }}>
              {currentRole}
              <span className="animate-pulse ml-1">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: "0.4s" }}>
            I craft innovative digital experiences that blend cutting-edge technology with stunning visual design.
            Specializing in mobile-first solutions and creative problem-solving that pushes boundaries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-pink transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold px-8 py-6 text-lg glow-cyan transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
    </section>
  );
};

export default Hero;
