import { GraduationCap, Lightbulb, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';

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
              Discover the Most Trending Courses in AI, Technology, and more! Join now to access these High-Demand Courses Earn Free Certificate at Simplified Computer Science
            </p>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="pr-8">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900">
                Welcome to Simplified Computer Science: Your Comprehensive Educational Platform
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                At Simplified Computer Science, we provide a variety of resources to help you enhance your skills and knowledge in the tech industry. Our offerings include:
              </p>
              <ul className="mt-4 space-y-2 text-lg text-muted-foreground">
                <li><strong>Courses:</strong> A wide range of online courses covering essential and emerging technologies for learners at all levels.</li>
                <li><strong>Kindle eBooks:</strong> In-depth eBooks on cutting-edge topics, providing practical insights for self-paced learning.</li>
                <li><strong>Insightful Blogs:</strong> Engaging blog posts that explore the latest trends, tips, and best practices in technology.</li>
                <li><strong>Engaging YouTube Content:</strong> Informative videos that simplify complex concepts, making learning interactive and enjoyable.</li>
              </ul>
               <p className="mt-4 text-lg text-muted-foreground">
                Join us on your educational journey and unlock your potential in technology today!
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
                        MEET PRERANA
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Welcome to Simplified Computer Science! I’m Prerana, the creator behind this platform. Whether you’re here to explore, learn, or collaborate, I’m excited to connect with you. With a passion for web development, content creation, and digital marketing, I’m dedicated to turning ideas into engaging online experiences. Let’s work together to bring your vision to life!
                    </p>
                </div>
            </div>
        </section>
        
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-space-grotesk text-gray-900">Bringing Your Vision to Life with Expert Web Development & AI Solutions</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Let’s Collaborate! Gain full access to our extensive library of free courses and track your progress effortlessly! While our Blogs, Tutorials, and Resources are available without signup, registering allows you to enjoy exclusive content, course certificates, and more. Most of our courses are free—start learning today with no fees, just knowledge!
            </p>
             <p className="mt-4 text-lg text-muted-foreground">Looking forward to staying connected on LinkedIn! And see how I turn ideas into impactful digital experiences. discover my work!</p>
             <a href="#" className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors">LINKEDIN</a>
        </section>
      </main>
    </div>
  );
}
