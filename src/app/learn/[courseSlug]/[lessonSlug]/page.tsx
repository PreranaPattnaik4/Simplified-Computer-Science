
import { getCourseBySlug, getCourses } from '@/app/lib/courses';
import { notFound } from 'next/navigation';
import LessonClientPage from './LessonClientPage';

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

  return (
    <LessonClientPage 
        course={course} 
        currentLessonIndex={currentLessonIndex} 
        lessonSlug={params.lessonSlug} 
    />
  );
}
