const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-sakram-gray py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={`${BASE}/ispirt-logo.svg`}
            alt="iSPIRT"
            width={64}
            height={28}
          />
          <span className="text-sm text-sakram-text/60">
            An iSPIRT Initiative
          </span>
        </div>

        <p className="text-xs text-sakram-text/50">
          &copy; {new Date().getFullYear()} Sakram. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
