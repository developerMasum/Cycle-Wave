import { Button } from "../ui/button";
import { Link } from "lucide-react";

const ServiceContact = () => {
  return (
    <div className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Visit Our Service Center</h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Our professional technicians are ready to help with all your cycling
        needs. Drop in or schedule an appointment for priority service.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to={"/contact"}>
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceContact;
