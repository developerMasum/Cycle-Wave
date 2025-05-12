import { Wrench } from "lucide-react";
import ServiceCard from "./ServiceCard";

const RepairMaintenance = () => {
  const mainServices = [
    {
      title: "Basic Tune-Up",
      description: "Quick service to keep your bike running smoothly",
      price: 49,
      features: [
        "Safety check",
        "Brake adjustment",
        "Gear adjustment",
        "Tire inflation",
        "Chain lubrication",
      ],
      timeEstimate: "1 hour",
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: "Standard Service",
      description: "Comprehensive service for regular riders",
      price: 99,
      features: [
        "All Basic Tune-Up services",
        "Wheel truing",
        "Drivetrain cleaning",
        "Brake pad inspection",
        "Bearing adjustments",
        "Cable inspection",
      ],
      timeEstimate: "2-3 hours",
      highlighted: true,
      icon: <Wrench className="h-6 w-6" />,
    },
    {
      title: "Premium Overhaul",
      description: "Complete disassembly and rebuild",
      price: 99,
      features: [
        "All Standard Service items",
        "Full disassembly",
        "Deep clean of all components",
        "Bearing service",
        "Comprehensive lubrication",
        "Cable replacement",
        "Complete safety check",
      ],
      timeEstimate: "1-2 days",
      icon: <Wrench className="h-6 w-6" />,
    },
  ];
  return (
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
  );
};

export default RepairMaintenance;
