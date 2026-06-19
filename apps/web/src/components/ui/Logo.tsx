import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="RepGST home">
      <span className="grid size-10 place-items-center rounded-2xl bg-indigo-600 text-sm font-black text-white shadow-sm shadow-indigo-600/30">
        RG
      </span>
      <span className="text-lg font-extrabold tracking-tight text-slate-950">RepGST</span>
    </Link>
  );
}
