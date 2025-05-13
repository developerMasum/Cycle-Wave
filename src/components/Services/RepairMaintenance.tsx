import ServiceCard from "./ServiceCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import AdditionalService from "./AdditionalService";
import { additionalServices, mainServices } from "./serviceData";

const RepairMaintenance = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mainServices.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            price={service.price}
            features={service.features}
            timeEstimate={service.timeEstimate}
            icon={service.icon}
            highlighted={service.highlighted}
          />
        ))}
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Additional Repair Services</CardTitle>
          <CardDescription>
            Individual services for specific needs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((item, index) => (
              <AdditionalService
                key={index}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default RepairMaintenance;
