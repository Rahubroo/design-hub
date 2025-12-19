import { useEffect, useState } from "react";

const clients = [
    { name: "Uno Minda", logo: "/clients/uno-minda.png" },
    { name: "Bootes", logo: "/clients/bootes.png" },
    { name: "Flex Foods", logo: "/clients/flex-foods.png" },
    { name: "UFlex", logo: "/clients/uflex.png" },
];

export function ClientTicker() {
    return (
        <div className="w-full py-12 bg-muted/30 overflow-hidden">
            <div className="container mb-8 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground opacity-80">
                    Trusted By Industry Leaders
                </h3>
            </div>

            <div className="relative w-full flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 min-w-full px-8">
                    {/* First set of logos */}
                    {clients.map((client, index) => (
                        <div key={`client-1-${index}`} className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-16 w-auto object-contain max-w-[150px]"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for smoother infinite scroll */}
                    {clients.map((client, index) => (
                        <div key={`client-2-${index}`} className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-16 w-auto object-contain max-w-[150px]"
                            />
                        </div>
                    ))}

                    {/* Triplicate set for wider screens to ensure no gaps */}
                    {clients.map((client, index) => (
                        <div key={`client-3-${index}`} className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-16 w-auto object-contain max-w-[150px]"
                            />
                        </div>
                    ))}

                    {/* Quadruplicate set just to be safe for very wide screens */}
                    {clients.map((client, index) => (
                        <div key={`client-4-${index}`} className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                            <img
                                src={client.logo}
                                alt={client.name}
                                className="h-16 w-auto object-contain max-w-[150px]"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
