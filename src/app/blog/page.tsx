
'use client';
import { Search, User, Calendar, Tag } from 'lucide-react';

const blogPosts = [
  {
    category: 'Career Tips, Professional Skills',
    title: 'Career Tips for Tech Professionals: Navigating Your Path to Success',
    date: '5 June 2024',
    description: 'Navigating a successful career in tech can be both exciting and challenging, given the industry’s rapid pace of change and constant innovation. Whether you’re just starting out or looking to level up your career, it’s important to focus not only on technical skills but also on building a strong foundation of soft skills, networking, and continuous learning. By staying adaptable and setting clear goals, tech professionals can position themselves for long-term success and growth in this dynamic field. Here are some key career tips to help you chart your path and reach your full potential in the tech industry.\n\nHere are some valuable career tips for tech professionals to help you navigate your path to success:\n1. Continuous Learning is Key\nThe tech industry evolves rapidly, so staying up-to-date with new technologies is essential. Whether it’s learning about emerging programming languages, AI tools, or cloud platforms, prioritize continuous learning. Online courses, certifications, and workshops are great resources for staying ahead.\n2. Develop a Specialization\nWhile general knowledge is important, becoming an expert in a specific area can set you apart. Consider specializing in fields like Artificial Intelligence, Data Science, Cloud Computing, Cybersecurity, or Web Development. Specializing allows you to stand out and be seen as an authority in that niche.\n3. Build a Personal Brand\nBuilding a personal brand helps you establish credibility and visibility in the tech community. Share your knowledge through blog posts, LinkedIn articles, YouTube tutorials, or podcasts. Networking and collaborating with others in the industry also enhances your reputation.\n4. Master Soft Skills\nTechnical expertise is crucial, but soft skills like communication, teamwork, and leadership are equally important. Strong communication helps in explaining complex technical concepts to non-technical stakeholders, while leadership and collaboration foster a productive work environment.\n5. Seek Mentorship\nMentors can guide you through challenges, provide career advice, and offer insights based on their own experiences. Building a relationship with a mentor in your area of interest can be an invaluable tool for growth.\n6. Get Hands-on Experience\nTheoretical knowledge is important, but hands-on experience is what will set you apart in the tech world. Contribute to open-source projects, participate in hackathons, or start your own personal projects to build a portfolio that showcases your abilities.\n7. Stay Adaptable\nThe tech industry is known for its fast-paced change. Adaptability is crucial to surviving and thriving. Don’t be afraid to switch gears and learn something new if the industry shifts or if a new opportunity arises. Flexibility is one of the most valuable traits in tech careers.\n8. Network with Industry Professionals\nNetworking opens doors to opportunities and collaborations. Attend tech conferences, webinars, or meetups to connect with other professionals. Platforms like LinkedIn also allow you to stay in touch with industry trends and career opportunities.\n9. Set Clear Career Goals\nWhether you’re aiming for a leadership role, want to switch to a different technology stack, or plan to start your own tech company, setting clear goals helps you stay focused and motivated. Regularly evaluate your progress and make adjustments as needed.\n10. Understand the Business Side\nIn addition to technical skills, understanding how technology drives business decisions is important. Learn how your work aligns with business goals and be proactive in showing how tech solutions can add value to the organization.\n11. Pursue Certifications\nCertifications can boost your credibility and make you more competitive in the job market. Platforms like Coursera, Udemy, and edX offer various certifications in programming, cloud computing, cybersecurity, and more.\n12. Work on Soft Tech Skills\nApart from technical skills, focus on skills like problem-solving, time management, and critical thinking. These can enhance your ability to deliver quality solutions and manage projects more effectively.\n13. Balance Work and Life\nWhile it’s important to invest in your career, maintaining a healthy work-life balance is equally important for long-term success. Burnout can affect your productivity and career growth. Take time to relax and recharge to stay at your best.\nBy focusing on these strategies, tech professionals can create a successful, fulfilling career that adapts to the ever-changing tech landscape.',
    link: '#',
  },
  {
    category: 'Python',
    title: '100 Essential Python Questions & Answers: Your Ultimate Beginner’s Guide to Mastering Python',
    date: '10 February 2025',
    description: 'Python is one of the most beginner-friendly programming languages, widely used in web development, data science, artificial intelligence, and automation...',
    link: '#',
  },
  {
    category: 'Artificial Intelligence, Futures Tech, Insight blogs',
    title: 'Understanding Artificial Intelligence: A Beginner’s Guide to AI | Simplified Computer Science',
    date: '7 October 2024',
    description: 'Introduction Artificial Intelligence (AI) has become a buzzword in recent years, permeating various aspects of our lives and reshaping entire industries...',
    link: '#',
  },
  {
    category: 'PROJECTS TIPS',
    title: 'Project Management: The Ultimate Guide to Starting and Completing Projects with top 8 tips',
    date: '9 September 2024',
    description: 'Starting a project can be an exciting yet overwhelming experience. Whether it’s launching a new business, building a website, or developing a product, the journey from idea to completion can be tricky.',
    link: '#',
  },
  {
    category: 'PROJECTS TIPS',
    title: 'Effective Project Execution: From Inception to Completion',
    date: '9 September 2024',
    description: 'Project execution is a critical phase in project management that transforms plans into actionable tasks to achieve desired outcomes. It involves multiple stages, ensuring alignment between stakeholders, resources, and timelines.',
    link: '#',
  },
  {
    category: 'PROJECTS TIPS, Website Development',
    title: 'How to Create a Project Website on WordPress Without Coding',
    date: '9 September 2024',
    description: 'Creating a project website is an essential step in showcasing your work, organizing tasks, and sharing information with stakeholders or collaborators. With WordPress, you can build a professional website without writing a single line of code.',
    link: '#',
  },
];

