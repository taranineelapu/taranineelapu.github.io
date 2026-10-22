import { Award } from "@/data/awards";

interface AwardEntryProps {
    award: Award;
}

export function AwardEntry({
    award,
}: AwardEntryProps) {
    return (
        <div className="grid grid-cols-4 gap-x-2">
            <div className="col-span-1">
                <p className="font-sans text-xs text-zinc-500">
                    {award.year}
                </p>
            </div>

            <div className="col-span-3">
                <h3 className="font-serif text-base text-zinc-800">
                    {award.title}
                </h3>

                {award.organization && (
                    <p className="font-sans text-sm text-zinc-600 mt-1">
                        {award.organization}
                    </p>
                )}

                {award.description && (
                    <p className="font-serif text-sm leading-relaxed text-zinc-600 mt-3">
                        {award.description}
                    </p>
                )}
            </div>
        </div>
    );
}