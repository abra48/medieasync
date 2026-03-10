'use client';

interface ReadOnlyBannerProps {
  show: boolean;
}

export default function ReadOnlyBanner({ show }: ReadOnlyBannerProps) {
  if (!show) return null;

  return (
    <div className="mb-4 flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
      <span className="text-lg">👁️</span>
      <div>
        <p className="text-sm font-semibold text-amber-400">Mode Pantau</p>
        <p className="text-xs text-amber-400/70">Hak modifikasi dikunci. Anda hanya bisa melihat data.</p>
      </div>
    </div>
  );
}
