'use client';
import { Search, Star, Users, MessageSquare, ChevronDown, Award } from 'lucide-react';
import Image from 'next/image';

const categories = [
  'Artificial Intelligence',
  'Software Development',
  'Cloud & IT Infrastructure',
  'Data Science & Analytics',
  'Cybersecurity',
];

const tags = [
    "Python",
    "JavaScript",
    "Next.js",
    "Docker",
    "Kubernetes",
    "AWS",
    "TensorFlow",
    "PyTorch",
    "SQL",
    "NoSQL",
    "Network Security",
    "DevOps",
    "Algorithms",
    "UX/UI Design",
];

const courses = [
  {
    title: 'Advanced AI: Deep Learning with TensorFlow',
    description: 'Master deep learning concepts and build advanced neural networks using TensorFlow. This course covers everything from fundamental principles to advanced applications, preparing you for a career at the forefront of AI.',
    level: 'Advanced',
    primaryCategory: 'Artificial Intelligence',
    suggestedTags: ['Python', 'TensorFlow', 'PyTorch'],
    image: 'https://picsum.photos/seed/course1/500/300',
    rating: 5,
    students: 125,
    comments: 23,
    author: 'Prerana',
    isTopCourse: true,
  },
  {
    title: 'Full-Stack Web Development with Next.js & React',
    description: 'Build and deploy modern, server-rendered web applications from scratch. You will learn the entire stack, from front-end development with React to back-end with Next.js, and deploy your applications with confidence.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['JavaScript', 'Next.js', 'DevOps'],
    image: 'https://picsum.photos/seed/course2/500/300',
    rating: 4,
    students: 852,
    comments: 102,
    author: 'Prerana',
    isTopCourse: true,
  },
  {
    title: 'AWS Certified Cloud Practitioner: Exam Prep',
    description: 'A comprehensive guide to mastering the AWS cloud and passing the CCP exam.',
    level: 'Beginner',
    primaryCategory: 'Cloud & IT Infrastructure',
    suggestedTags: ['AWS', 'DevOps', 'Network Security'],
    image: 'https://picsum.photos/seed/course3/500/300',
    rating: 5,
    students: 2341,
    comments: 450,
    author: 'Prerana',
  },
  {
    title: 'Data Structures & Algorithms in Python',
    description: 'Strengthen your core computer science fundamentals with practical Python examples.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['Python', 'Algorithms'],
    image: 'https://picsum.photos/seed/course4/500/300',
    rating: 5,
    students: 1780,
    comments: 250,
    author: 'Prerana',
  },
  {
    title: 'Introduction to Generative AI & Large Language Models',
    description: 'Explore the fundamentals of generative AI and learn how LLMs are transforming industries.',
    level: 'Beginner',
    primaryCategory: 'Artificial Intelligence',
    suggestedTags: ['Python', 'TensorFlow'],
    image: 'https://picsum.photos/seed/course5/500/300',
    rating: 4,
    students: 950,
    comments: 120,
    author: 'Prerana',
  },
  {
    title: 'Docker & Kubernetes: The Complete Guide',
    description: 'Containerize and orchestrate your applications for scalable and efficient deployments. This course provides hands-on experience with the tools that power modern cloud infrastructure.',
    level: 'Intermediate',
    primaryCategory: 'Cloud & IT Infrastructure',
    suggestedTags: ['Docker', 'Kubernetes', 'DevOps'],
    image: 'https://picsum.photos/seed/course6/500/300',
    rating: 5,
    students: 1150,
    comments: 180,
    author: 'Prerana',
    isTopCourse: true,
  },
  {
    title: 'Cybersecurity Fundamentals: Defending the Digital Frontier',
    description: 'Learn the core principles of cybersecurity and how to protect systems from threats.',
    level: 'Beginner',
    primaryCategory: 'Cybersecurity',
    suggestedTags: ['Network Security'],
    image: 'https://picsum.photos/seed/course7/500/300',
    rating: 4,
    students: 780,
    comments: 95,
    author: 'Prerana',
  },
  {
    title: 'Advanced Natural Language Processing with PyTorch',
    description: 'Dive deep into NLP techniques and build sophisticated language models with PyTorch.',
    level: 'Advanced',
    primaryCategory: 'Artificial Intelligence',
    suggestedTags: ['Python', 'PyTorch'],
    image: 'https://picsum.photos/seed/course8/500/300',
    rating: 5,
    students: 450,
    comments: 85,
    author: 'Prerana',
  },
  {
    title: 'SQL for Data Science: From Beginner to Advanced',
    description: 'Master the language of data and perform complex queries for insightful analysis.',
    level: 'Intermediate',
    primaryCategory: 'Data Science & Analytics',
    suggestedTags: ['SQL', 'NoSQL'],
    image: 'https://picsum.photos/seed/course9/500/300',
    rating: 5,
    students: 2100,
    comments: 320,
    author: 'Prerana',
  },
  {
    title: 'Introduction to UX/UI Design Principles',
    description: 'Learn the fundamentals of user experience and user interface design to create intuitive products.',
    level: 'Beginner',
    primaryCategory: 'Software Development',
    suggestedTags: ['UX/UI Design'],
    image: 'https://picsum.photos/seed/course10/500/300',
    rating: 4,
    students: 650,
    comments: 70,
    author: 'Prerana',
  },
  {
    title: 'Compiler Design & Theory: From Code to Execution',
    description: 'Understand the inner workings of compilers and how source code is translated into machine code.',
    level: 'Advanced',
    primaryCategory: 'Software Development',
    suggestedTags: ['Algorithms'],
    image: 'https://picsum.photos/seed/course11/500/300',
    rating: 5,
    students: 250,
    comments: 45,
    author: 'Prerana',
  },
  {
    title: 'Object-Oriented Design Patterns in JavaScript',
    description: 'Learn to write scalable, maintainable, and reusable code with proven design patterns.',
    level: 'Intermediate',
    primaryCategory: 'Software Development',
    suggestedTags: ['JavaScript', 'Algorithms'],
    image: 'https://picsum.photos/seed/course12/500/300',
    rating: 4,
    students: 890,
    comments: 110,
    author: 'Prerana',
  },
];

