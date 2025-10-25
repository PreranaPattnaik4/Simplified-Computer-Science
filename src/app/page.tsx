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


const whatWeOffer = [
    { icon: <BookOpen />, title: "Blogs", description: "In-depth articles on the latest in tech.", tag: "LATEST" },
    { icon: <GraduationCap />, title: "Courses", description: "Structured learning paths for all levels." },
    { icon: <Code />, title: "Project", description: "Hands-on projects to build your portfolio." },
    { icon: <FileText />, title: "How-To Guides", description: "Step-by-step tutorials for practical skills." },
    { icon: <Briefcase />, title: "Professional Skills", description: "Develop soft skills for your career." },
    { icon: <Wrench />, title: "Tips and Tricks", description: "Quick hacks to boost your productivity.", tag: "NEW" },
    { icon: <Rocket />, title: "Career Roadmaps", description: "Navigate your career path with expert advice." },
    { icon: <HeartHandshake />, title: "Interview Preparation", description: "Ace your tech interviews with our guides." },
    { icon: <Download />, title: "Downloads", description: "Get access to useful resources and tools." },
];

const faqItems = [
    {
        question: "Who Is Simplified Computer Science For?",
        answer: "Simplified Computer Science is designed for learners of all levels, from absolute beginners to experienced professionals looking to upskill. Our content covers a wide range of topics in computer science, AI, and technology, making it accessible and valuable for everyone."
    },
    {
        question: "Does Simplified Computer Science Offer Certificates For Course Completion?",
        answer: "Yes, we offer certificates for most of our courses upon successful completion. These certificates can be a great addition to your professional profile and demonstrate your commitment to learning."
    },
    {
        question: "Can I Add The Courses Completed On Simplified Computer Science To My Resume Or LinkedIn Profile?",
        answer: "Absolutely! We encourage you to showcase your achievements. Adding your completed courses and certificates to your resume and LinkedIn profile can significantly boost your career prospects."
    }
];

const timelineItems = [
    { icon: <Target />, title: "Define Your Career Goal", description: "Identify your interests and strengths to choose a career path in tech, whether it's AI, web development, or data science." },
    { icon: <GraduationCap />, title: "Build Skills with Free Courses", description: "Enroll in our comprehensive free courses to learn foundational and advanced skills at your own pace." },
    { icon: <Code />, title: "Apply Knowledge with Projects", description: "Work on hands-on projects to build a strong portfolio and demonstrate your abilities to potential employers." },
    { icon: <Briefcase />, title: "Gain Real-World Experience", description: "Participate in hackathons and internships to solve real challenges and collaborate with industry professionals." },
    { icon: <Star />, title: "Become an Industry Expert", description: "Continuously learn, contribute to open-source projects, and stay updated with the latest industry trends to establish yourself as a leader in your field." },
];


