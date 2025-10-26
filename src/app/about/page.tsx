import { GraduationCap, Lightbulb, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: <GraduationCap className="h-10 w-10 text-accent" />,
    title: 'Expert-Led Courses',
    description: 'Learn from industry experts with our comprehensive, up-to-date courses designed for all skill levels.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: 'Innovative Learning',
    description: 'We simplify complex topics, making them accessible and engaging through practical examples and hands-on projects.',
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: 'Community Focused',
    description: 'Join a thriving community of learners, share your knowledge, and collaborate on exciting projects.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900">
              About Simplified Computer Science
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is to make technology and computer science accessible to everyone by simplifying complex concepts and fostering a community of learners and innovators.
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="pr-8">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900">
                Our Mission
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At Simplified Computer Science, we believe that education should be accessible to everyone, regardless of their background or experience. We are dedicated to breaking down complex topics into easy-to-understand content, empowering our users to build skills, solve problems, and innovate.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We strive to create a learning environment that is not only educational but also inspiring, fostering a passion for technology and lifelong learning.
              </p>
            </div>
            <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
                <Image
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Our Mission"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                 <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg md:order-last">
                    <Image
                        src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Founder"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="pl-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900">
                        Meet Our Founder
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Simplified Computer Science was founded by Prerana, a tech enthusiast and educator with a passion for demystifying technology. With a background in software engineering and a drive to share knowledge, Prerana created this platform to provide high-quality, accessible education for aspiring tech professionals and curious minds alike.
                    </p>
                </div>
            </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900">
                Why Choose Us?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We are committed to providing a top-tier learning experience. Here's what sets us apart:
              </p>
            </div>
            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex justify-center items-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
