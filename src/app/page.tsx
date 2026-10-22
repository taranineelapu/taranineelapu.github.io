import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";

import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";

import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";

import { LeadershipEntry } from "@/components/leadership-entry";
import { leadershipData } from "@/data/leadership";

import { AwardEntry } from "@/components/award-entry";
import { awardsData } from "@/data/awards";

import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";

import { sectionOrder, Section } from "@/data/section-order";

import { NeuralBg } from "@/components/neural-bg";

export default function Home() {
  return (
    <div className="min-h-screen relative">

      {/* Neural background */}
      <NeuralBg />

      {/* Portfolio content */}
      <div className="relative z-10">
        <div className="max-w-screen-lg mx-auto px-8 py-24">

          {/* Main layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2">

            {/* Left column */}
            <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
              <div className="md:sticky top-12 space-y-8">
                <ProfileSection aboutMe={aboutMe} />
              </div>
            </div>

            {/* Right column */}
            <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-24">

              {/* About */}
              {aboutMe.description && (
                <section>
                  <p
                    className="font-serif text-sm leading-relaxed text-zinc-700 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600"
                    dangerouslySetInnerHTML={{
                      __html: aboutMe.description,
                    }}
                  />
                </section>
              )}

              {/* Portfolio sections */}
              {sectionOrder.map((sectionName) => {
                switch (sectionName) {

                  /* Education */
                  case Section.Education:
                    return (
                      educationData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className="font-serif text-zinc-700 mb-12 tracking-wide uppercase">
                            Education
                          </h2>

                          <div className="space-y-12">
                            {educationData.map((education, index) => (
                              <EducationEntry
                                key={index}
                                education={education}
                              />
                            ))}
                          </div>
                        </section>
                      )
                    );

                  /* Experience */
                  case Section.Experience:
                    return (
                      experienceData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                            Experience
                          </h2>

                          <div className="space-y-12">
                            {experienceData.map((experience, index) => (
                              <ExperienceEntry
                                key={index}
                                experience={experience}
                              />
                            ))}
                          </div>
                        </section>
                      )
                    );

                  /* Projects */
                  case Section.Portfolio:
                    return (
                      portfolioData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                            Projects
                          </h2>

                          <div className="space-y-12">
                            {portfolioData.map((portfolio, index) => (
                              <PortfolioEntry
                                key={index}
                                portfolio={portfolio}
                              />
                            ))}
                          </div>
                        </section>
                      )
                    );

                  /* Leadership & Involvement */
                  case Section.Leadership:
                    return (
                      leadershipData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                            Leadership & Involvement
                          </h2>

                          <div className="space-y-12">
                            {leadershipData.map((leadership, index) => (
                              <LeadershipEntry
                                key={index}
                                leadership={leadership}
                              />
                            ))}
                          </div>
                        </section>
                      )
                    );

                  /* Awards */
                  case Section.Awards:
                    return (
                      awardsData.length > 0 && (
                        <section key={sectionName}>
                          <h2 className="font-serif text-md mb-12 tracking-wide uppercase">
                            Awards
                          </h2>

                          <div className="space-y-12">
                            {awardsData.map((award, index) => (
                              <AwardEntry
                                key={index}
                                award={award}
                              />
                            ))}
                          </div>
                        </section>
                      )
                    );

                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}