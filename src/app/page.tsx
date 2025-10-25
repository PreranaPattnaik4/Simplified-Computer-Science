import Image from 'next/image';
import React from 'react';
import {
  Menu,
  User,
  HelpCircle,
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
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const featuredArticles = [
  {
    author: 'Admin',
    tags: 'Artificial Intelligence | Futures Tech',
    title: "Understanding Artificial Intelligence: A Beginner's Guide to AI",
    preview:
      'Artificial Intelligence (AI) is a branch of computer science that aims to create intelligent machines that can perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making.',
  },
  {
    author: 'Admin',
    tags: 'Machine Learning | Data Science',
    title: 'The Role of Machine Learning in Modern Technology and Business',
    preview:
      'Machine Learning (ML) has become an integral part of modern technology, driving innovation and transforming industries. From personalized recommendations on streaming services to fraud detection in financial transactions, ML algorithms are at the heart of many intelligent systems.',
  },
  {
    author: 'Admin',
    tags: 'Web Development | Tech Careers',
    title: 'Navigating the World of Web Development: A Roadmap for Aspiring Developers',
    preview:
      "Web development is a dynamic and ever-evolving field that offers a wide range of career opportunities. Whether you're a creative individual with a passion for design or a logical thinker who enjoys problem-solving, there's a place for you in the world of web development.",
  },
];

const whatWeOffer = [
    { icon: <BookOpen />, title: "Blogs", description: "In-depth articles on the latest in tech." },
    { icon: <GraduationCap />, title: "Courses", description: "Structured learning paths for all levels." },
    { icon: <Code />, title: "Project", description: "Hands-on projects to build your portfolio." },
    { icon: <FileText />, title: "How-To Guides", description: "Step-by-step tutorials for practical skills." },
    { icon: <Briefcase />, title: "Professional Skills", description: "Develop soft skills for your career." },
    { icon: <Wrench />, title: "Tips and Tricks", description: "Quick hacks to boost your productivity." },
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

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Header */}
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
        {/* Hero Section */}
        <section className="relative h-[500px] w-full">
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
            <Image src="https://picsum.photos/seed/vr-person-2/800/600" alt="VR headset" width={800} height={600} className="h-full w-full object-cover" data-ai-hint="person VR"/>
            <Image src="https://picsum.photos/seed/typing-hands/800/600" alt="Typing on laptop" width={800} height={600} className="h-full w-full object-cover" data-ai-hint="typing hands"/>
            <Image src="https://picsum.photos/seed/robot-hand-2/800/600" alt="Robotic hand" width={800} height={600} className="h-full w-full object-cover" data-ai-hint="robot hand"/>
            <Image src="https://picsum.photos/seed/nervous-system/800/600" alt="Digital nervous system" width={800} height={600} className="h-full w-full object-cover" data-ai-hint="digital nervous system"/>
          </div>
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h2 className="text-5xl font-extrabold text-white">Hackathons and Internships</h2>
          </div>
        </section>

        {/* Main Content Below Images */}
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

        {/* Trending Blogs Section */}
        <section className="bg-black py-16 text-white">
          <div className="container mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-bold">Discover the most trending courses in AI, technology, and more! Join now to access these high-demand courses</h2>
            <p className="mx-auto mt-4 max-w-4xl text-white/80">
              Gain full access to our extensive library of free courses and track your progress effortlessly! While our Blogs, Tutorials, and Resources are available without signup, registering allows you to enjoy exclusive content, course certificates, and more. Most of our courses are free—start learning today with no fees, just knowledge!
            </p>
            <button className="mt-8 rounded-full bg-accent px-10 py-3 font-bold text-accent-foreground transition-transform hover:scale-105">
              TRENDING BLOGS
            </button>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredArticles.map((article, index) => (
              <div key={index} className="flex flex-col rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 text-sm text-muted-foreground">
                  <span>{article.author}</span>
                  <span className="mx-2">|</span>
                  <span>{article.tags}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-card-foreground">{article.title}</h3>
                <p className="text-muted-foreground">{article.preview}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* What We Offer Section */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-12 text-center text-4xl font-bold">What We Offer</h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                {whatWeOffer.map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-accent">
                            {React.cloneElement(item.icon, { className: "h-8 w-8" })}
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* FAQ Section */}
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

        {/* Final CTA / Enrollment Block */}
        <section className="container mx-auto max-w-7xl px-4 py-16">
            <div className="rounded-lg border-2 border-accent bg-card p-8 text-center shadow-lg md:p-12">
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

      {/* Footer */}
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
