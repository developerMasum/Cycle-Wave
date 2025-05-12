import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const WhereToWork = () => {
  return (
    <div className="grid md:grid-cols-2 py-10 md:py-0 bg-foreground">
      <div className="space-y-6 px-8 text-accent max-w-xl md:ml-auto flex flex-col justify-center">
        <h2 className="uppercase">
          Where to?
          <br />
          <span className="text-primary">work</span>
        </h2>
        <h6>Performance Meets Precision.</h6>
        <p>
          Conquer your daily grind with bikes designed to deliver power, style,
          and unmatched comfort. Whether you're commuting through the city
          streets or exploring new trails, our collection offers the perfect
          ride for every journey. Built with advanced technology and crafted for
          durability, these bikes redefine what it means to work hard and ride
          harder.
        </p>
        <div className="space-x-2">
          <Link to={"/shop"}>
            <Button
              variant={"ghost"}
              className="border border-primary hover:!bg-transparent hover:text-accent"
            >
              Discover Now
            </Button>
          </Link>
          <Link to={"/shop"}>
            <Button
              className="hover:!bg-transparent hover:text-accent"
              variant={"ghost"}
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
      <img
        className="object-cover hidden md:block ml-auto w-[90%] xl:w-[80%]"
        src="/where-to-work-banner.png"
        alt="Where to work banner"
      />
    </div>
  );
};

export default WhereToWork;
