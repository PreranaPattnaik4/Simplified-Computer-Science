import React from 'react';
import { BookOpen, Code, GraduationCap, Lightbulb, Briefcase, Wrench, Rocket, HeartHandshake, Download } from 'lucide-react';

const services = [
    { icon: <BookOpen />, title: "Blogs", description: "Stay updated with the latest trends in technology, IT, computers, and AI through our insightful blogs. We provide in-depth analysis and opinions on current trends and emerging technologies." },
    { icon: <GraduationCap />, title: "Courses", description: "Comprehensive learning paths designed to take you from beginner to advanced levels in various topics. Our courses include practical exercises and real-world applications." },
    { icon: <Code />, title: "Project Guidance", description: "Learn how to effectively manage projects and handle file management with our practical instructions, helping you stay organized and efficient." },
    { icon: <Briefcase />, title: "Professional Skills", description: "Our website provides step-by-step instructions on how to cultivate essential abilities, including technical skills, soft skills, language proficiency, and personal attributes, ensuring you have the tools you need to succeed in the modern workplace." },
    { icon: <Wrench />, title: "Tips and Tricks", description: "Discover practical tips and tricks to improve your tech skills and productivity. Our tips are designed to help you navigate the digital world more efficiently." },
    { icon: <Rocket />, title: "Career Roadmaps", description: "Our roadmaps cover tech and AI career paths, offering a step-by-step approach to mastering key skills with clear milestones and guidance on relevant tools, technologies, and certifications." },
    { icon: <HeartHandshake />, title: "Interview Preparation", description: "A collection of technical and non-technical interview questions to help you get ready for job interviews in various roles." },
    { icon: <Download />, title: "Downloads", description: "Access downloadable resources like study guides to support your learning offline. These materials are for personal use only." },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900">
              Our Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of services to help you excel in your tech career. Explore our offerings and find what's right for you.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-center text-center p-8 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-accent">
                    {React.cloneElement(service.icon, { className: "h-8 w-8" })}
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold font-space-grotesk">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
