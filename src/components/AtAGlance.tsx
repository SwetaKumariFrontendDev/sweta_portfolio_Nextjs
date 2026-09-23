import Link from "next/link";
import { profile } from "@/data/portfolio";

type Props = {
  roleCount?: number;
  className?: string;
  showCta?: boolean;
};

export default function AtAGlance({
  roleCount = 5,
  className = "",
  showCta = true,
}: Props) {
  return (
    <div
      className={`rounded-sm border border-slate-600/80 bg-[#0c1222] p-6 ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-netflix-red">
        At a glance
      </p>
      <p className="mt-3 font-display text-2xl leading-tight text-white">{profile.name}</p>
      <p className="mt-2 text-sm text-white/65">{profile.tagline}</p>
      <p className="mt-1 text-sm text-white/50">{profile.location}</p>
      <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-white/75">
        <li>
          <span className="block text-[10px] uppercase tracking-wide text-white/40">Focus</span>
          {profile.focus}
        </li>
        <li>
          <span className="block text-[10px] uppercase tracking-wide text-white/40">Roles</span>
          {roleCount} positions in timeline
        </li>
      </ul>
      {showCta && (
        <Link
          href="#contact"
          className="mt-6 inline-block w-full rounded bg-netflix-red py-2.5 text-center text-sm font-bold text-white transition hover:bg-red-600"
        >
          Get in touch
        </Link>
      )}
    </div>
  );
}
