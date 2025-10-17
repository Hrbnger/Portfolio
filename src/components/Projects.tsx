import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AgriSense Web App",
      description: "A web application for farmers to track their crops and livestock, and get real-time insights on their farming activities.",
      tags: ["React Native", "TypeScript", "Supabase", "Tailwind CSS"],
      image: "public/agri.jpg",
      demoUrl: "https://soil-sense-smart.lovable.app/",
      githubUrl: "https://github.com/Hrbnger/AgriSense",
    },
     {
      title: "Quest tracker",
      description: "A web application for setting up quests or tasks for your own and it monitors it.",
      tags: ["React Native", "TypeScript", "Supabase", "Tailwind CSS"],
      image: "public/agri.jpg",
      demoUrl: "https://joyful-quest-track.lovable.app/",
      githubUrl: "https://github.com/Hrbnger/quest-tracker",
    },
    
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-glow-pink mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto glow-pink mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, spanning mobile apps, web platforms, and creative digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/80 backdrop-blur-sm">
                  <a
                    href={project.demoUrl}
                    className="p-4 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform glow-pink"
                    aria-label="View Demo"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-4 rounded-full bg-secondary text-secondary-foreground hover:scale-110 transition-transform glow-cyan"
                    aria-label="View Code"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <CardHeader>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
