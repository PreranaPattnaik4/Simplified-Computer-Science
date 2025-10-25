import { Target, BookOpen, Award, Briefcase, Code, Linkedin, FileText, Lightbulb, Rocket } from "lucide-react";

export default function CareerTimeline() {
  const steps = [
    {
      title: "Define Your Career Goal",
      subtitle: "Define your aspirations.",
      fullTitle: "Define Your Career Goal and Plan Your Journey",
      description: "Start by clearly defining your career goals. Whether you want to become a Software Developer, Programmer, Graphic Designer, AI Specialist, Web Developer, or Data Scientist, setting specific goals will help you stay motivated and focused. Once you have your goal, break it down into smaller milestones like learning key skills, completing projects, and earning certifications. Create a study plan that fits your schedule and stick to it.",
      icon: Target,
      side: "left",
    },
    {
      title: "Skill Development",
      subtitle: "Build foundational knowledge.",
      fullTitle: "Build Skills with Free Courses & Hands-On Projects",
      description: "Enroll in courses that align with your career goals and start building practical skills. Simplified Computer Science offers free, high-quality tutorials and courses designed to simplify complex topics in AI, programming, and technology. As you progress through the lessons, complement your learning with hands-on projects to strengthen your understanding. Build a portfolio of your work to showcase your skills to potential employers.",
      icon: BookOpen,
      side: "right",
    },
    {
      title: "Self-Achievement",
      subtitle: "By highlighting the sense of accomplishment and growth",
      fullTitle: "Earn Certificates & Celebrate Self-Achievement",
      description: "Complete quizzes, assignments, and projects to earn certificates that validate your skills. Each certificate is not just a recognition of your learning but a testament to your personal achievement and growth. Display your certificates proudly as proof of your self-discipline and dedication to mastering new skills.",
      icon: Award,
      side: "left",
    },
    {
      title: "Hackathons & Projects",
      subtitle: "Apply skills in the real world.",
      fullTitle: "Participate in Hackathons & Build Real-World Projects",
      description: "Put your skills to the test by joining hackathons and building projects. This is where theory meets practice. Collaborating with peers on challenging problems sharpens your problem-solving abilities, builds your confidence, and expands your portfolio with tangible proof of your capabilities. It's a crucial step to show employers you can deliver results.",
      icon: Rocket,
      side: "right",
    },
    {
      title: "Workplace Experience",
      subtitle: "Explore industry exposure.",
      fullTitle: "Join Internships & Gain Real-World Experience",
      description: "Seek internships that align with your career goals. Internships provide valuable hands-on experience, help you network with professionals, and build your industry knowledge. Whether paid or unpaid, internships are a great way to apply the skills you've learned in a real-world setting, improve your resume, and increase your chances of landing a full-time role.",
      icon: Briefcase,
      side: "left",
    },
    {
      title: "Freelancing Platforms",
      subtitle: "Apply your skills in real-world projects.",
      fullTitle: "Freelancing Opportunities to Showcase Your Skills",
      description: "Take your knowledge beyond the classroom by applying it to real-world scenarios. Freelancing allows you to work on projects for clients, contribute to open-source, or try contract work. These experiences will enhance your portfolio, help you build a professional network, and demonstrate your capability to employers or clients. Freelancing is a great way to gain practical experience, build your personal brand, and start earning while you grow.",
      icon: Code,
      side: "right",
    },
    {
      title: "LinkedIn",
      subtitle: "Build your professional brand and network",
      fullTitle: "Create a Powerful LinkedIn Profile That Highlights Your Skills and Certifications",
      description: "LinkedIn is a powerful tool for showcasing your skills, certifications, and professional achievements. To stand out on LinkedIn, make sure your profile includes: a professional headline that clearly reflects your career goals and skills, a detailed summary that highlights your learning journey, skills and certifications related to your career path, and portfolio projects. Networking is key to building career opportunities. Connect with industry professionals, join relevant groups, and actively engage with posts in your field.",
      icon: Linkedin,
      side: "left",
    },
    {
      title: "Job Applications",
      subtitle: "Secure your dream role",
      fullTitle: "Apply for Jobs with Confidence and Stand Out to Employers",
      description: "Now that you've built a strong skill set, earned certificates, and gained real-world experience, it's time to apply for jobs. Tailor your resume and cover letter to highlight the most relevant skills. Leverage your LinkedIn profile, highlight your portfolio, prepare for interviews, and be persistent. By approaching job applications with confidence and a well-crafted personal brand, you'll be prepared to impress employers and take the next step toward your career goals.",
      icon: FileText,
      side: "right",
    },
    {
      title: "Lifelong Learning",
      subtitle: "Stay competitive and grow.",
      fullTitle: "Embrace Lifelong Learning to Reach New Career Heights",
      description: "In the fast-evolving world of technology, staying on top of industry trends and continuously upgrading your skills is crucial. Stay updated with the latest trends and technologies. Enroll in specialized courses and workshops. Read industry-related blogs, attend webinars, and engage with thought leaders. Lifelong learning is the key to adapting to new challenges and positioning yourself for long-term success.",
      icon: Lightbulb,
      side: "left",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Your Path to Success: Step-by-Step Career Timeline
        </h2>

        <p className="text-center text-gray-700 mb-16 text-base">
          Follow our proven path to success in tech and innovation
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-accent"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.side === "left";

              return (
                <div key={index} className="relative">
                  {/* Mobile Layout */}
                  <div className="md:hidden">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent-foreground font-bold z-10 bg-accent">
                          {index + 1}
                        </div>
                        {index < steps.length - 1 && (
                          <div className="w-px h-full bg-accent mt-2"></div>
                        )}
                      </div>
                      <div className="pb-8 flex-1">
                        <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-xs text-gray-600 mb-2">{step.subtitle}</p>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">{step.fullTitle}</h4>
                        <p className="text-gray-700 text-xs leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center gap-6">
                    {isLeft ? (
                      <>
                        <div className="w-1/2 pr-8">
                          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-full">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                            <p className="text-xs text-gray-600 mb-3">{step.subtitle}</p>
                            <h4 className="text-base font-semibold text-gray-900 mb-3">{step.fullTitle}</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent-foreground font-bold flex-shrink-0 z-10 relative bg-accent min-w-[48px]">
                          {index + 1}
                        </div>
                        <div className="w-1/2"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-1/2"></div>
                        <div className="w-12 h-12 rounded-full border-2 border-accent flex items-center justify-center text-accent-foreground font-bold flex-shrink-0 z-10 relative bg-accent min-w-[48px]">
                          {index + 1}
                        </div>
                        <div className="w-1/2 pl-8">
                          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-full">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                            <p className="text-xs text-gray-600 mb-3">{step.subtitle}</p>
                            <h4 className="text-base font-semibold text-gray-900 mb-3">{step.fullTitle}</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mid-section headline */}
                  {index === 3 && (
                    <div className="my-16 text-center px-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Advancing Your Career: From Gaining Experience to Becoming an Industry Expert
                      </h3>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
