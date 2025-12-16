import { Target, Eye, Award, Users } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To deliver exceptional electrical and infrastructure solutions that exceed client expectations while maintaining the highest standards of safety and quality.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the most trusted partner for electrical infrastructure projects across India, known for innovation, reliability, and customer satisfaction.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "We adhere to strict quality standards and use only premium materials and components to ensure long-lasting, reliable installations.",
  },
  {
    icon: Users,
    title: "Team",
    description: "Our skilled team of engineers, technicians, and project managers brings decades of combined experience to every project we undertake.",
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
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Shivani Enterprises was founded with a simple yet powerful vision: 
                  to provide world-class electrical and infrastructure solutions that 
                  enable businesses to operate safely and efficiently.
                </p>
                <p>
                  Over the years, we have successfully completed numerous projects 
                  ranging from small commercial installations to large industrial 
                  complexes. Our commitment to quality, safety, and customer satisfaction 
                  has earned us the trust of leading companies across India.
                </p>
                <p>
                  Today, we continue to grow and evolve, embracing new technologies 
                  and methodologies while staying true to our core values of integrity, 
                  excellence, and customer focus.
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
                      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Experience Stats */}
          <div className="mt-16 gradient-primary rounded-2xl p-8 md:p-12">
            <div className="grid gap-8 sm:grid-cols-3 text-center">
              <div>
                <div className="font-display text-4xl font-bold text-primary-foreground">
                  15+
                </div>
                <div className="mt-2 text-primary-foreground/80">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary-foreground">
                  200+
                </div>
                <div className="mt-2 text-primary-foreground/80">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-primary-foreground">
                  50+
                </div>
                <div className="mt-2 text-primary-foreground/80">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}