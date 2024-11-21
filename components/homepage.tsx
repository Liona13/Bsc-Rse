'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Link from "next/link"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-transparent text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-black/20 backdrop-blur-md border-b border-white/10">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Your Name</span>
          <span className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-lg font-bold shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(168,85,247,0.5)]">
            YN
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#skills">
            Skills
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#experience">
            Experience
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400 transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  Your Name
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Web Developer | UI/UX Designer | Problem Solver
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-none shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(168,85,247,0.5)]">
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button asChild variant="outline" className="bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  <Link href="/resume.pdf">Download Resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(168,85,247,0.5)]">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                About Me
              </h2>
              <p className="max-w-[700px] text-gray-300 md:text-lg">
                I'm a passionate web developer with 5 years of experience in creating responsive and user-friendly websites. I
                specialize in front-end development and have a keen eye for design. My goal is to craft digital experiences that
                are not only visually stunning but also highly functional and accessible.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              Skills
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-black/20 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(168,85,247,0.5)]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-blue-400">Frontend Development</h3>
                  <p className="text-gray-300">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS</p>
                </CardContent>
              </Card>
              <Card className="bg-black/20 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(168,85,247,0.5)]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-blue-400">Backend Development</h3>
                  <p className="text-gray-300">Node.js, Express, MongoDB, PostgreSQL, GraphQL</p>
                </CardContent>
              </Card>
              <Card className="bg-black/20 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(168,85,247,0.5)]">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2 text-blue-400">UI/UX Design</h3>
                  <p className="text-gray-300">Figma, Adobe XD, Sketch, User Research, Prototyping</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(168,85,247,0.5)]">
                <h3 className="text-xl font-semibold text-blue-400">Senior Web Developer</h3>
                <p className="text-gray-300">TechCorp Inc. | 2020 - Present</p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                  <li>Led a team of 5 developers in creating responsive web applications</li>
                  <li>Implemented new frontend architecture, improving load times by 40%</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5),0_0_30px_rgba(168,85,247,0.5)]">
                <h3 className="text-xl font-semibold text-blue-400">Web Developer</h3>
                <p className="text-gray-300">Digital Solutions LLC | 2018 - 2020</p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                  <li>Developed and maintained client websites using HTML, CSS, and JavaScript</li>
                  <li>Collaborated with designers to implement pixel-perfect UIs</li>
                  <li>Optimized websites for maximum speed and scalability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
              Contact Me
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <Button asChild variant="outline" className="bg-black/20 backdrop-blur-md border border-white/10 text-blue-400 hover:bg-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Link href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-black/20 backdrop-blur-md border border-white/10 text-blue-400 hover:bg-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Link href="tel:+1234567890">
                  <Phone className="mr-2 h-4 w-4" />
                  Phone
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-black/20 backdrop-blur-md border border-white/10 text-blue-400 hover:bg-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Link href="https://linkedin.com/in/yourprofile">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-black/20 backdrop-blur-md border border-white/10 text-blue-400 hover:bg-white/10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <Link href="https://github.com/yourusername">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-black/20 backdrop-blur-md border-t border-white/10">
        <div className="container flex flex-col gap-2 sm:flex-row items-center px-4 md:px-6">
          <p className="text-xs text-gray-400">© 2023 Your Name. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-400 hover:text-blue-400" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-400 hover:text-blue-400" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}