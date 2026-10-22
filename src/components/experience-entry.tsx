import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-[72px_120px_1fr] gap-x-4 items-start">

      {/* Logo */}
      <div className="flex justify-center">
        <div className="w-12 h-12 rounded-xl border border-zinc-200 bg-white flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5">
          {experience.logoUrl && (
            <img
              src={experience.logoUrl}
              alt={`${experience.company} logo`}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* Date */}
      <span className="text-xs text-zinc-500 mt-1 whitespace-nowrap">
        {experience.date}
      </span>

      {/* Experience Details */}
      <div className="flex flex-col">
        <h3 className="text-sm font-serif">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              style={{ color: "#00674F" }}
              className="hover:opacity-75 transition-opacity"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            <span style={{ color: "#00674F" }}>{experience.company}</span>
          )}
          {" - "}
          {experience.title}
        </h3>

        {experience.advisor && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Advisor: {experience.advisor}
          </p>
        )}

        {experience.manager && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Manager: {experience.manager}
          </p>
        )}


        {experience.description && (
          <p className="text-sm text-zinc-500 leading-relaxed mt-2 whitespace-pre-line">
            {experience.description}
          </p>
        )}

      </div>
    </div>
  );
}