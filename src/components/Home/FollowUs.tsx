import { Facebook, Instagram, Twitter } from "lucide-react";

const FollowUs = () => {
  const Images = [
    "/follow-us-1.jpg",
    "/follow-us-2.jpg",
    "/follow-us-3.jpg",
    "/follow-us-4.jpg",
  ];
  return (
    <div className="bg-accent py-16 ">
      <h3 className="uppercase pb-4 ms-60">Follow us @Cycle_craze</h3>
      <section className="flex justify-between items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {Images.map((item, idx) => (
            <div
              key={idx}
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
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-2 border-e-blue-500 border-2 p-1">
            <Facebook /> <span> Facebook</span>
          </p>
          <p className="flex items-center gap-2 border-e-green-500  border-2 p-1 ">
            <Twitter /> <span> Twitter</span>
          </p>
          <p className="flex items-center gap-2 border-e-red-500  border-2 p-1">
            <Instagram /> <span> Instagram</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default FollowUs;
