import { Layout } from "@/components/layout/Layout";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "industrial",
    title: "Industrial Projects",
    summary: "We deliver robust and efficient industrial environments designed to support long-term operations. Our approach emphasizes structural excellence, functional planning, and adherence to stringent industrial standards.",
    includes: [
      "Industrial and factory building construction",
      "RCC and structural framework",
      "Utility buildings and service areas",
      "Heavy-duty industrial flooring",
      "Integrated electrical and infrastructure works",
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    summary: "We create refined commercial and corporate spaces that reflect professionalism, efficiency, and modern design. Each project is executed with meticulous attention to detail and operational continuity.",
    includes: [
      "Corporate and office building construction",
      "Commercial renovations and upgrades",
      "Turnkey interior fit-outs",
      "Electrical, lighting, and service systems",
      "Civil, finishing, and detailing works",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "warehouse",
    title: "Warehouse Solutions",
    summary: "We design and execute high-performance warehouse facilities that balance functionality, scalability, and durability, tailored to logistics and industrial requirements.",
    includes: [
      "Warehouse and logistics facility construction",
      "Internal circulation roads and pavements",
      "Loading bays and service docks",
      "High-efficiency lighting systems",
      "Complete infrastructure and electrical works",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "residential",
    title: "Residential Projects",
    summary: "We craft elegant and enduring residential spaces that prioritize comfort, planning, and quality execution, delivering homes that stand the test of time.",
    includes: [
      "Independent residences and builder floors",
      "Farmhouse construction and development",
      "Structural and renovation works",
      "Premium civil and finishing services",
      "Electrical and plumbing coordination",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  },
  {
    id: "interior",
    title: "Interior Services",
    summary: "Our interior services blend aesthetics with precision engineering, creating sophisticated spaces that are both functional and visually refined.",
    includes: [
      "Detailed space planning and layouts",
      "False ceiling and lighting design",
      "Premium flooring and wall finishes",
      "Custom wooden furniture and paneling",
      "Integrated electrical and lighting systems",
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    summary: "We provide discreet and dependable maintenance services to preserve the quality, safety, and performance of completed projects over time.",
    includes: [
      "Preventive and scheduled maintenance",
      "Civil and interior repair works",
      "Electrical system maintenance",
      "Renovation and upgrade solutions",
      "Dedicated support services",
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1169&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <Layout>
      <div className="py-20 animate-fade-in">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Shivani Enterprises, we deliver thoughtfully engineered construction and
              interior solutions that combine craftsmanship, precision, and enduring quality.
              Our services span residential, commercial, and industrial sectors, offering
              seamless execution from concept to completion.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-8 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                    <span className="font-mono text-5xl md:text-6xl font-bold text-primary/20 select-none leading-none">
                      0{index + 1}
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-xl">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
                      Summary
                    </h3>
                    <p className="text-foreground/90 leading-relaxed text-lg">
                      {service.summary}
                    </p>
                  </div>

                  {/* Includes List */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                      Includes
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="overflow-hidden rounded-xl shadow-lg border border-border/50 bg-muted aspect-[4/3]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                        <span className="text-white font-display font-bold text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}