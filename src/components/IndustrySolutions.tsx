import React from 'react';

export default function IndustrySolutions() {
  const tags = [
    { number: "01", text: "Generative AI", color: "bg-pastel-purple-bg" },
    { number: "02", text: "Natural Language Processing", color: "bg-pastel-green-bg" },
    { number: "03", text: "Machine Learning", color: "bg-pastel-blue-bg" },
    { number: "04", text: "Data Science", color: "bg-pastel-yellow-bg" },
    { number: "05", text: "Computer Vision", color: "bg-pastel-pink-bg" },
    { number: "06", text: "Responsible AI", color: "bg-pastel-purple-bg" },
    { number: "07", text: "Deep Learning", color: "bg-pastel-green-bg" },
    { number: "08", text: "AI Ethics", color: "bg-pastel-blue-bg" },
    { number: "09", text: "Neural Networks", color: "bg-pastel-yellow-bg" },
    { number: "10", text: "Cloud Computing", color: "bg-pastel-pink-bg" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-extrabold text-gray-800 text-center mb-16 font-space-grotesk">
          Industry Solutions
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {tags.map((tag, index) => (
             tag.text && (
                <div
                  key={index}
                  className={`${tag.color} text-gray-800 px-6 py-3 rounded-full font-bold shadow-sm hover:shadow-md transition-shadow cursor-pointer text-base`}
                >
                  <span className="font-normal text-gray-500 mr-2">{tag.number}</span>{tag.text}
                </div>
             )
          ))}
        </div>
      </div>
    </section>
  );
}

    