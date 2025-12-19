import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, Warehouse, ShoppingBag, Paintbrush, Wrench, MapPin, Home } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Stats } from "@/components/Stats";
import { projects } from "@/data/projects";

const services = [
  { icon: Factory, title: "Industrial", gradient: "gradient-card-blue" },
  { icon: Building2, title: "Commercial", gradient: "gradient-card-teal" },
  { icon: Warehouse, title: "Warehouse", gradient: "gradient-card-green" },
  { icon: Home, title: "Residential", gradient: "gradient-card-blue" },
  { icon: Paintbrush, title: "Commercial Interiors", gradient: "gradient-card-teal" },
  { icon: Wrench, title: "Maintenance", gradient: "gradient-card-green" },
];

const featuredProjects = projects.slice(0, 3);

export default function Index() {
  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
            poster="/placeholder.svg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Lighter overlay for more visible video */}
          <div className="pointer-events-none absolute inset-0 bg-background/30" />
          {/* Soft gradient at bottom only */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        </div>

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in">
              Building Tomorrow's{" "}
              <span className="text-gradient">Infrastructure</span>
            </h1>
            <p className="mt-6 text-lg text-white font-medium drop-shadow-md leading-relaxed animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Professional electrical and infrastructure solutions for industrial,
              commercial, and residential projects across India.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="gradient-primary border-0 text-primary-foreground">
                <Link to="/contact">Get A Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10">
                <Link to="/projects">
                  View Our Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">
              About Shivani Enterprises
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With years of experience in electrical and infrastructure projects,
              we deliver quality solutions that meet the highest industry standards.
              Our team of skilled professionals ensures every project is completed
              on time and within budget.
            </p>
            <Button asChild variant="link" className="mt-4 text-primary">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Featured Projects
            </h2>
            <Button asChild variant="ghost" className="text-primary">
              <Link to="/projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link to="/projects" key={project.id} className="block h-full">
                <Card className="group overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden bg-muted relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10" />
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical and infrastructure solutions tailored to your needs.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Link
                key={index}
                to="/services"
                className={`group p-6 rounded-xl ${service.gradient} border border-border/30 hover:shadow-md transition-all duration-300`}
              >
                <service.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Contact CTA */}
      <section className="py-20 gradient-primary">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            Contact us today to discuss your requirements and get a free quote.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}