import React from 'react';
import { useSelector } from 'react-redux';
import { ClipboardList, AlertCircle, Calendar, GraduationCap, ArrowUpRight } from 'lucide-react';

export default function StudentAttendancePage() {
  const { user } = useSelector((state) => state.auth);

  if (!user) return null;

  const rawAtt = user.rawAttendancePercentage || 0;
  const extraCredit = user.extraAttendanceCredit || 0;
  const finalAtt = user.attendancePercentage || 0;

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <header className="glass-card flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 rounded-3xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-display font-black tracking-tight text-[var(--text-primary)] flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500 border border-indigo-200 shadow-sm shrink-0">
              <ClipboardList size={32} />
            </div>
            My Attendance
          </h1>
          <p className="text-[var(--text-secondary)] font-medium mt-1">
            Track your ERP attendance and any extra attendance credits granted by the administration.
          </p>
        </div>
      </header>

      <div className="flex justify-center">
        {/* Attendance Card */}
        <div className="glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center space-y-4 border-2 border-[var(--primary)] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden w-full max-w-sm">
          <div className="absolute -right-8 -top-8 text-[var(--primary)] opacity-10">
            <ClipboardList size={120} />
          </div>
          <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-2xl flex items-center justify-center shadow-lg relative z-10">
            <Calendar size={32} />
          </div>
          <div className="relative z-10">
            <div className="text-[12px] font-black uppercase tracking-widest text-[var(--text-secondary)] mb-1">Total Attendance</div>
            <div className="text-6xl font-black text-[var(--text-primary)] tracking-tighter">{Math.round(finalAtt)}<span className="text-3xl text-[var(--text-secondary)]">%</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
