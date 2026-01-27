"use client";

import { siteContent } from "@/content/siteContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServiceTabs() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <Tabs defaultValue="social" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-surface">
          {siteContent.services.tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-background"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {siteContent.services.tabs.map((service) => (
          <TabsContent key={service.id} value={service.id} className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">{service.title}</h2>
              <p className="text-lg text-frost-white max-w-2xl mx-auto">{service.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Deliverables */}
              <Card className="bg-surface border-border">
                <CardHeader>
                  <CardTitle className="text-primary">What You Get</CardTitle>
                  <CardDescription>Deliverables included in this service</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start text-text/80">
                        <span className="mr-2" style={{ color: '#F0F8FF' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="bg-surface border-border">
                <CardHeader>
                  <CardTitle className="text-primary">Timeline</CardTitle>
                  <CardDescription>How long this service takes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-text/80">{service.timeline}</p>
                </CardContent>
              </Card>

              {/* Client Provides */}
              <Card className="bg-surface border-border">
                <CardHeader>
                  <CardTitle className="text-primary">What You Provide</CardTitle>
                  <CardDescription>Information and assets we need from you</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.clientProvides.map((item, idx) => (
                      <li key={idx} className="flex items-start text-text/80">
                        <span className="mr-2" style={{ color: '#F0F8FF' }}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* We Handle */}
              <Card className="bg-surface border-border">
                <CardHeader>
                  <CardTitle className="text-primary">What We Handle</CardTitle>
                  <CardDescription>Everything we take care of for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.weHandle.map((item, idx) => (
                      <li key={idx} className="flex items-start text-text/80">
                        <span className="mr-2" style={{ color: '#F0F8FF' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
