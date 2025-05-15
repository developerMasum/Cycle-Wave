import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
const GroupDiscountItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center">
      <Check className="h-4 w-4 text-green-500 mr-2" />
      <span>{text}</span>
    </li>
  );
};
const GroupAndEventRental = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Group & Event Rentals</CardTitle>
        <CardDescription>Special rates for groups and events</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Planning a company outing, team building event, or group ride? We
          offer special rates for groups of 5 or more bikes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Group Discounts */}
          <div className="bg-accent p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Group Discounts</h3>
            <ul className="space-y-2">
              <GroupDiscountItem text="5-9 bikes: 10% off standard rates" />
              <GroupDiscountItem text="10-19 bikes: 15% off standard rates" />
              <GroupDiscountItem text="20+ bikes: 20% off standard rates" />
            </ul>
          </div>

          {/* Event Services */}
          <div className="bg-accent p-4 rounded-lg">
            <h3 className="font-medium text-lg mb-2">Event Services</h3>
            <ul className="space-y-2">
              <GroupDiscountItem text="On-site delivery and pickup" />
              <GroupDiscountItem text="Event support staff available" />
              <GroupDiscountItem text="Custom routes and guided tours" />
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full md:w-auto">Request Group Quote</Button>
      </CardFooter>
    </Card>
  );
};

export default GroupAndEventRental;
