import { Mail, Instagram, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      e.currentTarget.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Mail, label: "Email", href: "kutovictor7@gmail.com", color: "primary" },
    { icon: Instagram, label: "Instagram", href: "#", color: "accent" },
    { icon: Phone, label: "WhatsApp", href: "+254706805629", color: "secondary" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "primary" },
    { icon: Github, label: "GitHub", href: "https://github.com/Hrbnger", color: "accent" },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-glow-pink mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto glow-pink mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Drop me a message and let's create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                    className="bg-card border-2 border-border focus:border-primary transition-colors glow-pink-on-focus"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    disabled={isSubmitting}
                    className="bg-card border-2 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    required
                    disabled={isSubmitting}
                    className="bg-card border-2 border-border focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={6}
                    required
                    disabled={isSubmitting}
                    className="bg-card border-2 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 glow-pink transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="animate-slide-in space-y-8" style={{ animationDelay: "0.2s" }}>
              {/* Email */}
              <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 glow-pink">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Email</h3>
                </div>
                <a
                  href="mailto:kutovictor7@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  kutovictor7@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-card/50 backdrop-blur-sm border-2 border-border rounded-xl p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-xl font-bold text-foreground mb-6">Follow Me</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 rounded-xl bg-gradient-to-br from-${social.color}/20 to-accent/20 border-2 border-border hover:border-${social.color}/50 transition-all duration-300 hover:scale-110 hover:glow-${social.color === 'primary' ? 'pink' : social.color === 'secondary' ? 'cyan' : 'violet'}`}
                      aria-label={social.label}
                    >
                      <social.icon className={`h-6 w-6 text-${social.color}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
