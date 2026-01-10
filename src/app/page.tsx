
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import {
  Menu,
  User,
  Search,
  BookOpen,
  Code,
  GraduationCap,
  Lightbulb,
  Briefcase,
  Wrench,
  Rocket,
  ArrowRight,
  Instagram,
  Linkedin,
  Youtube,
  FileText,
  HeartHandshake,
  Download,
  Target,
  BarChart,
  BrainCircuit,
  PencilRuler,
  Server,
  Star,
  HelpCircle,
  FolderKanban,
  FileBadge,
  ArrowDown,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import IndustrySolutions from '@/components/IndustrySolutions';
import TrendingBlogs from '@/components/TrendingBlogs';
import LimitlessLearning from '@/components/LimitlessLearning';
import CareerTimeline from '@/components/CareerTimeline';
import placeholderImages from '@/app/lib/placeholder-images.json';
import SCSLearningPaths from '@/components/SCSLearningPaths';
import Link from 'next/link';


const whatWeOffer = [
    { icon: <BookOpen />, title: "Blogs", description: "Stay updated with the latest trends in technology, IT, computers, and AI through our insightful blogs. We provide in-depth analysis and opinions on current trends and emerging technologies.", tag: "EXCLUSIVE" },
    { icon: <GraduationCap />, title: "Courses", description: "Comprehensive learning paths designed to take you from beginner to advanced levels in various topics. Our courses include practical exercises and real-world applications.", tag: "EXCLUSIVE"},
    { icon: <Code />, title: "Project", description: "Learn how to effectively manage projects and handle file management with our practical instructions, helping you stay organized and efficient." },
    { icon: <FileText />, title: "How-To Guides", description: "Our how-to guides provide detailed instructions on a variety of tech-related tasks. Whether you're a beginner or an experienced professional, you'll find valuable information to help you achieve your goals." },
    { icon: <Briefcase />, title: "Professional Skills", description: "Our website provides step-by-step instructions on how to cultivate essential abilities, including technical skills, soft skills, language proficiency, and personal attributes, ensuring you have the tools you need to succeed in the modern workplace." },
    { icon: <Wrench />, title: "Tips and Tricks", description: "Discover practical tips and tricks to improve your tech skills and productivity. Our tips are designed to help you navigate the digital world more efficiently."},
    { icon: <Rocket />, title: "Career Roadmaps", description: "At Simplified Computer Science, our roadmaps cover tech and AI career paths, offering: A step-by-step approach to mastering key skills. Clear milestones for tracking progress. Guidance on relevant tools, technologies, and certifications. Clear, structured guides to help you navigate your career path in tech and AI.These roadmaps simplify the learning process, helping users focus on essential knowledge to achieve their goals efficiently." },
    { icon: <HeartHandshake />, title: "Interview Preparation", description: "A collection of technical and non-technical interview questions to help you get ready for job interviews in various roles. These interview questions samples simplify the learning process, helping users focus on essential knowledge to achieve their goals efficiently.", tag: "EXCLUSIVE" },
    { icon: <Download />, title: "Downloads", description: "At Simplified Computer Science, we offer downloadable resources like study guides to support your learning offline. These materials are for personal use only and cannot be redistributed or used commercially without permission. All content is subject to copyright, and proper attribution is required for offline use. While these resources offer flexible learning, please do not use them directly—instead, learn from them and create your own original work.", tag: "EXCLUSIVE"},
];

const faqItems = [
    {
        question: "Who is Simplified Computer Science for?",
        answer: "Our platform is designed for learners of all levels, from beginners to advanced users. Whether you’re a student, a professional, or simply curious about computer science and AI, you’ll find valuable resources here to help you learn and grow. Get Online Certificate Courses SIGN UP TODAY!"
    },
    {
        question: "Who is the founder of Simplified Computer Science?",
        answer: "Simplified Computer Science was founded by Prerana, a passionate tech enthusiast and educator dedicated to making computer science accessible to everyone."
    },
    {
        question: "Does Simplified Computer Science offer certificates for course completion?",
        answer: "Yes, we offer certificates for most of our courses upon successful completion. These certificates can be a great addition to your professional profile and demonstrate your commitment to learning."
    },
    {
        question: "Can I add the courses completed on Simplified Computer Science to my resume or LinkedIn profile?",
        answer: "Absolutely! We encourage you to showcase your achievements. Adding your completed courses and certificates to your resume and LinkedIn profile can significantly boost your career prospects."
    },
    {
      question: "Will completing your courses provide me with any formal recognition or accreditation?",
      answer: "While our certificates are a great way to showcase your skills, they are not formally accredited. However, they are highly valued by employers as evidence of your commitment to continuous learning and professional development."
    },
    {
      question: "What kind of content will I receive in the newsletter?",
      answer: "Our newsletter is packed with valuable content, including our latest articles, tutorials, course announcements, and exclusive tips and tricks to help you stay ahead in the tech world."
    }
];

export default function HomePage() {
  const [activePanel, setActivePanel] = useState(2);

  const panels = [
    {
        id: 0,
        title: "Career Tips and Roadmaps",
        subtitle: "Your career journey starts here",
        image: placeholderImages.homeHero1.src,
    },
    {
        id: 1,
        title: "TRENDING BLOGS",
        subtitle: "Stay updated with the latest trends",
        image: placeholderImages.homeHero2.src,
    },
    {
        id: 2,
        title: "Hackathons and Internships",
        subtitle: "Gain real-world experience",
        image: placeholderImages.homeHero3.src,
    },
    {
        id: 3,
        title: "PROJECTS",
        subtitle: "Build your portfolio",
        image: placeholderImages.homeHero4.src,
    },
     {
        id: 4,
        title: "TOP TRENDING COURSES",
        subtitle: "Master in-demand skills",
        image: placeholderImages.homeHero5.src,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <main>
        {/* New Hero Section */}
        <section className="bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative aspect-square">
                        <Image
                            src={placeholderImages.designCulture.src}
                            alt="Design Culture"
                            fill
                            className="object-cover rounded-lg"
                            data-ai-hint={placeholderImages.designCulture.hint}
                        />
                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 p-1">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="border border-white/20"></div>
                            ))}
                        </div>
                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 p-4">
                            <div className="bg-accent rounded-sm col-start-2 row-start-2"></div>
                            <div className="bg-accent rounded-sm col-start-1 row-start-3 col-span-2"></div>
                            <div className="bg-accent rounded-sm col-start-4 row-start-4"></div>
                        </div>

                        <div className="absolute -bottom-10 -left-10">
                            <div className="relative w-24 h-24">
                                <div className="absolute inset-0 border-2 border-black"></div>
                                <div className="absolute inset-2 bg-accent flex items-center justify-center">
                                    <ArrowDown className="w-8 h-8 text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold font-space-grotesk tracking-tighter leading-none">
                            SIMPLIFIED <br /> COMPUTER SCIENCE
                        </h1>
                        <div className="mt-8 grid md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-2xl font-light leading-tight">
                                    Making Technology Simple, Practical, and Accessible
                                </h2>
                                <Link href="/courses-live">
                                    <button className="mt-6 bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition-colors">
                                        START LEARNING
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <p className="text-muted-foreground">
                                    Learn computer science, artificial intelligence, and modern tech skills through easy-to-follow tutorials, clear roadmaps, and practical guidance for real-world IT learning.
                                </p>
                                <Link href="/courses-live" className="mt-2 inline-block font-semibold underline underline-offset-4">
                                    Explore Tutorials
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Hero Image Accordion */}
        <section className="w-full bg-background py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-2 h-80 md:h-96 rounded-lg overflow-hidden">
                {panels.map((panel) => {
                    const isActive = activePanel === panel.id;
                    const activeWidth = 40; // Decreased width for active panel
                    const inactiveWidth = (100 - activeWidth) / (panels.length - 1);
                    const width = isActive ? activeWidth : inactiveWidth;

                    return (
                    <div
                        key={panel.id}
                        className={`relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out rounded-lg`}
                        style={{
                            width: `${width}%`,
                            flexShrink: 0,
                        }}
                        onClick={() => setActivePanel(panel.id)}
                        onMouseEnter={() => setActivePanel(panel.id)}
                    >
                        <Image
                            src={panel.image}
                            alt={panel.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div
                        className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-opacity duration-500 ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                        >
                        <h3 className="text-white text-lg md:text-2xl font-bold uppercase tracking-wider mb-2">
                            {panel.title}
                        </h3>
                        <p className="text-yellow-400 font-semibold text-sm md:text-base uppercase tracking-widest">
                            {panel.subtitle}
                        </p>
                        </div>
                        {!isActive && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 opacity-75 group-hover:opacity-0 transition-opacity duration-300">
                            <h3 className="text-white text-sm md:text-lg font-bold uppercase tracking-wider truncate">
                            {panel.title}
                            </h3>
                        </div>
                        )}
                    </div>
                    );
                })}
                </div>
                <div className="flex justify-center gap-3 mt-8">
                {panels.map((panel) => (
                    <button
                    key={panel.id}
                    onClick={() => setActivePanel(panel.id)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                        activePanel === panel.id
                        ? "w-8 bg-yellow-400"
                        : "w-3 bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to ${panel.title}`}
                    />
                ))}
                </div>
            </div>
        </section>


        {/* Hero Content */}
        <section className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-4xl font-bold font-space-grotesk">Unleash Your Potential in AI, Tech & Innovation!</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            Gain hands-on experience through exciting hackathons and real-world internships in AI, Machine Learning, and cutting-edge tech. Build your portfolio, collaborate with industry experts, and stand out in your career journey.
          </p>
          <ul className="mt-6 flex justify-center gap-8 text-lg">
            <li className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent" /> Work on real projects</li>
            <li className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent" /> Enhance your problem-solving skills</li>
            <li className="flex items-center gap-2"><Lightbulb className="h-5 w-5 text-accent" /> Earn certificates & grow your network</li>
          </ul>
          <button className="mt-8 rounded-full bg-accent px-12 py-4 text-lg font-bold text-accent-foreground transition-transform hover:scale-105">
            HACKATHONS
          </button>
        </section>
        
        {/* Section 2: Empowering Innovation */}
        <section className="container mx-auto max-w-7xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold font-space-grotesk tracking-[0.2em] text-gray-800 uppercase">
            Simplifying Computer Science | Empowering Innovation: Projects Hackathons and Internships
          </h2>
          <div className="w-24 h-px bg-accent mx-auto mt-4 mb-12"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="col-span-1 space-y-4">
                  <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Artificial Intelligence Specialists</div>
                  <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Generative AI</div>
                  <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Machine Learning</div>
                  <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Python</div>
                  <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Data Scientists And Analysts</div>
              </div>
              <div className="col-span-2 rounded-lg border bg-card p-8 text-card-foreground text-left">
                  <h3 className="text-2xl font-bold mb-4 font-space-grotesk">Python: The Heart of Modern AI and LLM Development</h3>
                  <p className="mb-6 text-muted-foreground">Python is a powerful, easy-to-learn programming language that supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It is widely used for web development, automation, machine learning, data analysis, and artificial intelligence. Python’s extensive standard library and vibrant community contribute to its popularity in various industries.</p>
                  <h4 className="text-xl font-bold mb-2 font-space-grotesk">Key Features of Python Development:</h4>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                      <li>Readability: Python’s simple syntax makes it easy to read and write, reducing the complexity of software development.</li>
                      <li>Extensive Libraries: Python offers a vast collection of libraries and frameworks, such as Django, Flask, NumPy, and pandas, that speed up development.</li>
                      <li>Cross-Platform Compatibility: Python runs on various platforms, including Windows, Linux, and macOS, making it a versatile choice for developers.</li>
                      <li>Automation & Scripting: Python is commonly used for automating tasks, from simple scripts to complex workflows.</li>
                       <li>Data Science & Machine Learning: Python is a go-to language for data analysis, statistical computing, and building machine learning models, with libraries like TensorFlow, scikit-learn, and Keras.</li>
                  </ul>
                   <p className="text-muted-foreground">With Python’s flexibility and powerful features, developers can create anything from web applications to data-driven solutions and AI models, making it an essential tool in modern development.</p>
              </div>
          </div>
        </section>

        
        {/* Section 4: Gateway to Mastering CS & AI */}
        <LimitlessLearning />

        {/* Section 5: Limitless Learning */}
        <section className="bg-black text-white py-20">
            <div className="container mx-auto max-w-7xl px-4 text-center">
                <h2 className="font-space-grotesk text-4xl font-bold leading-tight mb-4">Unlock Your Potential: Learn, Create, and Innovate with Our Comprehensive Courses!</h2>
                <button className="bg-accent text-accent-foreground font-bold py-3 px-8 rounded-full transition-colors">Tranding Courses Live!</button>
            </div>
        </section>

        {/* Section 6: Industry Solutions */}
        <IndustrySolutions />

        {/* Section 7: Step-by-Step Career Timeline */}
        <CareerTimeline />

        {/* Section 8: "What We Offer" Grid */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-12 text-center text-4xl font-bold font-space-grotesk">What We Offer</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {whatWeOffer.map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center p-6 border rounded-lg shadow-sm">
                        {item.tag && <span className="absolute top-2 right-2 py-1 px-3 rounded-full bg-pink-500 text-white text-xs font-bold">{item.tag}</span>}
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-accent">
                            {React.cloneElement(item.icon, { className: "h-8 w-8" })}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold font-space-grotesk">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* New Learning Paths Section */}
        <SCSLearningPaths />

        {/* Section 3: Trending Blogs */}
        <TrendingBlogs />

        {/* Section 9: FAQ Section */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold font-space-grotesk">We're Here To All Your Questions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our platform is designed for learners of all levels, from absolute beginners looking to start their journey in tech, to experienced professionals aiming to upskill. We provide a comprehensive range of resources to support your learning goals.
                    </p>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-lg font-semibold font-space-grotesk">{item.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>

        {/* Section 10: Final Enrollment CTA */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <div className="rounded-lg border-l-8 border-accent bg-card p-8 shadow-lg md:p-12 text-center">
                <h2 className="text-3xl font-bold font-space-grotesk">Discover the most trending courses in AI, technology, and more! Join now to access these high-demand courses</h2>
                <p className="mt-2 text-xl font-semibold text-accent">Earn Free Certificate</p>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
                    Gain full access to our extensive library of free courses and track your progress effortlessly! While our Blogs, Tutorials, and Resources are available without signup, registering allows you to enjoy exclusive content, course certificates, and more. Most of our courses are free—start learning today with no fees, just knowledge!
                </p>
                <button className="mt-8 flex items-center gap-2 mx-auto rounded-full bg-accent px-10 py-4 text-lg font-bold text-accent-foreground transition-transform hover:scale-105">
                    ENROLL NOW! <ArrowRight className="h-5 w-5" />
                </button>
            </div>
        </section>
      </main>
    </div>
  );
}