const recentPosts = [
    { title: "Career Tips for Tech Professionals...", date: "5 June 2024", comments: 0, link: "#" },
    { title: "100 Essential Python Questions & Answers...", date: "10 February 2025", comments: 0, link: "#" },
    { title: "Private: post templates", date: "30 December 2024", comments: 0, link: "#" },
    { title: "Understanding Artificial Intelligence: A Beginner’s Guide...", date: "7 October 2024", comments: 0, link: "#" },
    { title: "Project Management: The Ultimate Guide...", date: "9 September 2024", comments: 0, link: "#" },
    { title: "Effective Project Execution: From Inception to Completion", date: "9 September 2024", comments: 0, link: "#" },
];

const tags = [
    "Algorithms", "Artificial Intelligence", "Basics of Computer Science",
    "Best AI Tools", "Blogging", "Career Roadmap", "ChatGPT", "Coding Skills",
    "Computer Science", "Content Creation", "Data Science", "hackathon",
    "Insight blogs", "Machine Learning", "Python Programming", "SEO Best Practices",
    "Social Media", "Software Engineering", "Website Development"
];


export default function BlogPage() {
  return (
    <div className="bg-white text-gray-800">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-left">
            <div className="w-full md:w-2/3">
              <div className="h-1 w-16 bg-accent mb-4"></div>
              <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 leading-tight">
                Stay Ahead of the Curve with Cutting-Edge Content: AI, Tech & CS
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Fuel your curiosity with insightful blogs exploring the latest advancements in AI, the ever-evolving tech world, and in-depth analyses of various computer science topics. Keep your tech knowledge on point!
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Blog Posts */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-wrap gap-2 mb-8 border-b pb-4">
                  <button className="px-4 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-full">All</button>
                  <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-200 rounded-full">Artificial Intelligence</button>
                  <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-200 rounded-full">Futures Tech</button>
                  <button className="px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-200 rounded-full">Insight blogs</button>
              </div>

              <div className="space-y-12">
                {blogPosts.map((post, index) => (
                  <article key={index} className="flex flex-col md:flex-row gap-6 group">
                     <div className="flex-grow">
                        <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{post.category}</div>
                        <h2 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-2">
                          <a href={post.link} className="group-hover:text-accent transition-colors">{post.title}</a>
                        </h2>
                        <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                        <p className="text-gray-600 leading-relaxed line-clamp-3">{post.description}</p>
                         <a href={post.link} className="text-accent font-semibold mt-4 inline-block hover:underline">Read More</a>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center">
                  <button className="bg-accent text-accent-foreground font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors">
                      Load More
                  </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-1/3 space-y-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold font-space-grotesk mb-4 border-b pb-2">Recent Posts</h3>
                <ul className="space-y-4">
                  {recentPosts.map((post, index) => (
                     <li key={index}>
                        <a href={post.link} className="font-semibold text-gray-800 hover:text-accent">{post.title}</a>
                        <div className="text-xs text-gray-500 mt-1">{post.date} / {post.comments} Comments</div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold font-space-grotesk mb-4 border-b pb-2">Search</h3>
                <div className="relative">
                    <input type="text" placeholder="Search..." className="w-full pl-4 pr-10 py-2 border rounded-lg focus:ring-accent focus:border-accent" />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

               <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold font-space-grotesk mb-4 border-b pb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                         <a key={index} href="#" className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors">
                            {tag}
                        </a>
                    ))}
                </div>
              </div>

               <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold font-space-grotesk mb-4 border-b pb-2">Please share this</h3>
                <div className="flex space-x-2">
                     {/* Social share icons can be added here */}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
