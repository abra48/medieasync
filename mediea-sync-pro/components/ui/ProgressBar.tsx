'use client';

interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  color?: string;
  showPercent?: boolean;
}

export default function ProgressBar({ value, max = 100, label, color = 'bg-[#10b981]', showPercent = true }: ProgressBarProps) {
  const percent = Math.min(Math.round((value / max) * 100), 100);

  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-xs text-[#8c8c8e] font-medium">{label}</span>}
          {showPercent && <span className="text-xs text-[#10b981] font-semibold">{percent}%</span>}
        </div>
      )}
      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-700 ease-out`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
