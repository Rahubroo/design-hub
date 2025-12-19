import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, MapPin, IndianRupee, Ruler, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    // Autoplay functionality with interaction handling
    useEffect(() => {
        if (!emblaApi) return;

        let intervalId: NodeJS.Timeout;

        const play = () => {
            stop();
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

        // Reset autoplay timer on any interaction
        const onInteraction = () => {
            stop();
            play();
        };

        emblaApi.on("pointerDown", stop);
        emblaApi.on("pointerUp", play);
        emblaApi.on("select", onInteraction);

        return () => {
            stop();
            emblaApi.off("pointerDown", stop);
            emblaApi.off("pointerUp", play);
            emblaApi.off("select", onInteraction);
        };
    }, [emblaApi]);

    return (
        <Card
            className="group flex flex-col cursor-pointer overflow-hidden border-border/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full"
            onClick={() => onClick(project)}
        >
            {/* Carousel Container */}
            <div className="aspect-[4/3] overflow-hidden bg-muted relative shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300 z-10 pointer-events-none" />
                <div className="absolute top-4 right-4 z-20">
                    <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                        {project.status}
                    </Badge>
                </div>

                {/* Embla Viewport */}
                <div className="h-full w-full" ref={emblaRef}>
                    <div className="flex h-full">
                        {project.images.map((image, idx) => (
                            <div key={idx} className="flex-[0_0_100%] min-w-0 relative h-full">
                                <img
                                    src={image}
                                    alt={`${project.title} ${idx + 1}`}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CardHeader className="p-6 pb-2">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                </h3>
            </CardHeader>

            <CardContent className="p-6 py-2 flex-1">
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                    {project.location && (
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span className="truncate">{project.location}</span>
                        </div>
                    )}
                    {project.value && project.value !== "N/A" && (
                        <div className="flex items-center gap-2">
                            <IndianRupee className="h-4 w-4" />
                            <span>{project.value}</span>
                        </div>
                    )}
                    {project.area && project.area !== "N/A" && (
                        <div className="flex items-center gap-2">
                            <Ruler className="h-4 w-4" />
                            <span>{project.area}</span>
                        </div>
                    )}
                    {project.status && (
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{project.status}</span>
                        </div>
                    )}
                </div>
                <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                </p>
            </CardContent>

            <CardFooter className="p-6 pt-2 mt-auto">
                <span className="text-primary font-medium text-sm hover:underline flex items-center gap-1 group/btn">
                    Read More
                    <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </span>
            </CardFooter>
        </Card>
    );
}
