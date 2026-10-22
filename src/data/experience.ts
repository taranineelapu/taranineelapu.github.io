export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  /** Path to logo image in public/, e.g. /logos/ibm.png */
  logoUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Feb 2025 - present",
    title: "Data Engineer",
    company: "Sabhya Technologies",
    description:
      "Built an AI-powered product recommendation chatbot to automate product search and inventory check in manufacturing ERP workflows.",
    companyUrl: "https://sabhyatech.com/",
    logoUrl: "/logos/sabhya-logo.png",
  },
  {
    date: "Mar 2025 - Dec 2025",
    title: "Data Analyst",
    company: "UW-Milwaukee Marketing Department",
    description:
      "• Developed and automated end-to-end data pipelines to process financial, sales, and marketing KPIs for Power BI reporting.\n• Applied statistical analysis and machine learning to identify customer behavior patterns, extract actionable insights, and optimize operations.",
    companyUrl: "https://uwm.edu/marcomm/",
    logoUrl: "/logos/uwm-logo.png",
  },
  {
    date: "Feb 2025 - Dec 2025",
    title: "Statistics Tutor",
    company: "University of Wisconsin-Milwaukee",
    description:
      "Course - Statistical Modeling in Business Analytics\n• Taught statistical modeling concepts (hypothesis test, causal inference, regression models) & implementing them using R programming language modules and packages.",
    companyUrl: "https://uwm.edu/",
    logoUrl: "/logos/uwm-logo.png",
  },
  {
    date: "May 2022 - Dec 2023",
    title: "Data Engineer",
    company: "Cognizant Technology Solutions",
    description:
      "Built multiple ETL data pipelines using PySpark, Spark SQL, and Azure Data Factory on Azure Databricks & Azure Cloud to process daily sales data into Snowflake and Power BI dashboards for Zoetis Inc.",
    logoUrl: "/logos/cognizant-logo.png",
    companyUrl: "https://www.cognizant.com/us/en",
  },
  {
    date: "Jan 2022 - Apr 2022",
    title: "Data Engineer Intern",
    company: "Cognizant Technology Solutions",
    description:
      "• Built end-to-end data pipelines using PySpark, and Azure Databricks to process insurance billing data.\n• Developed Power BI dashboards with Power Query and DAX to track customer renewal KPIs.",
    companyUrl: "https://www.cognizant.com/us/en",
    logoUrl: "/logos/cognizant-logo.png",
  },
];