const courseData = [
  {
    type: "RECORDED",
    badge: "SCHOLARSHIP ELIGIBLE",
    title: "JEE Enthusiast Self Study Plus Course",
    target: "Target 2026",
    points: [
      "Latest recordings covering full syllabus",
      "Digital study material including books, RACE & more",
      "32 (part+ full) syllabus tests",
    ],
    price: "₹16,900",
    taxes: "+ Taxes applicable",
    link: "#",
  },
  {
    type: "LIVE",
    badge: "UPTO 90% SCHOLARSHIP",
    title: "JEE Leader Online Course",
    target: "Target 2026",
    points: [
      "Live classes from ALLEN Kota's top faculty",
      "Upto 35 online tests",
      "24/7 doubt support, academic guidance & more",
    ],
    oldPrice: "₹93,500",
    price: "₹89,000",
    taxes: "+ Taxes applicable",
    link: "#",
  },
];

const Courses = () => {
  return (
    <section className="bg-blue-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {courseData.map((course, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow border border-gray-100"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold px-2 py-1 bg-gray-900 text-white rounded">
                {course.type}
              </span>
              <span className="text-xs font-semibold px-2 py-1 bg-orange-500 text-white rounded">
                {course.badge}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {course.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3">{course.target}</p>
            <ul className="text-sm text-gray-700 space-y-1 mb-4 list-disc pl-4">
              {course.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="text-lg font-bold text-gray-800">
              {course.oldPrice && (
                <span className="line-through text-gray-400 mr-2 text-sm">
                  {course.oldPrice}
                </span>
              )}
              {course.price}
              <span className="text-sm font-normal ml-1 text-gray-600">
                {course.taxes}
              </span>
            </div>

            <a
              href={course.link}
              className="text-blue-600 text-sm font-medium mt-2 inline-block"
            >
              Know more →
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium">
          View All Courses
        </button>
      </div>
    </section>
  );
};

export default Courses;
