'use client';

import { Role } from '@/lib/types';

interface RoleBadgeProps {
  role: Role | 'semua';
  size?: 'sm' | 'md';
}

const roleConfig: Record<string, { label: string; bg: string; text: string }> = {
  ketua: { label: '👑 KETUA', bg: 'bg-green-500/10', text: 'text-green-400' },
  sekretaris: { label: '✒️ SEKRETARIS', bg: 'bg-blue-500/10', text: 'text-blue-400' },
  bendahara: { label: '👛 BENDAHARA', bg: 'bg-amber-500/10', text: 'text-amber-400' },
  anggota: { label: '👤 ANGGOTA', bg: 'bg-purple-500/10', text: 'text-purple-400' },
  semua: { label: '🌐 SEMUA', bg: 'bg-[#10b981]/10', text: 'text-[#10b981]' },
};

export default function RoleBadge({ role, size = 'sm' }: RoleBadgeProps) {
  const config = roleConfig[role] || roleConfig.semua;
  const sizeClasses = size === 'sm' ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1';

  return (
    <span className={`inline-flex items-center gap-1 rounded-full font-semibold tracking-wide ${config.bg} ${config.text} ${sizeClasses}`}>
      {config.label}
    </span>
  );
}
