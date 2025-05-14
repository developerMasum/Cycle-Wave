export const productCategories = [
  "Mountain",
  "Road",
  "Hybrid",
  "BMX",
  "Electric",
] as const;
export const productFrameMaterial = [
  "Aluminum",
  "Carbon",
  "Steel",
  "Titanium",
] as const;

export type ProductCategory = (typeof productCategories)[number];
export type ProductFrameMaterial = (typeof productFrameMaterial)[number];
