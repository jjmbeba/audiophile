import { type ClassValue, clsx } from "clsx"
import path from "path"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}