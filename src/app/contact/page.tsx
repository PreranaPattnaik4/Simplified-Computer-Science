import { Instagram, Linkedin, Youtube } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk text-gray-900">
              Drop Us A Line
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              If you have any questions, feedback, or inquiries, feel free to reach out to us. We're always here to help and will get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
            
            {/* Contact Info */}
            <div className="space-y-8 pt-4">
                <div>
                    <h2 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                        Email Us
                    </h2>
                    <p className="text-gray-700">contact@simplifiedcomputerscience.com</p>
                </div>
                 <div>
                    <h2 className="text-xl font-bold font-space-grotesk text-gray-900 mb-2">
                        Email Us
                    </h2>
                    <p className="text-gray-700">simplifiedcomputerscience@gmail.com</p>
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-accent"><Instagram className="h-6 w-6"/></a>
                    <a href="#" className="text-gray-700 hover:text-accent"><Linkedin className="h-6 w-6"/></a>
                    <a href="#" className="text-gray-700 hover:text-accent">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M7.34,16.45c-0.37,0-0.69-0.12-0.95-0.38c-0.26-0.26-0.39-0.58-0.39-0.97V8.91c0-0.39,0.13-0.71,0.39-0.97c0.26-0.26,0.58-0.39,0.95-0.39h9.31c0.37,0,0.69,0.13,0.95,0.39c0.26,0.26,0.39,0.58,0.39,0.97v6.19c0,0.39-0.13,0.71-0.39,0.97c-0.26,0.26-0.58,0.38-0.95,0.38H7.34z M12,12.06L16.27,9L16.27,9L12,11.05L7.73,9v0L12,12.06z M12,12.92L7.6,10.03v5.42h8.81v-5.42L12,12.92z"></path></svg>
                    </a>
                    <a href="#" className="text-gray-700 hover:text-accent"><Youtube className="h-6 w-6"/></a>
                </div>
            </div>
            
            {/* Contact Form */}
            <div className="space-y-8">
              <form className="space-y-10">
                <div className="flex space-x-8">
                  <div className="w-1/2">
                    <input type="text" id="name" name="name" placeholder="Name" className="block w-full bg-transparent border-b border-gray-400 focus:border-black focus:ring-0 outline-none" />
                  </div>
                  <div className="w-1/2">
                    <input type="email" id="email" name="email" placeholder="Email Address" className="block w-full bg-transparent border-b border-gray-400 focus:border-black focus:ring-0 outline-none" />
                  </div>
                </div>
                <div>
                  <textarea id="message" name="message" rows={4} placeholder="Share Your Feedback Here" className="block w-full bg-transparent border-b border-gray-400 focus:border-black focus:ring-0 outline-none"></textarea>
                </div>
                <div>
                  <button type="submit" className="bg-white text-gray-800 font-bold py-2 px-8 rounded-full border border-gray-400 hover:bg-gray-100 transition-colors">
                    Submit
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
