import React from 'react';
import { BookOpen, Code, GraduationCap, Lightbulb, Briefcase, Wrench, Rocket, HeartHandshake, Download } from 'lucide-react';

const services = [
    { icon: <BookOpen />, title: "Blogs", description: "Stay updated with the latest trends in technology, IT, computers, and AI through our insightful blogs. We provide in-depth analysis and opinions on current trends and emerging technologies." },
    { icon: <GraduationCap />, title: "Courses", description: "Comprehensive learning paths designed to take you from beginner to advanced levels in various topics. Our courses include practical exercises and real-world applications." },
    { icon: <Code />, title: "Project", description: "Learn how to effectively manage projects and handle file management with our practical instructions, helping you stay organized and efficient." },
    { icon: <Lightbulb />, title: "How-To Guides", description: "Our how-to guides provide detailed instructions on a variety of tech-related tasks. Whether you're a beginner or an experienced professional, you'll find valuable information to help you achieve your goals." },
    { icon: <Briefcase />, title: "Professional Skills", description: "Our website provides step-by-step instructions on how to cultivate essential abilities, including technical skills, soft skills, language proficiency, and personal attributes, ensuring you have the tools you need to succeed in the modern workplace." },
    { icon: <Wrench />, title: "Tips and Tricks", description: "Discover practical tips and tricks to improve your tech skills and productivity. Our tips are designed to help you navigate the digital world more efficiently." },
    { icon: <Rocket />, title: "Career Roadmaps", description: "At Simplified Computer Science, our roadmaps cover tech and AI career paths, offering: A step-by-step approach to mastering key skills. Clear milestones for tracking progress. Guidance on relevant tools, technologies, and certifications. Clear, structured guides to help you navigate your career path in tech and AI.These roadmaps simplify the learning process, helping users focus on essential knowledge to achieve their goals efficiently." },
    { icon: <HeartHandshake />, title: "Interview Preparation", description: "A collection of technical and non-technical interview questions to help you get ready for job interviews in various roles. These interview questions samples simplify the learning process, helping users focus on essential knowledge to achieve their goals efficiently." },
    { icon: <Download />, title: "Downloads", description: "At Simplified Computer Science, we offer downloadable resources like study guides to support your learning offline. These materials are for personal use only and cannot be redistributed or used commercially without permission. All content is subject to copyright, and proper attribution is required for offline use. While these resources offer flexible learning, please do not use them directly—instead, learn from them and create your own original work." },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900">
              What We Offer
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
             At Simplified Computer Science, we take your privacy seriously and ensure that personal information is handled securely. Our content is for educational purposes only, and while we strive for accuracy, we disclaim any liability for errors or omissions. All materials, including articles, tutorials, and images, are protected by copyright. Users are encouraged to use our content for personal learning but are prohibited from reproducing, redistributing, or using it for commercial purposes without permission. For images, users should not download them directly from our site; instead, visit Freepik for sourcing, and use Canva for any necessary edits.
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
