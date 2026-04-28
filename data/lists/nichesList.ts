import { MousePointer, TrendingUp, Search, Rocket } from "lucide-react";

export interface Niche {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  label: string;
  accent: string;
  tag: string;
  icon: any;
}

export const niches: Niche[] = [
  {
    id: "service_01",
    title: "Generic Service 1",
    subtitle: "CATEGORY_A",
    desc: "This is a generic description for the first service. It outlines the key benefits and features of what this service offers.",
    label: "Explore Service 1",
    accent: "from-emerald-500 to-teal-500",
    tag: "FEATURE_A",
    icon: MousePointer,
  },
  {
    id: "service_02",
    title: "Generic Service 2",
    subtitle: "CATEGORY_B",
    desc: "This description highlights the value proposition of the second generic service, focusing on its core functionalities.",
    label: "Discover Service 2",
    accent: "from-emerald-400 to-blue-600",
    tag: "FEATURE_B",
    icon: TrendingUp,
  },
  {
    id: "service_03",
    title: "Generic Service 3",
    subtitle: "CATEGORY_C",
    desc: "A detailed explanation of the third service, emphasizing its unique aspects and how it benefits the user.",
    label: "Learn More",
    accent: "from-emerald-600 to-indigo-800",
    tag: "FEATURE_C",
    icon: Search,
  },
  {
    id: "service_04",
    title: "Generic Service 4",
    subtitle: "CATEGORY_D",
    desc: "This final service description provides an overview of a comprehensive offering, suitable for various applications.",
    label: "Get Started",
    accent: "from-zinc-700 to-emerald-800",
    tag: "FEATURE_D",
    icon: Rocket,
  },
];
