import { Factory, Building2, Warehouse, ShoppingBag, Paintbrush, Wrench, ChevronDown } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const serviceCards = [
  {
    icon: Factory,
    title: "Industrial Projects",
    description: "Factory installations, motor controls, PLC systems",
    gradient: "gradient-card-blue",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Office wiring, retail lighting, power backup",
    gradient: "gradient-card-teal",
  },
  {
    icon: Warehouse,
    title: "Warehouse Solutions",
    description: "Lighting systems, material handling, loading bays",
    gradient: "gradient-card-green",
  },
  {
    icon: ShoppingBag,
    title: "Mall & Complex Services",
    description: "Escalators, decorative lighting, monitoring",
    gradient: "gradient-card-blue",
  },
  {
    icon: Paintbrush,
    title: "Interior Services",
    description: "Space planning, false ceiling, designer lighting",
    gradient: "gradient-card-teal",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "24/7 support, preventive maintenance, repairs",
    gradient: "gradient-card-green",
  },
];

const detailedServices = [
  {
    title: "Industrial Projects",
    items: [
      "HT/LT panel installation and commissioning",
      "Motor control centers (MCC) design and setup",
      "PLC/SCADA automation systems",
      "Power factor correction systems",
      "Industrial lighting solutions",
      "Cable tray and conduit installation",
      "Earthing and lightning protection",
    ],
  },
  {
    title: "Commercial Projects",
    items: [
      "Complete office electrical fit-out",
      "Retail store lighting design",
      "UPS and power backup systems",
      "Structured cabling (data/voice)",
      "Access control and security systems",
      "Emergency lighting and fire alarms",
      "Energy-efficient LED retrofits",
    ],
  },
  {
    title: "Warehouse Solutions",
    items: [
      "High-bay industrial lighting",
      "Material handling equipment wiring",
      "Loading dock electrical systems",
      "Warehouse automation wiring",
      "Temperature control systems",
      "Safety interlocks and sensors",
      "Power distribution for racking systems",
    ],
  },
  {
    title: "Mall & Complex Services",
    items: [
      "Escalator and elevator electrical systems",
      "Decorative and facade lighting",
      "Parking management systems",
      "Central monitoring and BMS integration",
      "Food court electrical infrastructure",
      "Anchor store electrical fit-outs",
      "Common area power management",
    ],
  },
  {
    title: "Interior Services",
    items: [
      "Space planning and electrical layout",
      "False ceiling with integrated lighting",
      "Designer lighting fixtures installation",
      "Concealed wiring and conduits",
      "Smart home and automation systems",
      "Audio-visual system wiring",
      "Modular furniture power points",
    ],
  },
  {
    title: "Maintenance & Support",
    items: [
      "24/7 emergency support",
      "Preventive maintenance contracts",
      "Electrical safety audits",
      "Thermal imaging surveys",
      "Power quality analysis",
      "Equipment repair and replacement",
      "AMC for electrical systems",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <div className="py-12">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical and infrastructure solutions tailored to meet 
              your specific requirements across all sectors.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {serviceCards.map((service, index) => (
              <Card
                key={index}
                className={`${service.gradient} border-border/30 hover:shadow-lg transition-all duration-300`}
              >
                <CardHeader className="pb-2">
                  <service.icon className="h-12 w-12 text-primary mb-2" />
                  <CardTitle className="font-display text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Services */}
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
              Detailed Service Information
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {detailedServices.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`service-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pb-2">
                      {service.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
}