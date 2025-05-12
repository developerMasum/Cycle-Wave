import { useState, type ReactNode } from "react";

import {
  MountainIcon,
  RouteIcon,
  BoltIcon,
  BikeIcon,
  LayersIcon,
  HardDriveIcon,
  CircleDotIcon,
  CpuIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";

// ---------------- Types ----------------
export const productCategories = [
  "Mountain",
  "Road",
  "Hybrid",
  "BMX",
  "Electric",
  "Cycle", // 👈 added fake demo category
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const productFrameMaterial = [
  "Aluminum",
  "Carbon",
  "Steel",
  "Titanium",
] as const;

export type ProductFrameMaterial = (typeof productFrameMaterial)[number];

// ---------------- Icons ----------------
const categoryIcons: Record<ProductCategory, ReactNode> = {
  Mountain: <MountainIcon className="size-6 sm:size-8" />,
  Road: <RouteIcon className="size-6 sm:size-8" />,
  Hybrid: <BikeIcon className="size-6 sm:size-8" />,
  BMX: <BikeIcon className="size-6 sm:size-8" />,
  Electric: <BoltIcon className="size-6 sm:size-8" />,
  Cycle: <BikeIcon className="size-6 sm:size-8" />, // 👈 you can assign any icon you want
};

const frameMaterialIcons: Record<ProductFrameMaterial, ReactNode> = {
  Aluminum: <HardDriveIcon className="size-6 sm:size-8" />,
  Carbon: <CircleDotIcon className="size-6 sm:size-8" />,
  Steel: <LayersIcon className="size-6 sm:size-8" />,
  Titanium: <CpuIcon className="size-6 sm:size-8 " />,
};

// ---------------- Component ----------------
export default function FeaturedCategories() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-8 space-y-6">
      <h3 className="uppercase relative">
        Shop by <br />
        <span className="text-primary">Category</span>
      </h3>
      <LayoutGroup>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence>
            {productCategories.map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/shop?category=${category}`}>
                  <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300  dark:shadow-white/20 py-2 sm:py-6">
                    <CardContent className="flex flex-col items-center justify-center py-6">
                      {categoryIcons[category]}
                      <span className="mt-3 text-base sm:text-lg font-semibold">
                        {category}
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}

            {showMore &&
              productFrameMaterial.map((material) => (
                <motion.div
                  key={material}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link key={material} to={`/shop?frameMaterial=${material}`}>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300  dark:shadow-white/20 py-2 sm:py-6">
                      <CardContent className="flex flex-col items-center justify-center py-6">
                        {frameMaterialIcons[material]}
                        <span className="mt-3 text-base sm:text-lg font-semibold">
                          {material}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                onClick={() => setShowMore((prev) => !prev)}
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300  dark:shadow-white/20 py-2 sm:py-6"
              >
                <CardContent className="flex flex-col items-center justify-center py-6">
                  {showMore ? (
                    <ChevronUp className="size-6 sm:size-8" />
                  ) : (
                    <ChevronDown className="size-6 sm:size-8" />
                  )}
                  <span className="mt-3 text-base sm:text-lg font-semibold">
                    {showMore ? "See Less" : "See More"}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </section>
  );
}
