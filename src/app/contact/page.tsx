import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-gray-900">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg border">
              <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input type="text" id="subject" name="subject" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-accent text-accent-foreground font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-bold font-space-grotesk text-gray-900 mb-6">
                        Contact Information
                    </h2>
                     <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Mail className="h-6 w-6 text-accent" />
                            <a href="mailto:simplifiedcomputerscience@gmail.com" className="text-lg text-gray-700 hover:text-accent">simplifiedcomputerscience@gmail.com</a>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold font-space-grotesk text-gray-900 mb-4">Your Feedback Matters</h3>
                        <p className="text-lg text-gray-700">We value your feedback and are committed to continuously improving our content. If you notice any mistakes or omissions, or if you have suggestions for us, please feel free to contact us. Your input helps us provide the best possible experience for our users.</p>
                    </div>
                     <p className="mt-4 text-lg text-gray-700">If you have any questions or need further information, please do not hesitate to reach out to us.</p>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