const CourseCard = ({ course, isFeatured = false }: { course: (typeof courses)[0]; isFeatured?: boolean }) => (
    <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group ${isFeatured ? 'flex flex-col md:flex-row' : ''}`}>
        <div className={`relative ${isFeatured ? 'md:w-1/2' : ''}`}>
            <Image 
                src={course.image} 
                alt={course.title} 
                width={500} 
                height={300} 
                className={`w-full object-cover ${isFeatured ? 'h-full' : 'h-48'}`} 
            />
            <div className="absolute top-2 right-2 bg-white p-1.5 rounded-full text-gray-500 hover:text-accent cursor-pointer">
                <MessageSquare size={16} />
            </div>
            <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs font-bold uppercase px-2 py-1 rounded-md">{course.level}</div>
            {course.isTopCourse && (
                <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-bold uppercase px-2 py-1 rounded-md flex items-center gap-1">
                    <Award size={14} />
                    <span>Top Course 2026</span>
                </div>
            )}
        </div>
        <div className={`p-4 flex flex-col ${isFeatured ? 'md:w-1/2 justify-between' : ''}`}>
            <div>
                <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < course.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                    ))}
                </div>
                <h3 className={`font-bold mb-1 ${isFeatured ? 'text-2xl h-auto' : 'text-lg h-14 line-clamp-2'}`}>{course.title}</h3>
                <p className={`text-muted-foreground mb-3 ${isFeatured ? 'text-base h-auto line-clamp-none' : 'text-sm h-10 line-clamp-2'}`}>{course.description}</p>
            </div>
            <div>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                        <Users size={16} />
                        <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MessageSquare size={16} />
                        <span>{course.comments}</span>
                    </div>
                </div>
                <div className="border-t border-gray-200 pt-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">SCS</div>
                    <div>
                        <p className="text-sm font-semibold">{course.author}</p>
                        <p className="text-xs text-gray-500">In {course.primaryCategory}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default function CoursesLivePage() {
  const topCourses = courses.filter(c => c.isTopCourse);
  const otherCourses = courses.filter(c => !c.isTopCourse);

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="space-y-6">
            <div className="relative">
              <input type="text" placeholder="Search Courses..." className="w-full border rounded-md py-2 px-4 pl-10" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-accent rounded focus:ring-accent-focus" />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Tag</h3>
              <div className="space-y-2">
                {tags.map((tag) => (
                  <label key={tag} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-accent rounded focus:ring-accent-focus" />
                    <span>{tag}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4">
          
          {/* Top Courses Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 border-b pb-3">Top Courses for 2026</h2>
            <div className="space-y-8">
              {topCourses.map((course) => (
                <CourseCard key={course.title} course={course} isFeatured={true} />
              ))}
            </div>
          </section>

          {/* All Other Courses Section */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold font-space-grotesk">All Courses</h2>
            <div className="relative">
                <button className="flex items-center gap-2 border rounded-md px-4 py-2 text-sm">
                    <span>Release Date (newest first)</span>
                    <ChevronDown size={16} />
                </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {otherCourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
