'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useSidebar } from '@/contexts/SidebarContext';
import styles from '@/styles/Sidebar.module.css';
import Logo from '@/static/logo.png';
import {
  FaHome,
  FaChartBar,
  FaFlask,
  FaSearch,
  FaPlus,
} from 'react-icons/fa';

export default function Sidebar() {
  const pathname = usePathname();
  const { collapsed, toggle } = useSidebar();

  const links = [
    { href: '/home', label: 'Home Page', icon: <FaHome /> },
    { href: '/dashboard', label: 'Dashboard', icon: <FaChartBar /> },
    { href: '/TestPage', label: 'Go to test', icon: <FaFlask /> },
    { href: '/', label: 'Search project', icon: <FaSearch /> },
    { href: '/', label: 'Create new', icon: <FaPlus /> },
  ];

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.logoContainer}>
        {!collapsed && <span className={styles.menuText}>MENU</span>}
        <button onClick={toggle} className={styles.toggleBtn}>
          {collapsed ? '☰' : '✖'}
        </button>
      </div>


      <nav className={styles.nav}>
        {links.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.link} ${pathname === href ? styles.active : ''}`}
          >
            <span className={styles.icon}>{icon}</span>
            {!collapsed && <span className={styles.label}>{label}</span>}
          </Link>
        ))}
      </nav>

      <div className={styles.footer}>
        {!collapsed && (
          <>
            <h1>U.T.A</h1>
            <h5>Created by Marina Kotelevskaya</h5>
          </>
        )}
      </div>
    </aside>
  );
}
