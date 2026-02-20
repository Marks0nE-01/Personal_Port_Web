import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes.
 * It uses clsx to handle conditional classes and tailwind-merge 
 * to ensure that conflicting Tailwind classes are resolved correctly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
