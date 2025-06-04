import { Globe } from "lucide-react";
import React from "react";

export interface Service {
  slug: string;
  title: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  // Add more fields as needed
}

export const services: Service[] = [
  {
    slug: "international-wholesale-voip",
    title: "International Wholesale VoIP Termination",
    icon: <Globe className="h-10 w-10"/>
    ,description: "High-quality voice termination services with global coverage and competitive rates for carriers and service providers.",
    color: "from-teal-500 to-blue-500"
  },
  // Add all other services with slugs...
];