import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent } from "../ui/card";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const feedbacks = [
  {
    name: "Maliha Rahman",
    role: "Software Engineer, Dhaka",
    rating: 5,
    comment:
      "Super smooth experience from browsing to delivery. The cycle looks premium and rides like a dream!",
    image:
      "https://res.cloudinary.com/dvqr7gds8/image/upload/v1715828636/xwgrlx6fq4kxz7oanfxt.png",
  },
  {
    name: "Farhan Adnan",
    role: "University Student, Khulna",
    rating: 4,
    comment:
      "I use my bike every day to go to class. Very affordable and reliable. Great service from the team!",
    image:
      "https://portfolio-masum-fullstack.vercel.app/assets/me2-313232ed.jpg",
  },
  {
    name: "Fatema Jahan",
    role: "Housewife, Barishal",
    rating: 5,
    comment:
      "Bought a cycle for my daughter. Excellent quality and friendly customer service. She’s loving it!",
    image:
      "https://res.cloudinary.com/dvqr7gds8/image/upload/v1715828621/n2dvvl6mj9ikfdueesvk.png",
  },
  {
    name: "Mehedi Hasan",
    role: "Freelancer, Rangpur",
    rating: 4,
    comment:
      "Wasn’t sure at first, but this site really impressed me. Fast delivery and a solid, stylish bike.",
    image:
      "https://res.cloudinary.com/dvqr7gds8/image/upload/v1714633517/fcb1b4ft5zgkexuf2drd.png",
  },
];

const Feedback = () => {
  return (
    <section className="py-8">
      {/* Heading */}
      <div className="flex justify-between items-end relative mb-6">
        <h1 className="uppercase text-outline text-[70px] md:text-[90px] absolute top-0">
          Reviews
        </h1>
        <h3 className="uppercase pt-14 relative z-10">
          What Our <br />
          <span className="text-primary">Customers Say</span>
        </h3>
        <div className="space-x-2 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full fb-button-prev-review hover:bg-primary hover:text-white"
          >
            <ArrowLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full fb-button-next-review hover:bg-primary hover:text-white"
          >
            <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".fb-button-next-review",
          prevEl: ".fb-button-prev-review",
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {feedbacks.map((fb, idx) => (
          <SwiperSlide key={idx} className="min-h-full">
            <Card className="p-4 h-full">
              <CardContent className="flex flex-col gap-4 items-center text-center">
                <img
                  src={fb.image}
                  alt={fb.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h4 className="font-semibold text-lg">{fb.name}</h4>
                <p className="text-sm text-muted-foreground">{fb.role}</p>
                <div className="flex gap-1 text-yellow-500">
                  {Array.from({ length: fb.rating }).map((_, starIdx) => (
                    <Star key={starIdx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{fb.comment}"
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Feedback;
