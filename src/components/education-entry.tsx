
import Image from "next/image";
import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-[64px_minmax(0,1fr)] gap-x-4 mb-2">

        {/* Logo */}
        <div className="flex items-start justify-center">
          {education.logoUrl && (
            <div className="w-16 h-16 rounded-2xl border border-zinc-200 bg-white flex items-center justify-center p-2">
              <Image
                src={education.logoUrl}
                alt={`${education.institution} logo`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          )}
        </div>

        {/* Education details */}
        <div className="grid grid-cols-4 gap-x-2 min-w-0">

          <span className="text-xs text-zinc-500 mt-1">
            {education.year}
          </span>

          <div className="col-span-3 min-w-0">

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

            {/* Advisor */}
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
