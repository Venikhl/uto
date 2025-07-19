'use client';

import { ReactNode } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

export default function ContentLayout({ children }: { children: ReactNode }) {
  const { collapsed } = useSidebar();

  const sidebarWidth = collapsed ? 70 : 250;
  const sidebarGap = 32; // 32px = 2rem отступ справа

  return (
    <main
      style={{
        marginLeft: `${sidebarWidth + sidebarGap}px`, // ← учитываем отступ
        transition: 'margin-left 0.3s ease',
        padding: '2rem',
        flex: 1,
        minHeight: '100vh',
      }}
    >
      {children}
    </main>
  );
}
