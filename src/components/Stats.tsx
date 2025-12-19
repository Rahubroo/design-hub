import { useEffect, useState, useRef } from "react";

function useCountUp(end: number, duration: number = 2000, decimals: number = 0) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let startTime: number | null = null;
                    const step = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);

                        // Easing function: easeOutCubic (faster finish)
                        const easeOut = 1 - Math.pow(1 - progress, 3);

                        setCount(end * easeOut);

                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return { count, elementRef };
}

export function Stats() {
    const projectsCount = useCountUp(30, 2000);
    const areaCount = useCountUp(200000, 2000);
    const citiesCount = useCountUp(5, 2000);

    return (
        <section className="bg-background py-16 border-y border-border/30">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/50">
                    {/* Projects */}
                    <div className="px-4 py-8 md:py-0 text-center" ref={projectsCount.elementRef}>
                        <div className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-2 text-foreground">
                            {Math.floor(projectsCount.count)}+
                        </div>
                        <div className="text-foreground/80 font-medium tracking-wide uppercase text-sm md:text-base">
                            Projects
                        </div>
                    </div>

                    {/* Area */}
                    <div className="px-4 py-8 md:py-0 text-center" ref={areaCount.elementRef}>
                        <div className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-2 text-foreground">
                            {Math.floor(areaCount.count).toLocaleString()}+
                        </div>
                        <div className="text-foreground/80 font-medium tracking-wide uppercase text-sm md:text-base">
                            Sq. Ft. Area Constructed
                        </div>
                    </div>

                    {/* Cities */}
                    <div className="px-4 py-8 md:py-0 text-center" ref={citiesCount.elementRef}>
                        <div className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-2 text-foreground">
                            {Math.floor(citiesCount.count)}+
                        </div>
                        <div className="text-foreground/80 font-medium tracking-wide uppercase text-sm md:text-base">
                            City Expansion
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
