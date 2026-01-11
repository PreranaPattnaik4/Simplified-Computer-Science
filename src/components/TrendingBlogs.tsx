
'use client';
import React from 'react';
import { ArrowRight, User, Calendar } from "lucide-react";
import { Button } from './ui/button';
import Link from 'next/link';

export default function TrendingBlogs() {
  const blogs = [
    {
      author: "Prerana",
      categories: ["Career Tips", "Professional Skills"],
      date: "June 5, 2024",
      title: "Career Tips for Tech Professionals: Navigating Your Path to Success",
      description: "Navigating a successful career in tech can be both exciting and challenging, given the industry’s rapid pace of change and constant innovation. Whether you’re just starting out or looking to level up your career, it’s important to focus not only on technical skills but also on building a strong foundation of soft skills, networking, and continuous learning. By staying adaptable and setting clear goals, tech professionals can position themselves for long-term success and growth in this dynamic field. Here are some key career tips to help you chart your path and reach your full potential in the tech industry.",
      link: "/blog/career-tips-for-tech-professionals",
    },
    {
      author: "Prerana",
      categories: ["Interview Tips", "Career"],
      date: "July 1, 2024",
      title: "20 Essential Tips to Ace Corporate Interviews in 2025",
      description: "Corporate interviews are a crucial step in securing your dream job. As we step into 2025, the job market continues to evolve, making it even more important to stay ahead of the curve.",
      link: "/blog/20-essential-tips-to-ace-corporate-interviews-in-2025",
    },
    {
      author: "Prerana",
      categories: ["Artificial Intelligence", "Futures Tech", "Insight blogs"],
      date: "May 23, 2023",
      title: "Understanding Artificial Intelligence: A Beginner's Guide to AI | Simplified Computer Science",
      description: "Edit Content Click on the Edit Content button to edit/add the content. Introduction Artificial Intelligence (AI) has become a buzzword…",
      link: "#",
    },
    
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-[0.2em] uppercase font-space-grotesk text-gray-800">TRENDING BLOGS</h2>
             <p className="mt-4 text-lg text-muted-foreground">Grab a cup of coffee and dive into our trending blogs! Discover insights, tips, and more to fuel your learning journey at Simplified Computer Science.</p>
        </div>


        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                    <User size={14} />
                    <span>{blog.author}</span>
                </div>
                {blog.categories.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    <span>|</span>
                    <div className="flex items-center gap-1.5">
                        <span>{category}</span>
                    </div>
                  </React.Fragment>
                ))}
              </div>

              {/* Title */}
              <a href={blog.link}><h3 className="text-lg font-bold text-gray-800 mb-4 line-clamp-2 min-h-[56px] font-space-grotesk group-hover:text-accent">
                {blog.title}
              </h3></a>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-2 min-h-[40px]">
                {blog.description}
              </p>
            </div>
          ))}
        </div>
         <div className="text-center mt-12">
            <Link href="/blog">
                <Button>
                    View All Blogs
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
