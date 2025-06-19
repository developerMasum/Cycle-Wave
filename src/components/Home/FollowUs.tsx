import { ChevronRightCircle, Facebook, Instagram, Twitter } from "lucide-react";

const FollowUs = () => {
  const Images = [
    "/follow-us-1.jpg",
    "/follow-us-2.jpg",
    "/follow-us-3.jpg",
    "/follow-us-4.jpg",
  ];
  const redirectUrl = "https://portfolio-masum-fullstack.vercel.app/";

  return (
    <div className="bg-accent py-16">
      <h3 className="uppercase pb-4 ms-60">Follow us @Cycle_Wave</h3>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-6 px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Images.map((item, idx) => (
            <a
              key={idx}
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full relative group cursor-pointer"
            >
              <img
                src={item}
                className="w-full aspect-square object-cover"
                alt={`Follow us image ${idx + 1}`}
              />
              <div className="w-full h-full bg-black/20 absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <Instagram className="text-white w-8 h-8" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4 items-start">
          <div className="flex flex-wrap gap-4">
            {/* Twitter Button */}
            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-6 py-2 border border-blue-500 text-white uppercase font-bold group overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">Twitter</span>
              <Twitter className="relative z-10 ml-2 transition-transform duration-500 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-blue-500 w-5 group-hover:w-full transition-all duration-500 z-0"></div>
            </a>

            {/* Facebook Button */}
            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-6 py-2 border border-blue-700 text-white uppercase font-bold group overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">Facebook</span>
              <Facebook className="relative z-10 ml-2 transition-transform duration-500 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-blue-700 w-5 group-hover:w-full transition-all duration-500 z-0"></div>
            </a>

            {/* Instagram Button */}
            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-6 py-2 border border-pink-500 text-white uppercase font-bold group overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">Instagram</span>
              <Instagram className="relative z-10 ml-2 transition-transform duration-500 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-pink-500 w-5 group-hover:w-full transition-all duration-500 z-0"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FollowUs;
