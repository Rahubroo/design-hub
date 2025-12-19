import { Target, Eye, Award, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Stats } from "@/components/Stats";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To deliver high-quality construction, civil, and interior solutions through precise execution, transparent practices, and a commitment to long-term value. We aim to create spaces that are functional, durable, and thoughtfully built to exceed client expectations.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be a trusted and respected construction partner known for reliability, craftsmanship, and excellence across residential, commercial, and industrial projects, while continuously evolving with modern construction practices and design standards.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Quality is at the core of everything we do. From materials and workmanship to site management and finishing, we adhere to strict quality standards to ensure safety, durability, and refined outcomes in every project we deliver.",
  },
  {
    icon: Users,
    title: "Team",
    description: "Our strength lies in our experienced team of engineers, architects, supervisors, and skilled workforce who collaborate seamlessly to execute projects with precision, accountability, and attention to detail at every stage.",
  },
];

export default function About() {
  return (
    <Layout>
      <div className="py-12">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl font-bold text-foreground">
              About Shivani Enterprises
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              With years of experience in electrical and infrastructure projects,
              Shivani Enterprises has established itself as a trusted partner for
              businesses across various sectors.
            </p>
          </div>

          {/* Company Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="gradient-card-blue rounded-2xl p-8 md:p-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
                <p>
                  Shivani Enterprises was founded with a clear vision — to deliver reliable, high-quality construction and interior solutions built on trust, technical expertise, and long-term value. What began as a focused civil and renovation services firm has grown into a multi-disciplinary organization handling residential, commercial, and industrial projects across Delhi NCR.
                </p>
                <p>
                  With hands-on experience in civil construction, interior fit-outs, renovations, and landscaping works, Shivani Enterprises has successfully delivered a wide range of projects including residential homes, farmhouses, corporate offices, warehouses, and commercial spaces. Each project reflects our commitment to precision, durability, and thoughtful execution.
                </p>
                <p>
                  Our strength lies in our end-to-end approach — from planning and execution to finishing and maintenance. We work closely with clients to understand their requirements, ensuring efficient space utilization, timely delivery, and cost-effective solutions without compromising on quality. Safety standards, technical best practices, and transparent communication remain integral to every project we undertake.
                </p>
                <p>
                  Over the years, Shivani Enterprises has built lasting relationships with clients through consistent performance, skilled workmanship, and ethical practices. As we continue to grow, our focus remains on evolving with modern construction technologies, sustainable methods, and innovative design solutions.
                </p>
                <p>
                  At Shivani Enterprises, we don’t just build structures — we build spaces that last, perform, and add value.
                </p>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-border/50 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg gradient-primary shrink-0">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-foreground/80 text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16">
            <Stats />
          </div>
        </div>
      </div>
    </Layout>
  );
}