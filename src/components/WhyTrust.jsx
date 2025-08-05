import React from "react";
import { ShieldCheck, GraduationCap, BarChart, Users } from "lucide-react";
const trustPoints =[
    {icon:<ShieldCheck className="w-8 h-8 text-blue-600" />,
        title:"Trusted Brand",
        desc: "Over 34 years of legacy in shaping careers."
    },
    {
        icon:<GraduationCap className="w-8 h-8 text-blue-600" />,
        title:"Expert Faculty",
        desc:"Highly qualified & experienced teachers."
    },
    {
        icon:<BarChart className="w-8 h-8 text-blue-600" />,
        title:"Proven Results",
        desc:"Track record of top ranks in JEE & NEET."
    },
    {
        icon:<Users className="w-8 h-8 text-blue-600" />,
        title: "Massive Student Base",
        desc: "Mentored millions of aspirants across India."
    }];
const WhyTrust = () => {
  return (
    <section className="py-12 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-8 text-blue-700">
          Why Students Trust ALLEN
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trustPoints.map((point, i) => (
            <div key={i} className="text-center bg-blue-50 p-4 rounded shadow">
              <div className="flex justify-center mb-2">{point.icon}</div>
              <h3 className="font-semibold text-md mb-1">{point.title}</h3>
              <p className="text-sm text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;
