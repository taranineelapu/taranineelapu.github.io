export interface AboutMe {
  name: string;
  title: string;
  //institution: string;
  description: string;
  email: string;
  location?: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  kaggleUrl?: string;
  googleScholarUrl?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  //institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Tarani Rupa Neelapu",
  title: "Data Engineer & Business Intelligence",
  //institution: "UW-Milwaukee",
  location: "Seattle, WA",
  // Note that links work in the description
  description:
    "Hi there! I'm a data engineer",
  email: "neelaputarani@gmail.com",
  imageUrl:
    "/logos/self-picture.jpeg",
  blogUrl: "https://medium.com/@taranineelapu",
  cvUrl: "https://",
  githubUsername: "taranineelapu",
  linkedinUsername: "taranineelapu",
  //kaggleUrl: "https://www.kaggle.com/taranirupaneelapu",
  googleScholarUrl: "https://scholar.google.com/citations?user=xtAHnYQAAAAJ&hl",
  //institutionUrl: "https://www.uwm.edu",
  // altName: "",
  secretDescription: "Building 🥑༘˚⋆𐙚",
};
//Science meets strategy