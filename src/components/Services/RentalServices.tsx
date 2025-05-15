import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import GroupAndEventRental from "./GroupAndEventRental";
import RentalOption from "./RentalOption";
import { Calendar, Clock, RotateCcw, Truck } from "lucide-react";
import { Separator } from "../ui/separator";

const rentalOptions = [
  {
    category: "Mountain Bikes",
    hourlyRate: 15,
    dailyRate: 45,
    weeklyRate: 180,
  },
  { category: "Road Bikes", hourlyRate: 18, dailyRate: 55, weeklyRate: 220 },
  {
    category: "Electric Bikes",
    hourlyRate: 25,
    dailyRate: 75,
    weeklyRate: 300,
  },
  { category: "Hybrid Bikes", hourlyRate: 12, dailyRate: 40, weeklyRate: 160 },
];

const rentalInfos = [
  {
    icon: <Calendar className="h-5 w-5" />,
    title: "Reservation Policy",
    description:
      "24-hour advance booking recommended. ID and credit card required.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Hours",
    description:
      "Rentals available 9am-6pm daily. Late returns subject to additional fees.",
  },
  {
    icon: <RotateCcw className="h-5 w-5" />,
    title: "Included Accessories",
    description:
      "Helmet, lock, and basic repair kit included with all rentals.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Delivery",
    description:
      "Bike delivery available within 10 miles for an additional fee.",
  },
];

const RentalInfoItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 pt-1 text-primary">{icon}</div>
      <div className="ml-3">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const RentalServices = () => {
  return (
    <>
      {/* Rental Options & Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Rental Options */}
        <Card>
          <CardHeader>
            <CardTitle>Rental Options</CardTitle>
            <CardDescription>
              Quality bikes for your adventures, available by hour, day, or week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rentalOptions.map((option, idx) => (
                <div key={option.category}>
                  <RentalOption {...option} />
                  {idx !== rentalOptions.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Check Availability</Button>
          </CardFooter>
        </Card>

        {/* Rental Info */}
        <Card>
          <CardHeader>
            <CardTitle>Rental Information</CardTitle>
            <CardDescription>
              Everything you need to know about our rental services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rentalInfos.map((info, idx) => (
                <RentalInfoItem key={idx} {...info} />
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-gray-500 italic">
              All rentals include basic orientation and fitting.
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Group & Event Rentals */}
      <GroupAndEventRental />
    </>
  );
};

export default RentalServices;
