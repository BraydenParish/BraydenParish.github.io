[V0_FILE]tsx:file="app/page.tsx"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Cloud, Network, FileText, Laptop, Github, ExternalLink, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  John Doe
                </h1>
                <p className="text-xl text-muted-foreground">
                  IT Professional | Network Engineer | Cloud Enthusiast
                </p>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I'm an IT professional specializing in helpdesk support, network infrastructure, and cloud solutions. 
                I'm passionate about building reliable systems and solving complex technical problems.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button>
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">Contact Me</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-background bg-muted">
                <Image 
                  src="/placeholder.svg?height=300&width=300" 
                  alt="Profile" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                My expertise spans across various IT domains, from helpdesk support to advanced network and cloud engineering.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Laptop className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>IT Support</CardTitle>
                <CardDescription>
                  Helpdesk and technical support expertise
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Windows/Mac OS</span>
                    <span className="text-sm text-muted-foreground">Advanced</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[90%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Troubleshooting</span>
                    <span className="text-sm text-muted-foreground">Advanced</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[95%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">User Training</span>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[75%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Network className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Network Engineering</CardTitle>
                <CardDescription>
                  Network design and implementation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">TCP/IP</span>
                    <span className="text-sm text-muted-foreground">Advanced</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[85%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Routing & Switching</span>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[70%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Network Security</span>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[65%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Cloud className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Cloud Engineering</CardTitle>
                <CardDescription>
                  Cloud infrastructure and services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">AWS</span>
                    <span className="text-sm text-muted-foreground">Intermediate</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[60%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Azure</span>
                    <span className="text-sm text-muted-foreground">Beginner</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[40%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Infrastructure as Code</span>
                    <span className="text-sm text-muted-foreground">Beginner</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[30%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A selection of my technical projects showcasing my skills and experience.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Home Network Setup & Documentation</CardTitle>
                <CardDescription>
                  Designed and implemented a secure home network with VLANs and comprehensive documentation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="/placeholder.svg?height=200&width=400" 
                  alt="Network Diagram" 
                  width={400} 
                  height={200} 
                  className="rounded-lg object-cover w-full"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>Networking</Badge>
                  <Badge>Security</Badge>
                  <Badge>Documentation</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/projects/home-network">
                  <Button variant="outline" className="w-full">View Project</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AWS Cloud Migration Case Study</CardTitle>
                <CardDescription>
                  Documented the process of migrating an on-premise application to AWS cloud infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image 
                  src="/placeholder.svg?height=200&width=400" 
                  alt="AWS Architecture" 
                  width={400} 
                  height={200} 
                  className="rounded-lg object-cover w-full"
                />
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge>AWS</Badge>
                  <Badge>Cloud</Badge>
                  <Badge>Migration</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/projects/aws-migration">
                  <Button variant="outline" className="w-full">View Project</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Blog Posts</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Technical articles and tutorials on IT, networking, and cloud technologies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started with Network Troubleshooting</CardTitle>
                <CardDescription>
                  A beginner's guide to diagnosing common network issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn the essential tools and methodologies for identifying and resolving network connectivity problems...
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/network-troubleshooting">
                  <Button variant="ghost" className="w-full">Read Article</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cloud Cost Optimization Strategies</CardTitle>
                <CardDescription>
                  How to reduce your AWS bill without sacrificing performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Practical tips for identifying cost-saving opportunities in your cloud infrastructure while maintaining reliability...
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/cloud-cost-optimization">
                  <Button variant="ghost" className="w-full">Read Article</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>IT Documentation Best Practices</CardTitle>
                <CardDescription>
                  Creating effective technical documentation for IT systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A comprehensive guide to documenting your IT infrastructure, procedures, and troubleshooting steps...
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/blog/it-documentation">
                  <Button variant="ghost" className="w-full">Read Article</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/blog">
              <Button variant="outline">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Connect</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm currently open to new opportunities in IT support, network engineering, and cloud infrastructure roles.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Contact Me
                </Button>
              </Link>
              <Link href="/resume">
                <Button variant="outline" size="lg">
                  View Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
[V0_FILE]tsx:file="app/layout.tsx"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "John Doe - IT Professional Portfolio",
  description: "IT Professional specializing in helpdesk support, network engineering, and cloud solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
[V0_FILE]tsx:file="components/main-nav.tsx"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Server } from 'lucide-react'

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Server className="h-6 w-6" />
          <span className="font-bold">John Doe</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
            Home
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4">
            Blog
          </Link>
          <Link href="/documentation" className="text-sm font-medium hover:underline underline-offset-4">
            Documentation
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
[V0_FILE]tsx:file="components/mode-toggle.tsx"
"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
[V0_FILE]tsx:file="components/footer.tsx"
import Link from "next/link"
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:contact@example.com">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
[V0_FILE]tsx:file="app/projects/page.tsx"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, ExternalLink } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A collection of my technical projects, showcasing my skills in IT support, networking, and cloud engineering.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="mt-12">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="networking">Networking</TabsTrigger>
          <TabsTrigger value="cloud">Cloud</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard 
              title="Home Network Setup & Documentation"
              description="Designed and implemented a secure home network with VLANs and comprehensive documentation."
              image="/placeholder.svg?height=200&width=400"
              tags={["Networking", "Security", "Documentation"]}
              link="/projects/home-network"
            />
            <ProjectCard 
              title="AWS Cloud Migration Case Study"
              description="Documented the process of migrating an on-premise application to AWS cloud infrastructure."
              image="/placeholder.svg?height=200&width=400"
              tags={["AWS", "Cloud", "Migration"]}
              link="/projects/aws-migration"
            />
            <ProjectCard 
              title="IT Support Knowledge Base"
              description="Created a comprehensive knowledge base for common IT support issues and their resolutions."
              image="/placeholder.svg?height=200&width=400"
              tags={["IT Support", "Documentation", "Knowledge Management"]}
              link="/projects/knowledge-base"
            />
            <ProjectCard 
              title="Network Monitoring Dashboard"
              description="Implemented a network monitoring solution with custom dashboards for real-time visibility."
              image="/placeholder.svg?height=200&width=400"
              tags={["Networking", "Monitoring", "Dashboard"]}
              link="/projects/network-monitoring"
            />
            <ProjectCard 
              title="Azure Virtual Desktop Deployment"
              description="Deployed and configured Azure Virtual Desktop for a small business with detailed documentation."
              image="/placeholder.svg?height=200&width=400"
              tags={["Azure", "Cloud", "VDI"]}
              link="/projects/azure-vdi"
            />
            <ProjectCard 
              title="Disaster Recovery Plan"
              description="Developed a comprehensive disaster recovery plan for a small business IT infrastructure."
              image="/placeholder.svg?height=200&width=400"
              tags={["Disaster Recovery", "Documentation", "Planning"]}
              link="/projects/disaster-recovery"
            />
          </div>
        </TabsContent>
        <TabsContent value="networking" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard 
              title="Home Network Setup & Documentation"
              description="Designed and implemented a secure home network with VLANs and comprehensive documentation."
              image="/placeholder.svg?height=200&width=400"
              tags={["Networking", "Security", "Documentation"]}
              link="/projects/home-network"
            />
            <ProjectCard 
              title="Network Monitoring Dashboard"
              description="Implemented a network monitoring solution with custom dashboards for real-time visibility."
              image="/placeholder.svg?height=200&width=400"
              tags={["Networking", "Monitoring", "Dashboard"]}
              link="/projects/network-monitoring"
            />
          </div>
        </TabsContent>
        <TabsContent value="cloud" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard 
              title="AWS Cloud Migration Case Study"
              description="Documented the process of migrating an on-premise application to AWS cloud infrastructure."
              image="/placeholder.svg?height=200&width=400"
              tags={["AWS", "Cloud", "Migration"]}
              link="/projects/aws-migration"
            />
            <ProjectCard 
              title="Azure Virtual Desktop Deployment"
              description="Deployed and configured Azure Virtual Desktop for a small business with detailed documentation."
              image="/placeholder.svg?height=200&width=400"
              tags={["Azure", "Cloud", "VDI"]}
              link="/projects/azure-vdi"
            />
          </div>
        </TabsContent>
        <TabsContent value="documentation" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard 
              title="IT Support Knowledge Base"
              description="Created a comprehensive knowledge base for common IT support issues and their resolutions."
              image="/placeholder.svg?height=200&width=400"
              tags={["IT Support", "Documentation", "Knowledge Management"]}
              link="/projects/knowledge-base"
            />
            <ProjectCard 
              title="Disaster Recovery Plan"
              description="Developed a comprehensive disaster recovery plan for a small business IT infrastructure."
              image="/placeholder.svg?height=200&width=400"
              tags={["Disaster Recovery", "Documentation", "Planning"]}
              link="/projects/disaster-recovery"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github?: string
}

function ProjectCard({ title, description, image, tags, link, github }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image 
          src={image || "/placeholder.svg"} 
          alt={title} 
          width={400} 
          height={200} 
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={link}>
          <Button variant="default">
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        {github && (
          <Link href={github}>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
[V0_FILE]tsx:file="app/blog/page.tsx"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock } from 'lucide-react'

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Blog</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Articles, tutorials, and insights on IT support, networking, and cloud technologies.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="mt-12">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Posts</TabsTrigger>
          <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
          <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogPostCard 
              title="Getting Started with Network Troubleshooting"
              description="A beginner's guide to diagnosing common network issues"
              date="May 15, 2023"
              readTime="8 min read"
              tags={["Networking", "Troubleshooting", "Beginner"]}
              link="/blog/network-troubleshooting"
            />
            <BlogPostCard 
              title="Cloud Cost Optimization Strategies"
              description="How to reduce your AWS bill without sacrificing performance"
              date="April 22, 2023"
              readTime="12 min read"
              tags={["Cloud", "AWS", "Cost Optimization"]}
              link="/blog/cloud-cost-optimization"
            />
            <BlogPostCard 
              title="IT Documentation Best Practices"
              description="Creating effective technical documentation for IT systems"
              date="March 10, 2023"
              readTime="10 min read"
              tags={["Documentation", "Best Practices", "IT Management"]}
              link="/blog/it-documentation"
            />
            <BlogPostCard 
              title="Setting Up a Home Lab for IT Learning"
              description="How to build an affordable home lab for practicing IT skills"
              date="February 28, 2023"
              readTime="15 min read"
              tags={["Home Lab", "Learning", "Hardware"]}
              link="/blog/home-lab-setup"
            />
            <BlogPostCard 
              title="Introduction to Network Segmentation"
              description="Understanding VLANs and network security through segmentation"
              date="January 15, 2023"
              readTime="11 min read"
              tags={["Networking", "Security", "VLANs"]}
              link="/blog/network-segmentation"
            />
            <BlogPostCard 
              title="Automating Windows Updates with PowerShell"
              description="Scripts and techniques for managing Windows updates at scale"
              date="December 5, 2022"
              readTime="9 min read"
              tags={["Windows", "PowerShell", "Automation"]}
              link="/blog/windows-update-automation"
            />
          </div>
        </TabsContent>
        <TabsContent value="tutorials" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogPostCard 
              title="Getting Started with Network Troubleshooting"
              description="A beginner's guide to diagnosing common network issues"
              date="May 15, 2023"
              readTime="8 min read"
              tags={["Networking", "Troubleshooting", "Beginner"]}
              link="/blog/network-troubleshooting"
            />
            <BlogPostCard 
              title="Setting Up a Home Lab for IT Learning"
              description="How to build an affordable home lab for practicing IT skills"
              date="February 28, 2023"
              readTime="15 min read"
              tags={["Home Lab", "Learning", "Hardware"]}
              link="/blog/home-lab-setup"
            />
            <BlogPostCard 
              title="Automating Windows Updates with PowerShell"
              description="Scripts and techniques for managing Windows updates at scale"
              date="December 5, 2022"
              readTime="9 min read"
              tags={["Windows", "PowerShell", "Automation"]}
              link="/blog/windows-update-automation"
            />
          </div>
        </TabsContent>
        <TabsContent value="case-studies" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogPostCard 
              title="Cloud Cost Optimization Strategies"
              description="How to reduce your AWS bill without sacrificing performance"
              date="April 22, 2023"
              readTime="12 min read"
              tags={["Cloud", "AWS", "Cost Optimization"]}
              link="/blog/cloud-cost-optimization"
            />
          </div>
        </TabsContent>
        <TabsContent value="guides" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <BlogPostCard 
              title="IT Documentation Best Practices"
              description="Creating effective technical documentation for IT systems"
              date="March 10, 2023"
              readTime="10 min read"
              tags={["Documentation", "Best Practices", "IT Management"]}
              link="/blog/it-documentation"
            />
            <BlogPostCard 
              title="Introduction to Network Segmentation"
              description="Understanding VLANs and network security through segmentation"
              date="January 15, 2023"
              readTime="11 min read"
              tags={["Networking", "Security", "VLANs"]}
              link="/blog/network-segmentation"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface BlogPostCardProps {
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  link: string
}

function BlogPostCard({ title, description, date, readTime, tags, link }: BlogPostCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="default" className="w-full">Read Article</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
[V0_FILE]tsx:file="app/documentation/page.tsx"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, CalendarDays, Clock } from 'lucide-react'

export default function DocumentationPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Documentation</h1>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comprehensive documentation showcasing my technical writing skills and attention to detail.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="mt-12">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="all">All Docs</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
          <TabsTrigger value="cloud">Cloud</TabsTrigger>
          <TabsTrigger value="procedures">Procedures</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DocumentCard 
              title="Network Infrastructure Documentation"
              description="Comprehensive documentation of a small business network infrastructure"
              date="June 10, 2023"
              pages="24 pages"
              tags={["Network", "Infrastructure", "Diagrams"]}
              link="/documentation/network-infrastructure"
            />
            <DocumentCard 
              title="AWS S3 Backup Solution"
              description="Technical documentation for an AWS S3-based backup solution"
              date="May 5, 2023"
              pages="18 pages"
              tags={["AWS", "S3", "Backup"]}
              link="/documentation/aws-s3-backup"
            />
            <DocumentCard 
              title="IT Onboarding Procedures"
              description="Step-by-step procedures for onboarding new employees to IT systems"
              date="April 12, 2023"
              pages="15 pages"
              tags={["Procedures", "Onboarding", "IT Support"]}
              link="/documentation/it-onboarding"
            />
            <DocumentCard 
              title="Disaster Recovery Plan"
              description="Detailed disaster recovery plan for a small business IT infrastructure"
              date="March 20, 2023"
              pages="32 pages"
              tags={["Disaster Recovery", "Planning", "Business Continuity"]}
              link="/documentation/disaster-recovery"
            />
            <DocumentCard 
              title="VPN Setup Guide"
              description="Technical guide for setting up and configuring a site-to-site VPN"
              date="February 8, 2023"
              pages="12 pages"
              tags={["VPN", "Network", "Security"]}
              link="/documentation/vpn-setup"
            />
            <DocumentCard 
              title="Azure Virtual Desktop Deployment"
              description="Documentation for Azure Virtual Desktop deployment and configuration"
              date="January 15, 2023"
              pages="28 pages"
              tags={["Azure", "VDI", "Cloud"]}
              link="/documentation/azure-vdi"
            />
          </div>
        </TabsContent>
        <TabsContent value="network" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DocumentCard 
              title="Network Infrastructure Documentation"
              description="Comprehensive documentation of a small business network infrastructure"
              date="June 10, 2023"
              pages="24 pages"
              tags={["Network", "Infrastructure", "Diagrams"]}
              link="/documentation/network-infrastructure"
            />
            <DocumentCard 
              title="VPN Setup Guide"
              description="Technical guide for setting up and configuring a site-to-site VPN"
              date="February 8, 2023"
              pages="12 pages"
              tags={["VPN", "Network", "Security"]}
              link="/documentation/vpn-setup"
            />
          </div>
        </TabsContent>
        <TabsContent value="cloud" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DocumentCard 
              title="AWS S3 Backup Solution"
              description="Technical documentation for an AWS S3-based backup solution"
              date="May 5, 2023"
              pages="18 pages"
              tags={["AWS", "S3", "Backup"]}
              link="/documentation/aws-s3-backup"
            />
            <DocumentCard 
              title="Azure Virtual Desktop Deployment"
              description="Documentation for Azure Virtual Desktop deployment and configuration"
              date="January 15, 2023"
              pages="28 pages"
              tags={["Azure", "VDI", "Cloud"]}
              link="/documentation/azure-vdi"
            />
          </div>
        </TabsContent>
        <TabsContent value="procedures" className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <DocumentCard 
              title="IT Onboarding Procedures"
              description="Step-by-step procedures for onboarding new employees to IT systems"
              date="April 12, 2023"
              pages="15 pages"
              tags={["Procedures", "Onboarding", "IT Support"]}
              link="/documentation/it-onboarding"
            />
            <DocumentCard 
              title="Disaster Recovery Plan"
              description="Detailed disaster recovery plan for a small business IT infrastructure"
              date="March 20, 2023"
              pages="32 pages"
              tags={["Disaster Recovery", "Planning", "Business Continuity"]}
              link="/documentation/disaster-recovery"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface DocumentCardProps {
  title: string
  description: string
  date: string
  pages: string
  tags: string[]
  link: string
}

function DocumentCard({ title, description, date, pages, tags, link }: DocumentCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <FileText className="h-5 w-5 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{pages}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={link} className="w-full">
          <Button variant="default" className="w-full">View Documentation</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
[V0_FILE]tsx:file="app/contact/page.tsx"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I'm currently open to new opportunities in IT support, network engineering, and cloud infrastructure roles.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <div className="flex gap-4">
                <Link href="https://github.com" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:john.doe@example.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Resume</CardTitle>
              <CardDescription>Download my resume or view it online.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                My resume includes detailed information about my work experience, education, certifications, and technical skills.
              </p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Link href="/resume">
                <Button variant="default">View Resume</Button>
              </Link>
              <Link href="/resume.pdf">
                <Button variant="outline">Download PDF</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Smith" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="john.smith@example.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Job opportunity" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="I'd like to discuss a potential opportunity..."
                className="min-h-[150px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
[V0_FILE]tsx:file="app/about/page.tsx"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GraduationCap, Briefcase, Award, FileText } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Learn more about my background, experience, and journey in IT.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 py-12 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-6">
          <div className="relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-xl border-4 border-background bg-muted">
            <Image 
              src="/placeholder.svg?height=300&width=300" 
              alt="Profile" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">John Doe</h2>
            <p className="text-muted-foreground">IT Professional specializing in helpdesk support, network engineering, and cloud solutions.</p>
            <div className="flex flex-wrap gap-2">
              <Badge>IT Support</Badge>
              <Badge>Network Engineering</Badge>
              <Badge>Cloud Computing</Badge>
              <Badge>Technical Documentation</Badge>
            </div>
          </div>
          <div className="space-y-2">
            <Link href="/contact">
              <Button className="w-full">Contact Me</Button>
            </Link>
            <Link href="/resume">
              <Button variant="outline" className="w-full">View Resume</Button>
            </Link>
          </div>
        </div>
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>My Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                I'm an IT professional with a passion for technology and problem-solving. My journey in the tech world began with a curiosity about how computers work and has evolved into a career focused on building and maintaining reliable IT systems.
              </p>
              <p>
                Starting in IT support, I developed strong troubleshooting skills and a customer-focused approach to technology. This foundation has been invaluable as I've expanded my expertise into networking and cloud technologies.
              </p>
              <p>
                I believe in continuous learning and staying current with emerging technologies. My goal is to build a career in network and cloud engineering, creating robust infrastructure solutions that help businesses succeed.
              </p>
              <p>
                When I'm not working with technology, I enjoy hiking, photography, and building custom PCs. These hobbies help me maintain a balanced perspective and often inspire creative solutions to technical challenges.
              </p>
            </CardContent>
          </Card>

          <Tabs defaultValue="experience">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="space-y-4 mt-6">
              <TimelineItem 
                icon={<Briefcase className="h-5 w-5" />}
                title="IT Support Specialist"
                organization="TechSolutions Inc."
                period="2022 - Present"
                description="Providing technical support for 200+ employees, managing network infrastructure, and documenting IT processes."
              />
              <TimelineItem 
                icon={<Briefcase className="h-5 w-5" />}
                title="Help Desk Technician"
                organization="Global Systems LLC"
                period="2020 - 2022"
                description="Resolved user issues, maintained hardware and software, and assisted with network troubleshooting."
              />
              <TimelineItem 
                icon={<Briefcase className="h-5 w-5" />}
                title="IT Intern"
                organization="InnoTech Solutions"
                period="2019 - 2020"
                description="Assisted with desktop support, basic network configuration, and hardware inventory management."
              />
            </TabsContent>
            <TabsContent value="education" className="space-y-4 mt-6">
              <TimelineItem 
                icon={<GraduationCap className="h-5 w-5" />}
                title="Bachelor of Science in Information Technology"
                organization="State University"
                period="2016 - 2020"
                description="Focused on network administration, systems analysis, and IT security fundamentals."
              />
              <TimelineItem 
                icon={<GraduationCap className="h-5 w-5" />}
                title="Associate Degree in Computer Science"
                organization="Community College"
                period="2014 - 2016"
                description="Core coursework in programming, database management, and computer architecture."
              />
            </TabsContent>
            <TabsContent value="certifications" className="space-y-4 mt-6">
              <TimelineItem 
                icon={<Award className="h-5 w-5" />}
                title="CompTIA Network+"
                organization="CompTIA"
                period="2021"
                description="Certification demonstrating proficiency in networking concepts, infrastructure, and troubleshooting."
              />
              <TimelineItem 
                icon={<Award className="h-5 w-5" />}
                title="CompTIA A+"
                organization="CompTIA"
                period="2020"
                description="Certification covering hardware, software troubleshooting, networking, and security fundamentals."
              />
              <TimelineItem 
                icon={<Award className="h-5 w-5" />}
                title="Microsoft Certified: Azure Fundamentals"
                organization="Microsoft"
                period="2022"
                description="Certification validating foundational knowledge of cloud services and Azure implementation."
              />
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-medium">Technical Support</h3>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Windows/Mac OS Support</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[90%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Hardware Troubleshooting</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[85%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Software Deployment</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[70%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Networking</h3>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">TCP/IP</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[85%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Routing & Switching</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[70%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Network Security</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[65%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Cloud Computing</h3>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">AWS</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[60%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Azure</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[40%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Infrastructure as Code</span>
                      <span className="text-sm text-muted-foreground">Beginner</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[30%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium">Documentation</h3>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Technical Writing</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[80%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Process Documentation</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[85%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Knowledge Base Management</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-full w-[75%] rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

interface TimelineItemProps {
  icon: React.ReactNode
  title: string
  organization: string
  period: string
  description: string
}

function TimelineItem({ icon, title, organization, period, description }: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-background">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <div className="grid gap-1">
          <h3 className="font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <span className="font-medium">{organization}</span>
            <span className="text-sm text-muted-foreground">• {period}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}