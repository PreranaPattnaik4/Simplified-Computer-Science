'use client';
import { Search, Star, Users, MessageSquare, ChevronDown, Award } from 'lucide-react';
import Image from 'next/image';
import { getCourses } from '@/app/lib/courses';
import Link from 'next/link';

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

const CourseCard = ({ course, isFeatured = false }: { course: ReturnType<typeof getCourses>[0]; isFeatured?: boolean }) => (
    <Link href={`/courses-live/${course.slug}`}>
        <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full ${isFeatured ? 'flex flex-col md:flex-row' : 'flex flex-col'}`}>
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
            <div className={`p-4 flex flex-col flex-grow ${isFeatured ? 'md:w-1/2 justify-between' : ''}`}>
                <div>
                    <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className={i < course.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                        ))}
                    </div>
                    <h3 className={`font-bold mb-1 ${isFeatured ? 'text-2xl h-auto' : 'text-lg h-14 line-clamp-2'}`}>{course.title}</h3>
                    <p className={`text-muted-foreground mb-3 ${isFeatured ? 'text-base h-auto line-clamp-none' : 'text-sm h-10 line-clamp-2'}`}>{course.description}</p>
                </div>
                <div className="mt-auto">
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
    </Link>
);


export default function CoursesLivePage() {
  const courses = getCourses();
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
