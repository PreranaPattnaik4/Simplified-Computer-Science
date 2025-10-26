import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* New Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="w-full h-96 relative rounded-lg overflow-hidden">
                <Image
                    src="https://picsum.photos/seed/contact-hero/800/600"
                    alt="Astronaut exploring from a book"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="space book"
                />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk text-gray-900 leading-tight">
                Discover the most trending courses in AI, technology, and more!
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Join now to access these high-demand courses. Earn a Free Certificate!
              </p>
              <button className="mt-8 bg-accent text-accent-foreground font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors">
                JOIN US
              </button>
            </div>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-gray-900">Drop Us A Line</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If you have any questions, feedback, or inquiries, feel free to reach out to us. We're always here to help and will get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="space-y-8 pt-4 text-left">
                <div>
                    <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                        Email Us
                    </h3>
                    <p className="text-gray-700">contact@simplifiedcomputerscience.com</p>
                    <p className="text-gray-700">simplifiedcomputerscience@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-space-grotesk text-gray-900 mb-4">Get in Touch</h3>
                  <div className="flex space-x-4">
                      <a href="#" className="text-gray-700 hover:text-accent"><Instagram className="h-6 w-6"/></a>
                      <a href="#" className="text-gray-700 hover:text-accent"><Linkedin className="h-6 w-6"/></a>
                      <a href="#" className="text-gray-700 hover:text-accent"><Mail className="h-6 w-6"/></a>
                      <a href="#" className="text-gray-700 hover:text-accent"><Youtube className="h-6 w-6"/></a>
                  </div>
                </div>
            </div>
            
            {/* Contact Form */}
            <div className="space-y-8">
              <form className="space-y-10">
                <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8">
                  <div className="w-full md:w-1/2">
                    <input type="text" id="name" name="name" placeholder="Name" className="block w-full bg-transparent border-b border-gray-400 focus:border-black focus:ring-0 outline-none pb-2" />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input type="email" id="email" name="email" placeholder="Email Address" className="block w-full bg-transparent border-b border-gray-400 focus:border-black focus:ring-0 outline-none pb-2" />
                  </div>
                </div>
                <div>
                  <textarea id="message" name="message" rows={4} placeholder="Share Your Feedback Here" className="block w-full bg-transparent border-b border-gray-400 focus:border-black focus:ring-0 outline-none"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-white text-gray-800 font-bold py-3 px-8 rounded-full border border-gray-400 hover:bg-gray-100 transition-colors">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-space-grotesk">Your Feedback Matters</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  We value your feedback and are committed to continuously improving our content. If you notice any mistakes or omissions, or if you have suggestions for us, please feel free to contact us at simplifiedcomputerscience@gmail.com. Your input helps us provide the best possible experience for our users.
                </p>
            </div>
        </section>

      </main>
    </div>
  );
}
