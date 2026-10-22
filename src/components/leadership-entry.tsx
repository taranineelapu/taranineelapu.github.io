import { Leadership } from "@/data/leadership";

interface LeadershipEntryProps {
    leadership: Leadership;
}

export function LeadershipEntry({
    leadership,
}: LeadershipEntryProps) {
    return (
        <div className="grid grid-cols-4 gap-x-2">
            <div className="col-span-1">
                <p className="font-sans text-xs text-zinc-500">
                    {leadership.year}
                </p>
            </div>

            <div className="col-span-3">
                <h3 className="font-serif text-base text-zinc-800">
                    {leadership.role}
                </h3>

                <p className="font-sans text-sm text-zinc-600 mt-1">
                    {leadership.organization}
                </p>

                {leadership.description && (
                    <p className="font-serif text-sm leading-relaxed text-zinc-600 mt-3">
                        {leadership.description}
                    </p>
                )}
            </div>
        </div>
    );
}