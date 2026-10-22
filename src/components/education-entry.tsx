import Image from "next/image";
import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-[56px_1fr] gap-x-4 mb-2">

        {/* Logo */}
        <div className="flex items-start justify-center">
          {education.logoUrl && (
            <Image
              src={education.logoUrl}
              alt={`${education.institution} logo`}
              width={48}
              height={48}
              className="object-contain rounded-lg"
            />
          )}
        </div>

        {/* Existing layout */}
        <div className="grid grid-cols-4 gap-x-2">

          <span className="text-xs text-zinc-500 mt-1">
            {education.year}
          </span>

          <div className="col-span-3">

            <h3 className="text-base mb-1 font-serif">
              {education.institution}
            </h3>

            <p className="text-sm text-zinc-600">
              {education.degree}
            </p>

            {/* Capstone */}
            {education.capstone && (
              <p className="text-sm text-zinc-500 mt-2 italic">
                Capstone:{" "}
                {education.capstoneUrl ? (
                  <a
                    href={education.capstoneUrl}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {education.capstone}
                  </a>
                ) : (
                  education.capstone
                )}
              </p>
            )}

            {/* Thesis */}
            {education.thesis && (
              <p className="text-sm text-zinc-500 mt-2 italic">
                Thesis:{" "}
                {education.thesisUrl ? (
                  <a
                    href={education.thesisUrl}
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {education.thesis}
                  </a>
                ) : (
                  education.thesis
                )}
              </p>
            )}

            {/* Relevant coursework */}
            {education.relevant && (
              <p className="text-sm text-zinc-500 mt-2 italic">
                Relevant: {education.relevant}
              </p>
            )}

            {education.advisor && (
              <p className="text-sm text-zinc-500 mt-2 italic">
                Advisor: {education.advisor}
              </p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}