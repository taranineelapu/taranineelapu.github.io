export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  capstone?: string;
  capstoneUrl?: string;
  thesis?: string;
  thesisUrl?: string;
  relevant?: string;
  logoUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2024 - 2025",
    institution: "University of Wisconsin-Milwaukee",
    degree: "M.S. in Data Science",
    logoUrl: "/logos/uwm-logo.png",
    capstone: "Multimodal Feature Extraction & Recommendation System through cold start from short-form advertisement videos",
    capstoneUrl: "",
    relevant: "Machine Learning, Applied AI, Data Mining, Predictive Analytics, Image Processing",

  },
  {
    year: "2018 - 2022",
    institution: "Amrita Vishwa Vidyapeetham",
    degree: "B.Tech. in Mechanical Engineering",
    logoUrl: "/logos/amrita-logo.jpg",
    thesis: "Influence of Wake Splitter Plate on Flow Over a Triangular Cylinder at a Low Reynolds Number",
    thesisUrl: "https://www.amrita.edu/publication/influence-of-wake-splitter-plate-on-flow-over-a-triangular-cylinder-at-a-low-reynolds-number-a-numerical-study/",
    relevant: "Advanced Probability and Statistics, Operations Research",
  },
];
