import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, ListTodo, Clock, Users, BarChart3, Calendar, Zap } from "lucide-react";

export default function TasksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="relative items-center justify-center flex-col mx-auto px-6 py-24 text-center">
          {/* Small label above headline */}
          <p className="text-sm text-muted-foreground mb-8 font-medium tracking-wide">
            Task management
          </p>
          
          {/* Main headline */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-start text-6xl md:text-6xl font-bold text-foreground leading-[1.1] mb-8 tracking-tight">
              Manage tasks and projects
              <br />
              <span className="relative">
                with ease.
                <div className="absolute bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full"></div>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Keep your team organized and your clients informed with powerful task management. 
            <span className="font-semibold text-foreground"> Track progress, set deadlines, and collaborate seamlessly.</span>
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              Try task management
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-3 text-base font-semibold group">
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Powerful task management features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to keep your projects on track and your team productive.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <ListTodo className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Task Creation & Assignment</h3>
                <p className="text-sm text-muted-foreground">
                  Create tasks, assign them to team members, and set priorities with ease.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Clock className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Deadline Management</h3>
                <p className="text-sm text-muted-foreground">
                  Set deadlines, track time, and get notifications when tasks are due.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Users className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Team Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  Work together with comments, file sharing, and real-time updates.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <BarChart3 className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor project progress with visual dashboards and analytics.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Project Templates</h3>
                <p className="text-sm text-muted-foreground">
                  Save time with reusable project templates and workflows.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-2xl mb-4">
                  <Zap className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Automation</h3>
                <p className="text-sm text-muted-foreground">
                  Automate repetitive tasks and streamline your workflow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Why teams love our task management?
            </h2>
            <p className="text-lg text-muted-foreground">
              Built for modern teams who need flexibility and power.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Client Visibility</h3>
                <p className="text-muted-foreground">Clients can see project progress without overwhelming them with details.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Flexible Workflows</h3>
                <p className="text-muted-foreground">Adapt to your team's unique processes and preferences.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Real-time Updates</h3>
                <p className="text-muted-foreground">Stay in sync with instant notifications and live updates.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Mobile Friendly</h3>
                <p className="text-muted-foreground">Manage tasks on the go with our responsive mobile interface.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to organize your workflow?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start managing tasks more effectively today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-3 text-base font-semibold">
              Get started now
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-3 text-base font-semibold group">
              Book a demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 