const data = [
  {
    title: "Hybrid",
    points: [
      "Combines features of road and mountain bikes for versatile performance on various surfaces.",
      "Ideal for city commuting and light trail adventures with comfort and ease.",
    ],
  },
  {
    title: "BMX",
    points: [
      "Compact and strong frames built for tricks, stunts, and skate park riding.",
      "Lightweight design with excellent maneuverability for freestyle riders.",
    ],
  },
  {
    title: "Gravel",
    points: [
      "Engineered for mixed terrain, from pavement to gravel paths and dirt roads.",
      "Durable frames and wider tires offer stability and comfort on long journeys.",
    ],
  },
  {
    title: "Folding",
    points: [
      "Space-saving design allows easy storage and transport, perfect for urban dwellers.",
      "Quick folding mechanisms make commuting and traveling more convenient.",
    ],
  },
  {
    title: "Cruiser",
    points: [
      "Classic style bikes with wide seats and handlebars for relaxed, beachside rides.",
      "Focuses on comfort and leisure, ideal for short, scenic routes.",
    ],
  },
];

const WhyRideWithUs = () => {
  return (
    <div className="grid md:grid-cols-2 pt-10 xl:pt-20">
      <img
        className="w-[90%] xl:w-[80%] object-cover hidden md:block"
        src="/why-ride-banner.png"
        alt=""
      />
      <div className="space-y-6 mt-10 px-8 pb-8 ">
        <h2 className="uppercase">
          Why Ride <span className="text-primary">With Us?</span>
        </h2>
        <div className="space-y-6">
          {data.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-5 h-0.5 bg-primary mt-4.5"></div>
              <div className="space-y-2">
                <h4 className="text-primary font-semibold">{item.title}</h4>
                <ul className="space-y-2 text-foreground">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyRideWithUs;
