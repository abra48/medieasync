'use client';

import { useState } from 'react';
import { useAppContext } from '@/context/AppContext';
import ReadOnlyBanner from '@/components/ui/ReadOnlyBanner';
import { UserPlus, Trash2, Crown, PenTool, Coins, User, Loader2 } from 'lucide-react';
import { Role } from '@/lib/types';

const roleIcons: Record<Role, React.ReactNode> = {
  ketua: <Crown size={14} className="text-green-400" />,
  sekretaris: <PenTool size={14} className="text-blue-400" />,
  bendahara: <Coins size={14} className="text-amber-400" />,
  anggota: <User size={14} className="text-purple-400" />,
};

const roleColors: Record<Role, string> = {
  ketua: 'bg-green-500/10 text-green-400 border-green-500/20',
  sekretaris: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  bendahara: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  anggota: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
};

export default function ScanModal() {
  const { currentRole, members, membersLoading, addMember, deleteMember } = useAppContext();
  const isReadOnly = currentRole !== 'ketua';
  const [name, setName] = useState('');
  const [role, setRole] = useState<Role>('anggota');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitting(true);
    await addMember(name.trim(), role);
    setName('');
    setRole('anggota');
    setSubmitting(false);
  };

  return (
    <div>
      <ReadOnlyBanner show={isReadOnly} />

      {!isReadOnly && (
        <form onSubmit={handleSubmit} className="mb-6 rounded-xl bg-white/5 border border-white/5 p-4">
          <h3 className="text-sm font-semibold text-[#fafafa] mb-3 flex items-center gap-2">
            <UserPlus size={16} className="text-[#10b981]" />
            Tambah Anggota Baru
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama lengkap..."
              className="flex-1 rounded-lg bg-[#1e252b] border border-white/10 px-3 py-2 text-sm text-[#fafafa] placeholder:text-[#8c8c8e]/50 focus:outline-none focus:border-[#10b981]/50"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as Role)}
              className="rounded-lg bg-[#1e252b] border border-white/10 px-3 py-2 text-sm text-[#fafafa] focus:outline-none focus:border-[#10b981]/50"
            >
              <option value="anggota">Anggota</option>
              <option value="ketua">Ketua</option>
              <option value="sekretaris">Sekretaris</option>
              <option value="bendahara">Bendahara</option>
            </select>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-lg bg-[#10b981] px-4 py-2 text-sm font-semibold text-black hover:bg-[#34d399] transition-colors shrink-0 disabled:opacity-50 flex items-center gap-2"
            >
              {submitting ? <Loader2 size={14} className="animate-spin" /> : null}
              Tambah
            </button>
          </div>
        </form>
      )}

      <div className="space-y-2">
        <h3 className="text-xs font-semibold text-[#8c8c8e] uppercase tracking-wider mb-3">
          Daftar Anggota ({members.length})
        </h3>
        {membersLoading ? (
          <div className="flex justify-center py-8"><Loader2 size={20} className="animate-spin text-[#10b981]" /></div>
        ) : members.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between rounded-xl bg-white/5 border border-white/5 px-4 py-3 hover:border-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-[#10b981]/10 flex items-center justify-center text-sm font-bold text-[#10b981]">
                {member.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium text-[#fafafa]">{member.name}</p>
                <span className={`inline-flex items-center gap-1 text-[10px] font-semibold rounded-full px-2 py-0.5 border ${roleColors[member.role]}`}>
                  {roleIcons[member.role]}
                  {member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                </span>
              </div>
            </div>
            {!isReadOnly && (
              <button
                onClick={() => deleteMember(member.id)}
                className="p-1.5 rounded-lg text-[#8c8c8e] hover:text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
