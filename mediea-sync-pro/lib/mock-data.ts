import { ServiceItem } from './types';

export const serviceItems: ServiceItem[] = [
  { id: 's1', title: 'Pemindaian Anggota', description: 'Kelola data anggota tim dan struktur organisasi kelas.', icon: 'ScanSearch', requiredRole: 'ketua', modalKey: 'scan' },
  { id: 's2', title: 'Alokasi Beban Kerja', description: 'Delegasikan tugas ke anggota dan pantau progresnya.', icon: 'ListTodo', requiredRole: 'ketua', modalKey: 'allocator' },
  { id: 's3', title: 'Laporan Periodik', description: 'Generate ringkasan kinerja dan progres tim.', icon: 'FileBarChart', requiredRole: 'ketua', modalKey: 'report' },
  { id: 's4', title: 'Manajemen Krisis', description: 'Override dan realokasi tugas yang terhambat.', icon: 'ShieldAlert', requiredRole: 'ketua', modalKey: 'darurat' },
  { id: 's5', title: 'Colek / Pengingat', description: 'Kirim notifikasi pengingat ke anggota tertentu.', icon: 'BellRing', requiredRole: 'ketua', modalKey: 'colek' },
  { id: 's6', title: 'Draft Surat', description: 'Buat template surat resmi organisasi kelas.', icon: 'FileText', requiredRole: 'sekretaris', modalKey: 'draft' },
  { id: 's7', title: 'Jadwal Kegiatan', description: 'Atur dan kelola jadwal acara kelas.', icon: 'CalendarDays', requiredRole: 'sekretaris', modalKey: 'jadwal' },
  { id: 's8', title: 'Papan Pakem', description: 'Kelola aturan dan pedoman organisasi kelas.', icon: 'BookOpen', requiredRole: 'sekretaris', modalKey: 'pakem' },
  { id: 's9', title: 'Brankas Tautan', description: 'Simpan dan kelola tautan penting kelas.', icon: 'Link2', requiredRole: 'sekretaris', modalKey: 'brankas' },
  { id: 's10', title: 'Manajemen Kas', description: 'Kelola keuangan dan kalkulasi iuran kelas.', icon: 'Wallet', requiredRole: 'bendahara', modalKey: 'kas' },
  { id: 's11', title: 'Papan Sinkronisasi', description: 'Pantau progres seluruh tugas tim secara real-time.', icon: 'LayoutDashboard', requiredRole: 'semua', modalKey: 'board' },
  { id: 's12', title: 'SOS / Bantuan', description: 'Ajukan permintaan bantuan darurat ke tim.', icon: 'Siren', requiredRole: 'semua', modalKey: 'sos' },
];
