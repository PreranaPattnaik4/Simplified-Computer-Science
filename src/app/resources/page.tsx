
import Image from 'next/image';

const heroImages = [
  {
    src: 'https://images.pexels.com/photos/7047292/pexels-photo-7047292.jpeg',
    alt: 'VR Future Tech',
  },
  {
    src: 'https://images.pexels.com/photos/3520665/pexels-photo-3520665.jpeg',
    alt: 'Hackathons and Internships',
  },
  {
    src: 'https://images.pexels.com/photos/8386363/pexels-photo-8386363.jpeg',
    alt: 'Robotics and Circuitry',
  },
];

export default function ResourcesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Image Panels */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {heroImages.map((image, index) => (
              <div key={index} className="flex-1 overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* Text Content */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-foreground mb-2">
              Hackathons & Internships: Stand Out with Hands-On Experience!!
            </h2>
            <p className="text-xl font-bold text-accent">
              Earn Free Certificate
            </p>
          </div>
        </div>
      </section>

      {/* Original Content */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold font-space-grotesk">Resources</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to the Resources page. Here you will find a collection of useful tools, guides, and downloads to help you on your learning journey.
        </p>
      </div>
    </main>
  );
}
