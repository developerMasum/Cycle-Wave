import { Wrench } from "lucide-react";

export const additionalServices = [
  { name: "Flat Repair", price: 15 },
  { name: "Brake Adjustment", price: 20 },
  { name: "Derailleur Adjustment", price: 30 },
  { name: "Wheel Truing", price: 35 },
  { name: "Bottom Bracket Service", price: 45 },
  { name: "Headset Service", price: 40 },
];

export const mainServices = [
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