export default function HomePage() {
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      id: 0,
      title: "CAREER TIPS",
      subtitle: "Roadmaps",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      title: "TRENDING BLOGS",
      subtitle: "Latest Tech News",
      image: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "HACKATHONS",
      subtitle: "Upcoming Events",
      image: "https://images.pexels.com/photos/3520665/pexels-photo-3520665.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "PROJECTS",
      subtitle: "Hands-On Experience",
      image: "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Section 1: Header & Hero Section */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Menu className="h-6 w-6" />
            <span className="font-semibold">MENU</span>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold tracking-wider">SCS</h1>
            <p className="text-xs text-muted-foreground">SIMPLIFIED COMPUTER SCIENCE</p>
          </div>
          <div className="flex items-center gap-4">
            <User className="h-6 w-6" />
            <HelpCircle className="h-6 w-6" />
            <Search className="h-6 w-6" />
          </div>
        </div>
      </header>

      <main>
        {/* Hero Image Accordion */}
        <section className="w-full bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-2 h-64 md:h-80 rounded-lg overflow-hidden">
                {panels.map((panel) => {
                    const isActive = activePanel === panel.id;
                    const baseWidth = 100 / panels.length;
                    const activeWidth = 65;
                    const inactiveWidth = (100 - activeWidth) / (panels.length - 1);
                    const width = isActive ? activeWidth : inactiveWidth;

                    return (
                    <div
                        key={panel.id}
                        className={`relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out rounded-lg flex-1`}
                        style={{
                        flex: `${width} 1 auto`,
                        }}
                        onClick={() => setActivePanel(panel.id)}
                        onMouseEnter={() => setActivePanel(panel.id)}
                    >
                        <img
                        src={panel.image}
                        alt={panel.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
          <h2 className="text-4xl font-bold">Unleash Your Potential in AI, Tech & Innovation!</h2>
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

        {/* Section 2: Empowering Innovation & Key Topics */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">SIMPLIFYING COMPUTER SCIENCE | EMPOWERING INNOVATION: PROJECTS HACKATHONS AND INTERNSHIPS</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="col-span-1 space-y-4">
                    <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Artificial Intelligence Specialists</div>
                    <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Generative AI</div>
                    <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Machine Learning</div>
                    <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Python</div>
                    <div className="bg-black p-6 rounded-lg text-white font-bold text-lg">Data Scientists And Analysts</div>
                </div>
                <div className="col-span-2 rounded-lg border bg-card p-8 text-card-foreground">
                    <h3 className="text-2xl font-bold mb-4">Key Skills</h3>
                    <p className="mb-6 text-muted-foreground">Our curriculum is designed to equip you with the most in-demand skills in the tech industry. From programming fundamentals to advanced AI concepts, you'll gain the expertise needed to excel in your career.</p>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Proficiency in Python, Java, and C++</li>
                        <li>Deep understanding of Machine Learning algorithms</li>
                        <li>Experience with Generative AI models like GPT and DALL-E</li>
                        <li>Data analysis and visualization with Pandas and Matplotlib</li>
                        <li>Cloud computing with AWS, Azure, and Google Cloud</li>
                    </ul>
                    <h3 className="text-2xl font-bold mb-4">Career Outlook</h3>
                    <p className="text-muted-foreground">The demand for skilled tech professionals is at an all-time high. By completing our programs, you'll be prepared for high-paying roles such as:</p>
                    <ol className="list-decimal list-inside space-y-2 mt-4">
                        <li>AI/ML Engineer</li>
                        <li>Data Scientist</li>
                        <li>Full-Stack Developer</li>
                        <li>Cloud Solutions Architect</li>
                    </ol>
                </div>
            </div>
        </section>

        {/* Section 3: Trending Blogs */}
        <TrendingBlogs />
        
        {/* Section 4: Gateway to Mastering CS & AI */}
        <section className="bg-black text-white py-20">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold">Your Free Gateway to Mastering Computer Science and AI!</h2>
                        <p className="mt-4 text-white/70">We provide a comprehensive ecosystem of free resources to help you succeed in the tech industry.</p>
                    </div>
                    <div className="space-y-8">
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <h3 className="font-bold text-lg">Comprehensive Courses</h3>
                            <p className="text-sm text-white/70">From beginner to advanced.</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <h3 className="font-bold text-lg">Earn Self-Achievement Certificates</h3>
                            <p className="text-sm text-white/70">Validate your skills.</p>
                        </div>
                    </div>
                     <div className="space-y-8">
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <h3 className="font-bold text-lg">Expertly Curated Articles</h3>
                            <p className="text-sm text-white/70">Stay updated with the latest trends.</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <h3 className="font-bold text-lg">Master Project & File Management</h3>
                            <p className="text-sm text-white/70">Organize your work like a pro.</p>
                        </div>
                    </div>
                     <div className="space-y-8">
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <h3 className="font-bold text-lg">Interactive Learning Tools</h3>
                            <p className="text-sm text-white/70">Engage with hands-on exercises.</p>
                        </div>
                        <div className="p-4 bg-gray-800 rounded-lg">
                            <h3 className="font-bold text-lg">Career Guidance & Support</h3>
                            <p className="text-sm text-white/70">Navigate your career path.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Section 5: Limitless Learning */}
        <LimitlessLearning />

        {/* Section 6: Industry Solutions */}
        <IndustrySolutions />

        {/* Section 7: Step-by-Step Career Timeline */}
        <section className="container mx-auto max-w-7xl px-4 py-20">
            <h2 className="text-center text-4xl font-bold mb-12">Your Path to Success: Step-by-Step Career Timeline</h2>
            <div className="relative">
                <div className="absolute left-6 w-1 h-full bg-border rounded"></div>
                {timelineItems.map((item, index) => (
                    <div key={index} className="relative pl-20 mb-16">
                         {index === 3 && (
                            <div className="w-full text-left my-8 md:my-16">
                                <h3 className="text-2xl font-bold text-accent">Advancing Your Career: From Gaining Experience to Becoming an Industry Expert</h3>
                            </div>
                        )}
                        <div className="flex items-start gap-4 mb-4">
                             <div className="absolute left-6 top-1 -translate-x-1/2 h-6 w-6 rounded-full bg-accent border-4 border-background"></div>
                            <div className="flex-shrink-0 h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-accent">
                                {React.cloneElement(item.icon, { className: "h-6 w-6" })}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <div className="p-6 rounded-lg border bg-card shadow-md mt-2">
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Section 8: "What We Offer" Grid */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-12 text-center text-4xl font-bold">What We Offer</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                {whatWeOffer.map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center text-center">
                        {item.tag && <span className="absolute top-0 right-0 py-1 px-3 rounded-full bg-pink-500 text-white text-xs font-bold">{item.tag}</span>}
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-accent">
                            {React.cloneElement(item.icon, { className: "h-8 w-8" })}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Section 9: FAQ Section */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <h2 className="text-4xl font-bold">We're Here To All Your Questions</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our platform is designed for learners of all levels, from absolute beginners looking to start their journey in tech, to experienced professionals aiming to upskill. We provide a comprehensive range of resources to support your learning goals.
                    </p>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`}>
                                <AccordionTrigger className="text-lg font-semibold">{item.question}</AccordionTrigger>
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
                <h2 className="text-3xl font-bold">Discover the most trending courses in AI, technology, and more! Join now to access these high-demand courses</h2>
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

      {/* Section 11: Footer */}
      <footer className="bg-black text-white/80">
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">SIMPLIFIEDCOMPUTERSCIENCE</h3>
              <p>Welcome to Simplified Computer Science, your ultimate guide to the world of technology. Our mission is to make computer science accessible and understandable for everyone, from beginners to experts.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent">Home</a></li>
                <li><a href="#" className="hover:text-accent">About</a></li>
                <li><a href="#" className="hover:text-accent">My Profile</a></li>
                <li><a href="#" className="hover:text-accent">Contact</a></li>
                <li><a href="#" className="hover:text-accent">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">EXPLORER</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-accent">Blogs</a></li>
                <li><a href="#" className="hover:text-accent">Courses Live!</a></li>
                <li><a href="#" className="hover:text-accent">Resources</a></li>
                <li><a href="#" className="hover:text-accent">Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold text-white">GET IN TOUCH</h3>
              <p>simplifiedcomputerscie@gmail.com</p>
              <div className="mt-4 flex space-x-4">
                <a href="#"><Instagram className="h-6 w-6 hover:text-accent"/></a>
                <a href="#"><Linkedin className="h-6 w-6 hover:text-accent"/></a>
                <a href="#">{/* Medium Icon */}</a>
                <a href="#"><Youtube className="h-6 w-6 hover:text-accent"/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4">
            <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 text-sm sm:flex-row">
                <p>&copy; {new Date().getFullYear()} Simplified Computer Science. All Rights Reserved.</p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    <a href="#" className="hover:text-accent">Terms and Conditions</a>
                    <a href="#" className="hover:text-accent">Privacy Policy</a>
                    <a href="#" className="hover:text-accent">Disclaimer</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}
