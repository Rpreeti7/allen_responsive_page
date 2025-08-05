import React from "react";

const testimonials = [
  {
    text: "ALLEN's Online Test Series played a crucial role in my JEE success. The tests mirrored JEE's difficulty and the Study Performance Report helped me track my strengths & weaknesses. I recommend this test series to all JEE aspirants.",
  },
  {
    text: "ALLEN's Online Test Series curriculum was excellent & covered every important JEE topic. For areas where I needed improvement, I used Custom Test Papers. The Improvement Book also helped me track and correct all my mistakes.",
  },
  {
    text: "I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Courses. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!",
  },
  {
    text: "ALLEN offers India’s best faculties and resources designed for online learning. I relied heavily on the Custom Test Papers & video solutions.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#F4F7FE] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="text-[#0070F0]">JEE Coaching</span> by ALLEN is loved by all students
        </h2>

        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
            >
              <span className="text-5xl text-blue-500 leading-none mb-4">“</span>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
