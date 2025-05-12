import type { ReactNode } from "react";

export type TServiceType = {
  title: string;
  description: string;
  price: number;
  features: string[];
  icon: ReactNode;
  timeEstimate: string;
  highlighted?: boolean;
};
