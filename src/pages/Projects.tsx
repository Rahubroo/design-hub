import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Building2, Home, Hammer, Zap, Wrench, X, MapPin, IndianRupee, Ruler, Clock } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/ProjectCard";

import { Project, projects } from "@/data/projects";

const categories = [
  { name: "Commercial", icon: Building2 },
  { name: "Residential", icon: Home },
  { name: "Renovation", icon: Hammer },
  { name: "Electrical", icon: Zap },
  { name: "Mechanical", icon: Wrench },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Embla setup
  // Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Autoplay functionality with interaction handling
  useEffect(() => {
    if (!emblaApi || !selectedProject) return;

    let intervalId: NodeJS.Timeout;

    const play = () => {
      stop(); // Clear existing timer to prevent dual-sliding
      intervalId = setInterval(() => {
        if (emblaApi.canScrollNext()) {
          emblaApi.scrollNext();
        } else {
          emblaApi.scrollTo(0);
        }
      }, 3000);
    };

    const stop = () => {
      if (intervalId) clearInterval(intervalId);
    };

    // Start initial autoplay
    play();

    // Reset autoplay timer on any interaction (touch, drag, click)
    // This ensures "continuous" sliding but waits for the user to finish
    const onInteraction = () => {
      stop();
      play();
    };

    emblaApi.on("pointerDown", stop); // Pause while dragging
    emblaApi.on("pointerUp", play);   // Resume after drag release
    emblaApi.on("select", onInteraction); // Reset timer on slide change (manual or auto)

    return () => {
      stop();
      emblaApi.off("pointerDown", stop);
      emblaApi.off("pointerUp", play);
      emblaApi.off("select", onInteraction);
    };
  }, [emblaApi, selectedProject]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedProject || !emblaApi) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Allow keyboard navigation and reset the autoplay timer
      if (e.key === "ArrowLeft") {
        emblaApi.scrollPrev();
        // Embla's 'select' event will trigger the timer reset
      } else if (e.key === "ArrowRight") {
        emblaApi.scrollNext();
        // Embla's 'select' event will trigger the timer reset
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [emblaApi, selectedProject]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar - Categories (Static & Sticky) */}
            <aside className="w-full md:w-64 lg:w-72 shrink-0 self-start md:sticky md:top-16 md:h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar py-8">
              <div className="space-y-3 bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                <h3 className="font-display font-semibold text-lg text-foreground px-2 mb-4">
                  Categories
                </h3>

                {categories.map((item) => (
                  <div
                    key={item.name}
                    className="w-full flex items-center gap-4 px-4 py-4 rounded-lg text-left bg-transparent text-foreground cursor-default"
                  >
                    <div className="p-2 rounded-md bg-secondary/50 text-secondary-foreground transition-colors">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="font-medium text-lg text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Projects Grid */}
            <div className="flex-1 py-12">
              {/* Header moved inside */}
              <div className="mb-12 text-center md:text-left">
                <h1 className="font-display text-4xl font-bold text-foreground">
                  Our Projects
                </h1>
                <p className="mt-4 text-muted-foreground max-w-2xl">
                  Explore our portfolio of successfully completed projects across various sectors.
                </p>
              </div>

              <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={setSelectedProject}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal with Carousel */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-7xl w-[95vw] md:w-full max-h-[90vh] p-0 overflow-hidden bg-background border-none gap-0 block my-auto">
          <DialogTitle className="sr-only">
            {selectedProject?.title}
          </DialogTitle>

          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-50 rounded-full bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-5 w-5" />
            </Button>

            {selectedProject && (
              <div className="flex flex-col md:flex-row h-[80vh] md:h-[600px] overflow-y-auto md:overflow-hidden">
                {/* Image Carousel Section */}
                <div className="w-full md:w-[55%] h-1/2 md:h-full relative bg-black shrink-0">
                  <div className="overflow-hidden h-full" ref={emblaRef}>
                    <div className="flex h-full">
                      {selectedProject.images.map((image, idx) => (
                        <div key={idx} className="flex-[0_0_100%] min-w-0 relative h-full">
                          <img
                            src={image}
                            alt={`${selectedProject.title} ${idx + 1}`}
                            className="block w-full h-full object-cover opacity-90"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-12 w-12"
                    onClick={scrollPrev}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full h-12 w-12"
                    onClick={scrollNext}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </div>

                {/* Details Section */}
                <div className="w-full md:w-[45%] p-6 md:p-8 flex flex-col bg-card overflow-y-auto">
                  <div className="mb-4">
                    <Badge className="mb-3" variant={selectedProject.status === "Completed" ? "default" : "secondary"}>
                      {selectedProject.status}
                    </Badge>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                      {selectedProject.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-muted-foreground p-4 bg-muted/30 rounded-lg">
                      {selectedProject.location && (
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground">Location</span>
                          <span>{selectedProject.location}</span>
                        </div>
                      )}
                      {selectedProject.value && selectedProject.value !== "N/A" && (
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground">Value</span>
                          <span>{selectedProject.value}</span>
                        </div>
                      )}
                      {selectedProject.area && selectedProject.area !== "N/A" && (
                        <div className="flex flex-col">
                          <span className="font-semibold text-foreground">Area</span>
                          <span>{selectedProject.area}</span>
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground">Category</span>
                        <span>{selectedProject.category}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base">
                      {selectedProject.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}