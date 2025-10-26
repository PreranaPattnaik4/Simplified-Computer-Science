import { getCourseBySlug, getCourses } from '@/app/lib/courses';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, BarChart, Users, Star, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const courses = getCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    return <div>Course not found</div>;
  }

  const otherCourses = getCourses().filter(c => c.slug !== params.slug).slice(0, 3);

  return (
    <div className="bg-gray-50/50">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <p className="text-accent font-semibold mb-2 sm:mb-0">{course.primaryCategory}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < course.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                  ))}
                  <span className="text-muted-foreground text-sm ml-1">({course.rating}.0)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold font-space-grotesk text-gray-900 mb-4">{course.title}</h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{course.description}</p>
              
              <div className="flex items-center gap-4 mt-6 text-sm">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">SCS</div>
                    <div>
                        <p className="font-semibold text-gray-800">{course.author}</p>
                        <p className="text-muted-foreground">Instructor</p>
                    </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-space-grotesk text-2xl">What you'll learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} /><span>Master Python fundamentals for data analysis.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} /><span>Apply machine learning algorithms with Scikit-learn.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} /><span>Build and train neural networks with TensorFlow and PyTorch.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} /><span>Perform data manipulation and visualization with Pandas and Matplotlib.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} /><span>Understand the core concepts of Generative AI and LLMs.</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} /><span>Deploy models and build real-world AI applications.</span></li>
                </ul>
              </CardContent>
            </Card>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="overflow-hidden shadow-lg">
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                  {course.isTopCourse && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                        <Award size={14} />
                        <span>Top Course 2026</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-4">Free</h2>
                  <Button className="w-full h-12 text-lg font-bold bg-accent text-accent-foreground hover:bg-yellow-500">Enroll Now</Button>
                  <div className="mt-6 space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-3"><Clock size={18} /><span>Approx. 25 hours to complete</span></p>
                    <p className="flex items-center gap-3"><BarChart size={18} /><span>{course.level}</span></p>
                    <p className="flex items-center gap-3"><Users size={18} /><span>{course.students.toLocaleString()} students</span></p>
                    <p className="flex items-center gap-3"><Award size={18} /><span>Certificate of completion</span></p>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold font-space-grotesk text-gray-800 mb-2">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                        {course.suggestedTags.map(tag => (
                            <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-full">{tag}</span>
                        ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        {/* You may also like */}
        <div className="mt-24">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-8">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherCourses.map(c => (
                    <Link key={c.slug} href={`/courses-live/${c.slug}`} className="block">
                      <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                          <Image src={c.image} alt={c.title} width={500} height={300} className="w-full h-48 object-cover" />
                          <CardContent className="p-4">
                              <h3 className="font-bold text-lg h-14 line-clamp-2">{c.title}</h3>
                              <p className="text-sm text-muted-foreground mt-2">{c.primaryCategory}</p>
                          </CardContent>
                      </Card>
                    </Link>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
}
