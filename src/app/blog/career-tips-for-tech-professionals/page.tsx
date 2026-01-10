
import { User, Calendar, Folder } from 'lucide-react';
import Image from 'next/image';

const BlogHeader = ({ title, description }: { title: string, description: string }) => (
    <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-left">
        <div className="w-full md:w-2/3">
          <div className="h-1 w-16 bg-accent mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </section>
);

const CareerTip = ({ number, title, children }: { number: number, title: string, children: React.ReactNode }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">{number}. {title}</h3>
        <p className="text-lg text-muted-foreground leading-relaxed">{children}</p>
    </div>
);

export default function CareerTipsPage() {
  const pageDescription = "Navigating a successful career in tech can be both exciting and challenging, given the industry’s rapid pace of change and constant innovation.";
  
  return (
    <div className="bg-white">
      <BlogHeader 
          title="Career Tips for Tech Professionals: Navigating Your Path to Success"
          description={pageDescription}
      />
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <div className="flex justify-start items-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <User size={16} /> Prerana
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Calendar size={16} /> June 5, 2024
            </div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <Folder size={16} /> Career Tips, Professional Skills
            </div>
        </div>
        
        <div className="prose lg:prose-xl max-w-none mx-auto text-muted-foreground">
            <p className="lead text-xl mb-8">
                Whether you’re just starting out or looking to level up your career, it’s important to focus not only on technical skills but also on building a strong foundation of soft skills, networking, and continuous learning. By staying adaptable and setting clear goals, tech professionals can position themselves for long-term success and growth in this dynamic field. Here are some key career tips to help you chart your path and reach your full potential in the tech industry.
            </p>
        </div>

        <div className="mt-8">
            <CareerTip number={1} title="Continuous Learning is Key">
                The tech industry evolves rapidly, so staying up-to-date with new technologies is essential. Whether it’s learning about emerging programming languages, AI tools, or cloud platforms, prioritize continuous learning. Online courses, certifications, and workshops are great resources for staying ahead.
            </CareerTip>
            <CareerTip number={2} title="Develop a Specialization">
                While general knowledge is important, becoming an expert in a specific area can set you apart. Consider specializing in fields like Artificial Intelligence, Data Science, Cloud Computing, Cybersecurity, or Web Development. Specializing allows you to stand out and be seen as an authority in that niche.
            </CareerTip>
            <CareerTip number={3} title="Build a Personal Brand">
                Building a personal brand helps you establish credibility and visibility in the tech community. Share your knowledge through blog posts, LinkedIn articles, YouTube tutorials, or podcasts. Networking and collaborating with others in the industry also enhances your reputation.
            </CareerTip>
            <CareerTip number={4} title="Master Soft Skills">
                Technical expertise is crucial, but soft skills like communication, teamwork, and leadership are equally important. Strong communication helps in explaining complex technical concepts to non-technical stakeholders, while leadership and collaboration foster a productive work environment.
            </CareerTip>
            <CareerTip number={5} title="Seek Mentorship">
                Mentors can guide you through challenges, provide career advice, and offer insights based on their own experiences. Building a relationship with a mentor in your area of interest can be an invaluable tool for growth.
            </CareerTip>
            <CareerTip number={6} title="Get Hands-on Experience">
                Theoretical knowledge is important, but hands-on experience is what will set you apart in the tech world. Contribute to open-source projects, participate in hackathons, or start your own personal projects to build a portfolio that showcases your abilities.
            </CareerTip>
            <CareerTip number={7} title="Stay Adaptable">
                The tech industry is known for its fast-paced change. Adaptability is crucial to surviving and thriving. Don’t be afraid to switch gears and learn something new if the industry shifts or if a new opportunity arises. Flexibility is one of the most valuable traits in tech careers.
            </CareerTip>
            <CareerTip number={8} title="Network with Industry Professionals">
                Networking opens doors to opportunities and collaborations. Attend tech conferences, webinars, or meetups to connect with other professionals. Platforms like LinkedIn also allow you to stay in touch with industry trends and career opportunities.
            </CareerTip>
            <CareerTip number={9} title="Set Clear Career Goals">
                Whether you’re aiming for a leadership role, want to switch to a different technology stack, or plan to start your own tech company, setting clear goals helps you stay focused and motivated. Regularly evaluate your progress and make adjustments as needed.
            </CareerTip>
            <CareerTip number={10} title="Understand the Business Side">
                In addition to technical skills, understanding how technology drives business decisions is important. Learn how your work aligns with business goals and be proactive in showing how tech solutions can add value to the organization.
            </CareerTip>
            <CareerTip number={11} title="Pursue Certifications">
                Certifications can boost your credibility and make you more competitive in the job market. Platforms like Coursera, Udemy, and edX offer various certifications in programming, cloud computing, cybersecurity, and more.
            </CareerTip>
            <CareerTip number={12} title="Work on Soft Tech Skills">
                Apart from technical skills, focus on skills like problem-solving, time management, and critical thinking. These can enhance your ability to deliver quality solutions and manage projects more effectively.
            </CareerTip>
            <CareerTip number={13} title="Balance Work and Life">
                While it’s important to invest in your career, maintaining a healthy work-life balance is equally important for long-term success. Burnout can affect your productivity and career growth. Take time to relax and recharge to stay at your best.
            </CareerTip>
        </div>

        <div className="mt-12 text-center text-lg text-muted-foreground">
            By focusing on these strategies, tech professionals can create a successful, fulfilling career that adapts to the ever-changing tech landscape.
        </div>
        
      </main>
    </div>
  );
}
