import React from 'react';

export default function IndustrySolutions() {
  const topTags = [
    { number: "02", text: "Building Intelligent Chatbots", color: "bg-pastel-pink-bg", position: "justify-start items-end" },
    { number: "01", text: "Generative AI", color: "bg-pastel-purple-bg", position: "justify-center items-end" },
    { number: "03", text: "NLP", color: "bg-pastel-blue-bg", position: "justify-center items-center" },
    { number: "04", text: "Python", color: "bg-pastel-yellow-bg", position: "justify-end items-start" },
  ];

  const bottomTags = [
    { number: "05", text: "Machine Learning", color: "bg-pastel-purple-bg", position: "justify-start items-center" },
    { number: "06", text: "Generative Pre-Trained Transformer", color: "bg-pastel-pink-bg", position: "justify-center items-start" },
    { number: "07", text: "AI Ethics And Safety", color: "bg-pastel-green-bg", position: "justify-end items-center" },
    { number: "08", text: "Responsible AI", color: "bg-pastel-blue-bg", position: "justify-center items-end" },
  ];

  const Tag = ({ number, text, color }: {number: string, text: string, color: string}) => (
    <div
      className={`${color} text-gray-800 px-6 py-3 rounded-2xl font-bold shadow-sm hover:shadow-md transition-shadow cursor-pointer text-base w-max`}
    >
      <span className="font-normal text-gray-500 mr-2">{number}</span>{text}
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Row of Tags */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 px-4">
          {topTags.map((tag, index) => (
             <div key={index} className={`flex ${tag.position}`}>
                <Tag number={tag.number} text={tag.text} color={tag.color} />
             </div>
          ))}
        </div>

        <h2 className="text-6xl md:text-8xl font-extrabold text-gray-800 text-center my-8 font-space-grotesk">
          Industry Solutions
        </h2>

        {/* Bottom Row of Tags */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-4">
          {bottomTags.map((tag, index) => (
             <div key={index} className={`flex ${tag.position}`}>
                <Tag number={tag.number} text={tag.text} color={tag.color} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
