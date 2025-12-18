import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const categories = [
  "Commercial",
  "Residential",
  "Renovation",
  "Electrical",
  "Mechanical",
];

const projects = [
  {
    id: 1,
    title: "UFlex Industrial Plant",
    category: "Commercial",
    description: "Complete electrical infrastructure setup for a major industrial facility including HT/LT panels, motor controls, and PLC automation systems.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 2,
    title: "Metro Mall Complex",
    category: "Commercial",
    description: "Full electrical installation for a multi-story shopping complex including escalators, decorative lighting, and fire safety systems.",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 3,
    title: "Logistics Hub Warehouse",
    category: "Commercial",
    description: "Warehouse electrical systems with high-bay lighting, material handling equipment wiring, and loading bay installations.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 4,
    title: "Premium Residence",
    category: "Residential",
    description: "High-end residential electrical work including smart home integration, concealed wiring, and designer lighting fixtures.",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 5,
    title: "Office Building Renovation",
    category: "Renovation",
    description: "Complete electrical overhaul of a 10-story office building with modern LED lighting and power backup systems.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 6,
    title: "Factory Power Distribution",
    category: "Electrical",
    description: "Industrial power distribution system with transformers, bus ducts, and motor control centers.",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 7,
    title: "HVAC Installation",
    category: "Mechanical",
    description: "Complete HVAC system installation for a corporate office including ducting, controls, and ventilation.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 8,
    title: "Retail Store Chain",
    category: "Commercial",
    description: "Electrical fit-out for multiple retail outlets with uniform branding lighting and POS systems.",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 9,
    title: "Heritage Building Restoration",
    category: "Renovation",
    description: "Sensitive electrical restoration maintaining heritage aesthetics while meeting modern safety standards.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
];

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
}

const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  // Auto-slide effect
  useEffect(() => {
    if (!selectedProject || selectedProject.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [selectedProject, currentImageIndex]);

  return (
    <Layout>
      <div className="py-12">
        <div className="container">
          {/* Header */}
          <div className="mb-10">
            <h1 className="font-display text-4xl font-bold text-foreground">
              Our Projects
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Explore our portfolio of successfully completed projects across various sectors.
            </p>
          </div>

          {/* Main Layout */}
          <div className="flex gap-8">
            {/* Sidebar - Categories */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-24 space-y-1">
                <h3 className="font-display font-semibold text-foreground mb-4 px-3">
                  Categories
                </h3>
                {categories.map((category) => (
                  <div
                    key={category}
                    className="px-3 py-2 text-sm text-muted-foreground rounded-md bg-muted/50"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </aside>

            {/* Projects Grid */}
            <div className="flex-1">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    className="group cursor-pointer overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300"
                    onClick={() => openProject(project)}
                  >
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="mt-1 font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogTitle className="sr-only">
            {selectedProject?.title}
          </DialogTitle>
          {selectedProject && (
            <div>
              {/* Image Carousel */}
              <div className="relative aspect-video bg-muted">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="h-full w-full object-cover"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                    
                    {/* Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            idx === currentImageIndex 
                              ? "bg-primary" 
                              : "bg-background/60 hover:bg-background"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
                  {selectedProject.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
}