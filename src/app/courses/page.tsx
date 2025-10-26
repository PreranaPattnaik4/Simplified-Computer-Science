'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function CoursesPage() {
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      id: 0,
      title: "Career Tips and Roadmaps",
      subtitle: "Your career journey starts here",
      image: "http://simplifiedcomputerscience.com/wp-content/uploads/2024/11/Screenshot-1260-1.png",
    },
    {
      id: 1,
      title: "TRENDING BLOGS",
      subtitle: "Stay updated with the latest trends",
      image: "http://simplifiedcomputerscience.com/wp-content/uploads/2024/10/people-wearing-futuristic-high-tech-virtual-reality-glasses-scaled.jpg",
    },
    {
      id: 2,
      title: "Hackathons and Internships",
      subtitle: "Gain real-world experience",
      image: "http://simplifiedcomputerscience.com/wp-content/uploads/2025/03/futurism-perspective-digital-nomads-lifestyle-Copy-scaled.jpg",
    },
    {
      id: 3,
      title: "PROJECTS",
      subtitle: "Build your portfolio",
      image: "http://simplifiedcomputerscience.com/wp-content/uploads/2024/10/ai-chip-intelligence-technology-deep-learning-scaled.jpg",
    },
    {
      id: 4,
      title: "TOP TRENDING COURSES",
      subtitle: "Master in-demand skills",
      image: "http://simplifiedcomputerscience.com/wp-content/uploads/2024/11/digital-art-ai-technology-background_23-2151719560.jpg",
    },
  ];

  return (
    <main>
        <section className="w-full bg-black py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-2 h-64 md:h-80 rounded-lg overflow-hidden">
                {panels.map((panel) => {
                    const isActive = activePanel === panel.id;
                    const activeWidth = 65;
                    const inactiveWidth = (100 - activeWidth) / (panels.length - 1);
                    const width = isActive ? activeWidth : inactiveWidth;

                    return (
                    <div
                        key={panel.id}
                        className={`relative overflow-hidden cursor-pointer group transition-all duration-500 ease-out rounded-lg flex-1`}
                        style={{
                        flex: `${width} 1 auto`,
                        }}
                        onClick={() => setActivePanel(panel.id)}
                        onMouseEnter={() => setActivePanel(panel.id)}
                    >
                        <img
                        src={panel.image}
                        alt={panel.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <div
                        className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-opacity duration-500 ${
                            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                        >
                        <h3 className="text-white text-lg md:text-2xl font-bold uppercase tracking-wider mb-2">
                            {panel.title}
                        </h3>
                        <p className="text-yellow-400 font-semibold text-sm md:text-base uppercase tracking-widest">
                            {panel.subtitle}
                        </p>
                        </div>
                        {!isActive && (
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 opacity-75 group-hover:opacity-0 transition-opacity duration-300">
                            <h3 className="text-white text-sm md:text-lg font-bold uppercase tracking-wider truncate">
                            {panel.title}
                            </h3>
                        </div>
                        )}
                    </div>
                    );
                })}
                </div>
                <div className="flex justify-center gap-3 mt-8">
                {panels.map((panel) => (
                    <button
                    key={panel.id}
                    onClick={() => setActivePanel(panel.id)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                        activePanel === panel.id
                        ? "w-8 bg-yellow-400"
                        : "w-3 bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to ${panel.title}`}
                    />
                ))}
                </div>
            </div>
        </section>
        <div className="container mx-auto max-w-7xl px-4 py-16">
            <h1 className="text-4xl font-bold font-space-grotesk">Courses</h1>
            <p className="mt-4 text-lg text-muted-foreground">
            Browse our wide selection of courses.
            </p>
        </div>
    </main>
  );
}
