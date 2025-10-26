
'use client';
import React from 'react';
import { ArrowRight, User, Calendar } from "lucide-react";

export default function TrendingBlogs() {
  const blogs = [
    {
      author: "Prerana",
      category: "Artificial Intelligence",
      date: "May 23, 2023",
      title: "Understanding Artificial Intelligence: A Beginner's Guide to AI | Simplified Computer Science",
      description: "In the world of digital art, AI is transforming how we create. Through my collections, AI Artistry Unleashed, ho...",
      link: "#",
    },
    {
      author: "Prerana",
      category: "Artificial Intelligence",
      date: "May 23, 2023",
      title: "AI Artistry Unleashed: A Curated Collection of My Prompt-Generated Creations",
      description: "In the world of digital art, AI is transforming how we create. Through my collections, AI Artistry Unleashed, ho...",
      link: "#",
    },
    {
      author: "Prerana",
      category: "Artificial Intelligence",
      date: "May 23, 2023",
      title: "Top Free AI Tools to Supercharge Your Productivity and Creativity in 2023",
      description: "Edit Content Click on the Edit Content button to edit the current Artificial Intelligence continues to revolutionize the way we...",
      link: "#",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-[0.2em] uppercase font-space-grotesk text-gray-800">TRENDING BLOGS</h2>
        </div>


        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                <div className="flex items-center gap-1.5">
                    <User size={14} />
                    <span>{blog.author}</span>
                </div>
                <span>|</span>
                <div className="flex items-center gap-1.5">
                    <span>{blog.category}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-4 line-clamp-2 min-h-[56px] font-space-grotesk">
                {blog.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-2 min-h-[40px]">
                {blog.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

    