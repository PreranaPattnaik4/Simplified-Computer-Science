
import { getCourseBySlug, getCourses } from '@/app/lib/courses';
import { notFound } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { CheckCircle, Circle, FileText, MessageSquare, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export async function generateStaticParams() {
  const courses = getCourses();
  const params: { courseSlug: string; lessonSlug: string }[] = [];
  courses.forEach(course => {
    course.syllabus?.forEach(module => {
      module.lessons.forEach(lesson => {
        params.push({ courseSlug: course.slug, lessonSlug: lesson.slug });
      });
    });
  });
  return params;
}

export default function LessonPage({ params }: { params: { courseSlug: string; lessonSlug: string } }) {
  const course = getCourseBySlug(params.courseSlug);

  if (!course || !course.syllabus) {
    notFound();
  }

  const allLessons = course.syllabus.flatMap(module => module.lessons);
  const currentLessonIndex = allLessons.findIndex(lesson => lesson.slug === params.lessonSlug);
  
  if (currentLessonIndex === -1) {
    notFound();
  }

  const currentLesson = allLessons[currentLessonIndex];
  
  const totalLessons = allLessons.length;
  const progress = ((currentLessonIndex + 1) / totalLessons) * 100;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-80 min-w-80 flex-shrink-0 border-r bg-white flex flex-col">
        <div className="p-4 border-b">
          <Link href="/courses-live" className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black">
            <BookOpen size={16} />
            <span>Course Content</span>
          </Link>
        </div>
        <div className="flex-grow overflow-y-auto">
          <Accordion type="multiple" defaultValue={['item-0']} className="w-full">
            {course.syllabus.map((module, moduleIndex) => (
              <AccordionItem key={moduleIndex} value={`item-${moduleIndex}`} className="border-none">
                <AccordionTrigger className="px-4 py-3 text-sm font-semibold hover:bg-gray-100 border-b">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <ul className="space-y-1 mt-1">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isActive = lesson.slug === params.lessonSlug;
                      return (
                        <li key={lessonIndex}>
                          <Link href={`/learn/${course.slug}/${lesson.slug}`}>
                            <div className={`flex items-center gap-3 px-4 py-2.5 text-sm mx-2 rounded-md ${isActive ? 'bg-accent/20 text-accent-foreground font-semibold' : 'hover:bg-gray-100'}`}>
                              <FileText size={16} className="flex-shrink-0" />
                              <span className="flex-grow">{lesson.title}</span>
                              <Circle size={16} className={`flex-shrink-0 ${isActive ? 'text-accent' : 'text-gray-300'}`} />
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="border-b bg-white">
            <div className="container mx-auto max-w-7xl px-6 py-3 flex justify-between items-center">
                <h1 className="text-lg font-semibold text-gray-800">{course.title}</h1>
                 <div className="flex items-center gap-4">
                    <div className="w-64">
                         <Progress value={progress} className="h-2" />
                         <p className="text-xs text-muted-foreground mt-1 text-right">{Math.round(progress)}% Complete</p>
                    </div>
                    <Button variant="outline" size="sm">Mark as Complete</Button>
                </div>
            </div>
        </div>
        <div className="flex-1 overflow-y-auto p-8">
          <div className="container mx-auto max-w-4xl">
            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <article className="prose lg:prose-lg max-w-none">
                  {/* Note: In a real app, you would sanitize this HTML */}
                  <div dangerouslySetInnerHTML={{ __html: currentLesson.content }} />
                </article>
              </TabsContent>
              <TabsContent value="comments">
                <p>Comments feature coming soon!</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
}

// Add these new UI components if they don't exist

// src/components/ui/progress.tsx
export { Progress } from "@/components/ui/progress_new";
// src/components/ui/tabs.tsx
export { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs_new";
