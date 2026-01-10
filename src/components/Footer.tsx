import { Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white/80">
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4">
              <Image src="https://i.postimg.cc/wMJrsmsG/1.png" alt="Simplified Computer Science Logo" width={150} height={40} />
            </div>
            <p>Welcome to Simplified Computer Science, your ultimate guide to the world of technology. Our mission is to make computer science accessible and understandable for everyone, from beginners to experts.</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white font-space-grotesk">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-accent">Home</a></li>
              <li><a href="/about" className="hover:text-accent">About</a></li>
              <li><a href="/resources" className="hover:text-accent">Resources</a></li>
              <li><a href="/profile" className="hover:text-accent">My Profile</a></li>
              <li><a href="/contact" className="hover:text-accent">Contact</a></li>
              <li><a href="/faq" className="hover:text-accent">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white font-space-grotesk">EXPLORER</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-accent">Blogs</a></li>
              <li><a href="/courses" className="hover:text-accent">Courses Live!</a></li>
              <li><a href="/resources" className="hover:text-accent">Resources</a></li>
              <li><a href="/services" className="hover:text-accent">Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white font-space-grotesk">GET IN TOUCH</h3>
            <p>simplifiedcomputerscie@gmail.com</p>
            <div className="mt-4 flex space-x-4">
              <a href="#"><Instagram className="h-6 w-6 hover:text-accent"/></a>
              <a href="#"><Linkedin className="h-6 w-6 hover:text-accent"/></a>
              <a href="#">{/* Medium Icon */}</a>
              <a href="#"><Youtube className="h-6 w-6 hover:text-accent"/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
          <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between px-4 text-sm sm:flex-row">
              <p>&copy; {new Date().getFullYear()} Simplified Computer Science. All Rights Reserved.</p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                  <a href="/terms" className="hover:text-accent">Terms and Conditions</a>
                  <a href="/privacy" className="hover:text-accent">Privacy Policy</a>
                  <a href="/disclaimer" className="hover:text-accent">Disclaimer</a>
              </div>
          </div>
      </div>
    </footer>
  );
}
